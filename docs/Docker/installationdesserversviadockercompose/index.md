---
title: "Installation des Servers via Docker Compose (empfohlen)"
slug: /installation-des-servers-via-docker-compose
---

# Installation des Servers via Docker Compose (empfohlen)

Um den ALARMiator Server via Docker installieren zu können benötigst du natürlich erstmal Docker.



Installiere Docker für dein Betriebssystem die Ubuntu Installationsanleitung ist unten nochmal auch hier dokumentiert:



* [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
* [Debian](https://docs.docker.com/engine/install/debian/)
* [Windows](https://docs.docker.com/desktop/install/windows-install/)



Wir empfehlen ganz klar ***keine*** Installation auf Windows und die hier angegeben Installationsbefehle funktionieren auf jeden Fall unter Linux. Für Windows müssen Sie manchmal abgeändert werden.



Wir empfehlen die Installation auf Linux Servern oder Raspberry Pi's welche auch Linux als Betriebssystem nutzen. Diese sind am zuverlässigsten für Webserver.



### Installationsanleitung für Linux



Für Raspberry Pi's folgt den Schritten für eine Debian Installation, diese funktioniert für Pi's, während die Ubuntu Installation nicht funktioniert.



Hier sind die nötigen Befele, welche du nacheinander in dein Terminal kopieren kannst:



```
 sudo apt-get update
```



```
 sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```



Wähle hier jeweils Debian/Raspberry Pi oder Ubtunu aus!



### Für Raspberry Pi und Debian:



```
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```



```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list  /dev/null
```



### Für Ubuntu:



```
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```



```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list  /dev/null
```



### Ab hier wieder für beide Varianten gleich:



```
sudo apt-get update
```



```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```



Mit diesem Befehl kannst du testen, ob Docker ordentlich installiert ist. Das startet einen Container, welcher eine kurze Nachricht in dein Terminal schreibt und dann wieder verschwindet.



```
 sudo docker run hello-world
```



Nun wollen wir Docker so konfigurieren, dass es auch ohne sudo läuft.



```
 sudo groupadd docker
```



```
sudo usermod -aG docker $USER
```



Für Systeme die nicht Ubuntu oder Debian laufen haben muss noch folgendes gemacht werden : [Autostart einrichten](https://docs.docker.com/engine/install/linux-postinstall/#configure-docker-to-start-on-boot-with-systemd)



Auf Ubuntu und Debian ist der Autostart bereits nach der Installation eingerichtet.   
  
Starte nun deinen Server neu mit diesem Befehl:



```
sudo reboot now
```



Du hast jetzt erfolgreich Docker installiert!



### Anmerkung zu Windows



Unter Windows benötigen wir das WSL 2 Backend. Im verlinkten [Installationsguide](https://docs.docker.com/desktop/install/windows-install/) von Docker selbst gibt es die Möglichkeit der Installation um Linux Container ausführen zu können (wie unseren ALARMiator Container) oder eben Windows Container ausführen zu können. Wir benötigen das WSL (Windows Subsystem for Linux) Backend.




### Anlegen eines Installationsordners



Wechsle nun in das Home-Verzeichnis auf deiner Maschine. Gebe dazu auf der Konsole den folgenden Befehl ein



```
cd ~
```



Um nun einen Installationsordner zu erstellen, gebe den folgenden Befehl auf der Konsole ein



```
mkdir alarmiatorserver
```



Mit diesem Befehl wurde nun im Home-Ordner des Benutzers ein Verzeichnis alarmiatorserver erzeugt.



Wechsle nun in den neuen Ordner mit dem Befehl



```
cd alarmiatorserver
```




### Docker-Compose.yml erstellen



Gebe folgendes ein:



```
nano docker-compose.yml
```



In dieses Editor Fenster kopierst du folgenden Text:



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



### Docker Compose Setup starten



Um nun den ALARMiator zu starten gibst du einfach folgendes ein und wartest, bis du wieder etwas im Terminal eingeben kannst:



Also



```
docker compose up -d
```



Sieht dein Terminal so aus läuft bereits alles was du benötigst:


![](/img/image-6-1024x70.png)



Als1 nächstes wollen wir den Server von außen über einen Reverse Proxy erreichbar machen.



## Monitoring des Traffics



Solltest du Monitoring wollen können wir goaccess empfehlen. Dieser liest die Logs des Reverse Proxies aus und visualisiert Sie.   
Hier sind jedoch sensible Daten zu sehen. Stelle also unbedingt sicher, dass dieses Dashboard nicht von außen zu erreichen ist.   
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



Da der interne Port 7880 auf den Host gemapped wird ist dieser jedoch auf einer VPS sofort unverschlüsselt zu erreichen. Falls du dich nicht gut genug auskennst empfehlen wir dir kein Monitoring auf diese Weise einzurichten.



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



Navigiere zu "Proxy Hosts" und klicke auf "Add Proxy Host".


![](/img/grafik.png)



Du solltest folgendes sehen:


![](/img/grafik-1-937x1024.png)



Hier müssen wir nun eintragen wie unser Proxy auf den ALARMiator Server weiterleiten soll.



**WICHTIG: Es muss "alarmiator\_service" als hostname angegeben sein. Dieser ist in unserer compose.yml so genannt worden und muss auch hier übereinstimmen. Zusätzlich darf der hostname von eurem Server nicht identisch sein. Habt ihr also euren Docker Host als ihr Linux installiert habt "alarmiator\_service" genannt solltet ihr in der oben angegeben docker-compose-yml alle Vorkommnisse von alarmiator\_service zu etwas anderem ändern und logischer Weise auch im Nginx Proxy Manager diesen neuen Namen verwenden.**


![](/img/image-2.png)



Ersetze hier natürlich die Domain Names mit deiner Domain. Den Rest kannst du 1:1 übernehmen.



Klicke nun auf den Custom Locations Tab. Klicke auf Add Location um eine neue Weiterleitung einzufügen:


![](/img/image-3.png)



**Beachte hier den extra Slash hinter alarmiator\_service**. Diesen benötigst du nur für die Api Location.



Nun tragen wir noch zwei weiter Locations ein.


![](/img/image-5-807x1024.png)



Das ist einmal die Weiterleitung für das Wallboard und als zweites die Weiterleitung für den Spaceport.



Wähle nun noch dein Zertifikat im SSL Tab aus.


![](/img/image-6.png)



Force SSL und HSTS Enabled dienen beide dazu die Verbindung sicherer zu machen und sollten aktiviert werden.



Das war's auch schon. Du solltest deinen ALARMiator Server jetzt SSL verschlüsselt über deine Domain erreichen können!  
Falls du das nicht kannst haben wir eine Docker Troubleshooting Guide. Dort ist beschreiben wie du zum Beispiel alle Container mit Log Ausgaben startest usw.



## Für VPS oder Root Server Nutzer



Bitte lest euch [diesen Guide](nginx-proxy-manager-verschluesseln) durch.