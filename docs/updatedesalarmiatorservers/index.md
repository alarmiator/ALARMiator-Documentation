---
title: "Update des ALARMiator Servers"
slug: /updatedesalarmiatorservers
---

import DockerCompose from '../../docker-examples/dockercompose.mdx';


# Update des ALARMiator Servers

Von Zeit zu Zeit stellen wir neue Versionen des ALARMiator Servers zur Verfügung. Diese Updates enthalten neben neuen Funktionen manchmal auch Fehlerbereinigungen oder Performance-Verbesserungen. Da ALARMiator auch über Webbrowser verwendet wird, und sich Browser mit der Zeit auch verändern, reagieren wir mit Updates auch auf diese Änderungen. So stellen wir einen möglichst stabilen Einsatz des Servers auf Dauer sicher.



Die folgenden Schritt beschreiben den Ablauf eines Updates des ALARMiator Servers.



### Änderungen des allgemeinen Setups



Hier findet ihr auch Änderungen die nicht direkt ein Softwareupdate des ALARMiators benötigen, jedoch zu unserem empfohlenem Setup dazu gehören:




* Wir empfehlen für VPS Nutzer die Einrichtung einer Subdomain mit https zur Verschlüsselung des Nginx Admin Panels: [Mehr dazu](nginx-proxy-manager-verschluesseln)
* Wir empfehlen das Force SSL und HSTS Flag im Nginx Proxy Manager zu setzen, um zu gewährleisten, dass http Anfragen auf https umgeleitet werden:


![](/img/image-10.png)



## Unterschiede je nach Installationsart



Die Schritte unterscheiden sich je nach Installationsart.  
Wenn du deinen ALARMiator mit der aktuell empfohlenen Docker Compose Installation durchgeführt hast dann benutze die Sektion für Docker Compose. Falls du den ALARMiator Server nativ installiert hast mit pm2 und npm dann benutze die Sektion für Native Installationen. Du findest beide Varianten auf dieser Seite.



***WICHTIG*:** Das ist kein Guide der beschreibt wie eine native Installation auf eine Docker Compose Installation migriert/"geupdated" werden kann. Es geht hier lediglich darum die Version des ALARMiators für deine Betriebsart upzudaten. Solltest du ALARMiator noch nativ installiert haben, kannst du im Guide zur Migration von Nativen Installationen zu Docker Compose nachschauen wie du auf Docker Compose umsteigen kannst.



## Docker Compose Installation



Um deinen Server upzudaten musst du folgendes tun:



### Backup anfertigen



Auch wenn Updates durch die Entwickler mehrfach getestet worden sind vor einer Freigabe, solltest Du sicherheitshalber eine Sicherung anfertigen. Das erreichst Du in der Weboberfläche im Bereich "Admin" - "Backup und Restore" - Neues Backup erzeugen.



Das so erstellte Backup lädst Du vorsichtshalber nun auf einen anderen PC herunter und speicherst es an einem sicheren Ort.



### Anmeldung per SSH Konsole am Server



Starte einen SSH Client (Windows: Putty, Mac OS / Linux: Terminal) und verbinde Dich mit Deinem ALARMiator Server. Unter Putty musst Du den Servernamen eingeben und die Verbindung aufbauen. Unter Linux / Mac OS gebe folgenden Befehl in das Terminal-Fenster ein:



```
ssh Benutzername@ip-Adresse Deines Servers
```



ersetze Benutzername mit dem Bentzernamen, unter dem Dein ALARMiator Server betrieben wird (während der Installation des Servers erstellt, siehe Installation Server). Ersetze *ip-Adresse Deines Servers* mit der IP-Adresse oder dem Hostnamen Deines Servers.



### Wechsel in das Installationsverzeichnis



Wechsle nun in das Verzeichnis, in dem Dein ALARMiator Server installiert wurde. Wenn Du der Anleitung zur Serverinstallation gefolgt bist, dann lautet der Befehl dazu:



