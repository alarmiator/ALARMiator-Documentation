---
title: "Von Nativer Installation zu Docker Compose migrieren"
slug: /vonnativerinstallationzudockercomposemigrieren
---

# Von Nativer Installation zu Docker Compose migrieren

Eine Installation mit Docker Compose bringt für dich als Administrator einige Vorteile bezüglich des Installationsaufwands und des Aufwands den es benötigt den Server upzudaten. Deshalb empfehlen wir ein natives Setup zu Docker Compose zu migrieren.



Im folgenden werden die nötigen Schritte beschrieben die dafür notwenig sind.



## Natives Setup Updaten



Um später dein Backup problemlos einzuspielen update zuerst deinen nativen Server. Starte diesen nach dem Update und führe danach einen Neustart über das Adminpanel aus, um den neuen Datenbankmodus zu starten, der mit dem neuen Release benutzt wird, um den Server zu beschleunigen.



## Docker installieren



Solltest du Docker noch nicht installiert haben kannst du im Guide zur [Installation des Servers mit Docker Compose](installation-des-servers-via-docker-compose) nachschauen wie das geht. Relevant sind Schritte 1 bis einschließlich 4. Folge nach dem Installieren von Docker wieder diesem Guide, um die Migration durchzuführen.



## Backup anlegen



**Diesen Schritt auf keinen Fall überspringen** wir benötigen das Backup danach, um es ins frische Compose Setup einzuspielen!



Hast du kein Backup wirst du danach einen frischen Server haben.



Ein Backup kannst du im Admin UI erstellen unter dem Reiter "Backup & Restore". Lade es dir danach herunter und lege es irgendwo sicher ab.



## Neuer Ordner im Home Verzeichnis



Du solltest auf deinem Server einen Ordner "alarmiatorserver" oder ähnliches eingerichtet haben, in dem alle Dateien für die Native Installation liegen. Wir empfehlen dir im Home Verzeichnis einen neuen Ordner anzulegen:



```
cd ~ && mkdir alarmiator-server && cd alarmiator-server
```



## Compose File erstellen



Nun wollen wir ein sogenanntes Compose File erstellen:



```
nano docker-compose.yml
```



Kopiere folgenden Text in das File und speicher es ab:



```
networks:
  alarmiator-network:
    name: alarmiator-network
    driver: bridge

services:
  alarmiator_service:
    networks:
      - alarmiator-network
    restart: always
    image: alarmiator/alarmiator
    healthcheck:
      test: curl --fail http://localhost:5000 || exit 1
      interval: 20s
      retries: 5
      start_period: 600s
      timeout: 10s
    volumes:
      - alarm-db:/alarmiatorserver/store
      - alarm-katsys-uploads:/alarmiatorserver/plugins/inbound/katsys/uploads
      - alarm-public-img:/alarmiatorserver/public/assets/img
      - alarm-uploads:/alarmiatorserver/uploads
      - alarm-logs:/alarmiatorserver/logs
      - alarm-backups:/alarmiatorserver/backup
  nginxProxyManager:
    networks:
      - alarmiator-network
    image: 'jc21/nginx-proxy-manager:2.10.0'
    restart: always
    depends_on:
      alarmiator_service:
        condition: service_healthy
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    healthcheck:
      test: curl --fail http://localhost:81 || exit 1
      interval: 20s
      retries: 5
      start_period: 10s
      timeout: 10s
    volumes:
      - /nginx-pm/data:/data
      - /nginx-pm/letsencrypt:/etc/letsencrypt

volumes:
  alarm-db:
  alarm-katsys-uploads:
  alarm-public-img:
  alarm-uploads:
  alarm-logs:
  alarm-backups:
```



Dieser Text sagt Docker wie er unseren Alarmiator Server zum laufen bringen soll. Das erspart uns jegliche weitere manuelle Installation.  
Auch beim Update des Servers wird automatisch ein neues Release heruntergeladen und danach sofort gestartet.



### Beta Tester werden



Falls du bzw. deine Organisation schneller Neuerungen erhalten möchte bieten wir eine Beta Version an. Diese wird hochgeladen, nachdem wir ein Release getestet haben und erlaubt es euch vor dem offiziellen Release diese Beta Versionen zu testen. Falls ihr dann Probleme entdeckt könnt ihr uns diese melden und wir können Sie vor dem offiziellen Release noch beheben.



Um auf die Beta Version umzusteigen muss folgende Zeile in der docker-compose.yml geändert werden:



```
    image: alarmiator/alarmiator
```



zu:



```
    image: alarmiator/alarmiator:latest-beta
```