```
cd ~/alarmiator-server
```



### Wichtige Änderung für alle Installationen



Hier findet ihr immer die aktuellste docker-compose.yml. Sollte eure anders aussehen müsst ihr diese mit der aktuellen ersetzen. Somit ist gewährleistet, dass alles reibungslos läuft.



Habt ihr als volume in eurem compose eine der folgenden Zeilen stehen müsst ihr diese ändern!



```
alarm-katsys:/alarmiatorserver/plugins/inbound/katsys
```



Oder:



```
alarm-katsys-pem:/alarmiatorserver/plugins/inbound/katsys/pem
```



Dieser Fehler führt dazu, dass euer KatSys Plugin nicht geupdated wird, wenn ihr euch eine neue Installation herunterladet. Das bedeutet für alle Docker Installationen, dass ihr die KatSys Version habt die ihr ursprünglich installiert hattet.



Um dies zu beheben muss folgendes getan werden:



* docker-compose.yml ändern
* Neustarten des Setups mit "docker compose down && docker compose up -d"
* Im Admin-UI eure KatSys .pem Datei erneut hochladen. Falls ihr diese nicht zur Hand habt könnt ihr diese auch in einem Backup des Servers finden. Dazu ein Backup entzippen und im unter plugins/inbound/katsys/uploads danach suchen. Alles andere in der Plugineinstellung kann so gelassen werden. Danach natürlich auf "Speichern" klicken. Im Logviewer unter den Plugin Manager Logs solltet ihr in der Live View sehen, dass Katsys ordentlich verbunden ist.



Ab sofort habt ihr die aktuellste KatSys-Plugin Version und kriegt auch in Zukunft die neueste Version bei einem Update.



Hier die aktuellste docker-compose.yml. Ersetzt eure alte unbedingt mit dieser:



<DockerCompose/>



Falls ihr euch nicht mehr sicher seid wie das mit dem ändern geht könnt ihr nochmal den  [Guide zur Erstinstallation durchschauen](installation-des-servers-via-docker-compose)



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



### Herunterladen des neuen Docker Images



Um das neue Docker Image herunterzuladen und den Server danach sofort neuzustarten gibst du folgenden Befehl ein:



```
docker compose pull && docker compose up -d
```




### Aktualisiertes System testen



Öffne nun ein Browserfenster und öffne die Weboberfläche des ALARMiator Servers. Wird die Oberfläche wie gewohnt geladen, ist das Update erfolgreich abgeschlossen. Wenn die Weboberfläche nicht angezeigt wird, dann scheint es ein Problem beim Update gegeben zu haben. Versuche den Server auf eine vorherige Version zurückzusetzen wie das geht steht im zugehörigen Guide oder melde Dich in der Community.




## Native Installation



### Backup anfertigen



Auch wenn Updates durch die Entwickler mehrfach getestet worden sind vor einer Freigabe, solltest Du sicherheitshalber eine Sicherung anfertigen. Das erreichst Du in der Weboberfläche im Bereich "Admin" - "Backup und Restore" - Neues Backup erzeugen.



Das so erstellte Backup lädst Du vorsichtshalber nun auf Deinen PC herunter und speicherst es an einem sicheren Ort.




### Anmeldung per SSH Konsole am Server



Starte einen SSH Client (Windows: Putty, Mac OS / Linux: Terminal) und verbinde Dich mit Deinem ALARMiator Server. Unter Putty musst Du den Servernamen eingeben und die Verbindung aufbauen. Unter Linux / Mac OS gebe folgenden Befehl in das Terminal-Fenster ein:



```
ssh Benutzername@ip-Adresse Deines Servers
```



ersetze Benutzername mit dem Bentzernamen, unter dem Dein ALARMiator Server betrieben wird (während der Installation des Servers erstellt, siehe Installation Server). Ersetze *ip-Adresse Deines Servers* mit der IP-Adresse oder dem Hostnamen Deines Servers.




### Wechsle in das Installationsverzeichnis