Das Beta Image wird nicht automatisch geupdated. Das muss dennoch wie bei einem normalen Release manuell getan werden wie im nächsten Abschnitt erklärt. Man kann sich jedoch mit einem Projekt namens [Watchtower](https://containrrr.dev/watchtower/) selbst ein Monitoring einrichten, um Benachrichtigungen zu erhalten, wenn eine neue Beta Version hochgeladen wurde.



## Das neue Release (Docker Image) herunterladen



Um das Docker Image herunterzuladen gib folgendes ein:



```
docker compose pull
```



Das lädt erstmal das Image herunter und entpackt es. So können wir das neue Release herunterladen ohne den Nativen ALARMiator Server zu stoppen. Das erspart uns eine lange Downtime beim migrieren.



## Natives Setup stoppen



Bevor wir jedoch starten müssen wir das alte Setup erstmal stoppen.



Das Native Setup hat ja bereits Docker Images wie den Nginx Proxy Manager am laufen. Diesen wollen wir nun stoppen.   
Suchen wir einmal unseren Container:



```
 docker ps --format "{{.ID}}: {{.Image}}"
```



Wir wollen den goaccess Container und den Nginx Proxy Manager stoppen. Du siehst in deiner Konsole nun jeweils links die ID des Containers und Rechts davon den Image Namen. Gebe also für diese beiden Container diesen Befehl nacheinander ein und ersetze jeweils die container\_id:



```
docker stop container_id && docker rm container_id -v
```



Gibst du jetzt wieder den "docker ps " Befehl von oben ein solltest du keine laufenden Container mehr sehen, außer den Portainer. Dieser darf bleiben.



So nun wollen wir noch den eigentlichen nativen ALARMiator-Server stoppen. Navigiere dazu in den Ordner des nativen Setups:



```
cd ../alarmiatorserver && ls
```



Du solltest nun alle Ordner und Dateien des letzten Releases sehen. Gebe hier folgendes ein:



```
pm2 delete 0
```



Das löscht den alten Server aus der pm2 Startup Liste.



Navigieren wir nun wieder in den Ordner für das neue Setup:



```
cd ../alarmiator-server
```



## Docker Compose Setup starten



Gebe folgendes ein, um eine frische Instanz hochzufahren:



```
docker compose up -d
```



Sieht dein Terminal so aus läuft bereits alles was du benötigst:


![](/img/image-6-1024x70.png)



Als1 nächstes wollen wir den Server von außen über einen Reverse Proxy erreichbar machen.



## Monitoring des Traffics



Solltest du Monitoring wollen können wir goaccess empfehlen. Dieser liest die Logs des Reverse Proxies aus und visualisiert Sie.  
Hier sind jedoch sensible Daten zu sehen. Stelle also unbedingt sicher, dass dieses Dashboard nicht öffentlich zu erreichen ist.  
Hier ist eine yml Konfiguration die du als Service in die docker-compose.yml schreiben könntest:



```
goaccess:
    image: xavierh/goaccess-for-nginxproxymanager:latest
    container_name: goaccess
    restart: always
    depends_on:
      nginxProxyManager:
        condition: service_healthy
    environment:
        - TZ=Europe/Berlin
        - LOG_TYPE=NPM
    ports:
        - '7880:7880'
    volumes:
      - /nginx-pm/data/logs:/opt/log:ro
```



Da der interne Port 7880 auf den Host gemapped wird ist dieser auf einer VPS sofort unverschlüsselt zu erreichen. Falls du dich nicht gut genug auskennst empfehlen wir dir kein Monitoring auf diese Weise einzurichten.



## SSL Zertifikate installieren



### Voraussetzungen – Portweiterleitung



Damit die entsprechenden Zertifikate erstellt werden können, muss Dein ALARMiator Server über den Port 80 und Port 443 aus dem Internet erreichbar sein. Die Zertifizierungsstelle baut während des Prozesses kurz eine Verbindung zu Deinem Server auf um sicher zu stellen, dass die Anfrage auch berechtig ist.



Um Deinen ALARMiator Server über Port 80 und Port 443 aus dem Internet erreichbar zu machen, musst Du in Deinem Router (der die Internetverbindung herstellt) und ggf. auch in Firewall-Systemen (solltest Du welche betreiben) eine Port-Weiterleitung einrichten. Da dies von Router zu Router unterschiedlich eingerichtet wird, können wir hier an dieser Stelle keine direkte Anleitung geben. Suche in der Oberfläche Deines Router nach Begriffen wie „Port-Forwarding, Port-Weiterleitung, etc.“.



Meist gibt man einen Quellport (das ist der aus dem Internet ankommende, hier Port 80 und Port 443), eine IP-Adresse des Zielsystems (in unserem Fall Dein ALARMiator Server) und einen Zielport an (in unserem Fall auch wiederum Port 80 und Port 443).



### SSL-Zertifikat anfordern



Verbinde dich in deinem Browser mit deinem NGINX Proxy Manager:



```
```ip-addresse```:81
```



Standardlogin bei Erstanmeldung ist:



```
Email:    admin@example.com
Password: changeme
```



Nach Änderung deiner Login Daten solltest du folgendes sehen:


![](/img/image-1024x341.png)



Klicke auf „SSL Certificates“ dann auf „Add SSL Certificate“:


![](/img/image-1.png)



Trage unter Domain Names deine Domain für deinen ALARMiator ein und drücke Enter.



Gebe nun noch eine Mail an, um dein SSL Zertifikat von Let’s Encrypt anzufordern.



Drücke auf Save.



Du hast nun dein SSL Zertifikat angefordert.



## Reverse Proxy einrichten



Als nächstes wollen wir unseren Alarmiator Server ordentlich über einen Reverse Proxy nach außen zugänglich machen.



Navigiere zu „Proxy Hosts“ und klicke auf „Add Proxy Host“.


![](/img/grafik.png)



Du solltest folgendes sehen:


![](/img/grafik-1-937x1024.png)



Hier müssen wir nun eintragen wie unser Proxy auf den ALARMiator Server weiterleiten soll.



**WICHTIG: Es muss „alarmiator\_service“ als hostname angegeben sein. Dieser ist in unserer compose.yml so genannt worden und muss auch hier übereinstimmen. Zusätzlich darf der hostname von eurem Server nicht identisch sein. Habt ihr also euren Docker Host als ihr Linux installiert habt „alarmiator\_service“ genannt solltet ihr in der oben angegeben docker-compose-yml alle Vorkommnisse von alarmiator\_service zu etwas anderem ändern und logischer Weise auch im Nginx Proxy Manager diesen neuen Namen verwenden.**


![](/img/image-2.png)



Ersetze hier natürlich die Domain Names mit deiner Domain. Den Rest kannst du 1:1 übernehmen.



Klicke nun auf den Custom Locations Tab. Klicke auf Add Location um eine neue Weiterleitung einzufügen:


![](/img/image-3.png)



**Beachte hier den extra Slash hinter alarmiator\_service**. Diesen benötigst du nur für die Api Location.



Nun tragen wir noch zwei weiter Locations ein.


![](/img/image-5-807x1024.png)



Das ist einmal die Weiterleitung für das Wallboard und als zweites die Weiterleitung für den Spaceport.



Wähle nun noch dein Zertifikat im SSL Tab aus.


![](/img/image-9.png)



Force SSL und HSTS dienen zur Erhöhung der Sicherheit und sollten gesetzt sein.



Das war’s auch schon. Du solltest deinen ALARMiator Server jetzt SSL verschlüsselt über deine Domain erreichen können!  
Falls du das nicht kannst haben wir eine Docker Troubleshooting Guide. Dort ist beschreiben wie du zum Beispiel alle Container mit Log Ausgaben startest usw.



## Backup einspielen



Logge dich auf deiner frischen ALARMiator Instanz ein mit dem Standardlogin:



* Username : admin
* Passwort : admin



Navigiere zum Reiter "Backup & Restore" und lade dein zuvor erstelltes Backup Hoch. Klicke danach auf den "Wiederherstellen" Button.



Dein Server startet nun einmal neu und ist danach wieder eingerichtet wie vor dem Migrieren.



Sollte er nach dem Laden des Backups noch nicht wieder auf dem alten Stand sein sprich du findest immer noch eine frische Instanz vor, versuche einmal mittels 'docker compose down' und erneutem 'docker compose up -d', ob es danach geht. Dadurch, dass Docker den Container nach dem Backup wiederherstellen sofort wieder hochfährt könnte es sein, dass die "alte frische Datenbank" noch zwischengespeichert ist. Ein komplettes herunterfahren und wieder hochfahren durch dich löst dieses Problem jedoch.



## Natives Setup löschen



Du solltest natürlich erstmal den aktuell eingerichteten Server testen bevor du die alte Installation von deinem Server löscht.   
Du musst lediglich den alarmiatorserver Ordner löschen.



```
cd ~ && ls
```



Du solltest jetzt zwei Ordner sehen "alarmiatorserver" und "alarmiator-server". Wenn du unseren Guides gefolgt bist musst du "alarmiatorserver" löschen:



```
rm -rf alarmiatorserver
```



## Für VPS oder Root Server Nutzer



Um auch euren Nginx Proxy Manager zu verschlüsseln lest euch diesen Guide durch. Dies ist ein wichtiger Schritt und sollte nicht vernachlässigt werden, um zu gewährleisten, dass eure Kommunikation zum Admin Panel des Proxies mit https verschlüsselt ist.



Hier geht's [zum Guide](nginx-proxy-manager-verschluesseln).