Wechsle nun in das Verzeichnis, in dem Dein ALARMiator Server installiert wurde. Wenn Du der Anleitung zur Serverinstallation gefolgt bist, dann lautet der Befehl dazu:



```
cd ~/alarmiatorserver
```



### Herunterladen des Updates



Lade nun über den folgenden Befehl das neueste Update herunter:



```
wget https://alarmiator.de/wp-content/uploads/2025/10/ALARMiator-Server-1.5.1-stable.zip
```



Nachdem der Download abgeschlossen ist, muss das ZIP-Archiv nun entpackt werden. Stelle sicher, dass Du Dich in dem Verzeichnis befindest, in dem Dein ALARMiator Server installiert ist. Entpacke das Update nun mit dem folgenden Befehl:



```
unzip ALARMiator-Server-1.5.1-stable.zip
```



### Pakete aktualisieren



Überprüfe nun deine Node Version:



```
node -v
```



***ACHTUNG:*** Ist deine Version höher als Version 16, musst du folgenden Befehl vor der Installation ausführen. Falls du 16 und drunter hast. Dann kannst du den nächsten Befehl überspringen.



Für Linux und Mac:



```
export NODE_OPTIONS=--openssl-legacy-provider
```



Für Windows:



```
set NODE_OPTIONS=--openssl-legacy-provider
```



Updates bringen manchmal neue Pakete mit oder erfordern neuere Versionen. Mit dem folgenden Befehl werden nun alle Pakete auf den nötigen Versionsstand gebracht



```
npm install
```



Dieser Vorgang kann ein paar Minuten dauern und teilweise sehr technische Ausgaben in der Konsole anzeigen.



### Server neu starten



Noch läuft Dein Server mit der vorherigen Version. Um das Update abzuschließen, muss der Server nun einmal neu gestartet werden. Während dem Neustart erkennt der Server auch nötige Migrationen und Erweiterungen an der Datenbank und führt diese automatisch durch.



Wenn Du der Installationsanleitung gefolgt bist, dann sollte der ALARMiator Server über den Prozessmanager "PM2" gestartet und gestoppt werden. Du kannst das nochmal überprüfen, indem Du den Befehl



```
pm2 status
```



auf der Konsole eingibt. Hier sollten nun nach ein paar Sekunden eine Liste der laufenden Prozesse erscheinen. In dieser Liste muss ein Eintrag mit dem Namen "WebUI" in der Spalte "name" erscheinen. Dieser Prozess ist Dein laufender ALARMiator Server. In der ersten Spalte findest Du die zugehörige id des Prozesses.



Stoppe den Server nun mit dem Befehl



```
pm2 stop Prozess-id
```



Sobald der Server gestoppt ist, kannst Du ihn neu starten mit dem Befehl



```
pm2 start Prozess-id
```



Der erste Start nach dem Update kann ein paar wenige Sekunden länger dauern als normal, wenn hier z.B. umfangreiche Reorganisationen der Datenbank durchgeführt werden müssen.




### Aktualisiertes System testen



Öffne nun ein Browserfenster und öffne die Weboberfläche des ALARMiator Servers. Wird die Oberfläche wie gewohnt geladen, ist das Update erfolgreich abgeschlossen. Wenn die Weboberfläche nicht angezeigt wird, dann scheint es ein Problem beim Update gegeben zu haben. Prüfe in diesem Fall die Logfiles im Verzeichnis */home/alarmiator/.pm2/logs*. Wenn Du die Ursache nicht identifizieren kannst, dann kannst Du den Server wieder auf den Stand Deines letzten Backups zurückbringen, oder Dich in der Community melden.




### Die ZIP-Datei löschen



Das heruntergeladene ZIP-Archiv kannst Du nun von Deinem Server löschen, es wird nicht mehr benötigt und belegt sonst nur unnötig Platz.



Der Befehl hierzu lautet:



```
rm ALARMiator-Server-1.5.1-stable.zip
```