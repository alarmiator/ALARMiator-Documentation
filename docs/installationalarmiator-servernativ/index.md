---
title: "Installation ALARMiator-Server Nativ"
slug: /installationalarmiator-servernativ
---

# Installation ALARMiator-Server Nativ

**Aktuell wird es empfohlen den Server mit Docker Compose einzurichten, statt ihn nativ zu installieren wie das geht findest du [hier](installation-des-servers-via-docker-compose).  
Solltest du ihn trotzdem nativ installieren wollen ist das der richtige Guide.**



Wir gehen bei den folgenden Schritten davon aus, dass Dein System (Raspberry, Linux Server, Windows Server) bereits grundsätzlich installiert und lauffähig ist.



## Anlegen eines neuen Benutzers



Zunächst legen wir nun einen neuen Benutzer an, unter dem der ALARMiator-Server betrieben wird. Es empfiehlt sich nicht, den Server unter dem normalen Root / Pi User zu betreiben.



Du musst auf Deinem Linux System / Raspberry zunächst mit dem Root oder Pi User angemeldet sein. Gebe nun folgende Befehlszeile ein und bestätige mit Enter:



```
sudo adduser alarmiator
```



Du wirst nach Eingabe dieser Zeile nach einem Passwort für den neuen Benutzer "alarmiator" gefragt. Gebe hier ein sicheres Passwort ein. Achtung: Du benötigst dieses Passwort für viele Aktionen. Sichere Dir das Passwort an einer sicheren Stelle (Passwortmanager, etc.)



Je nach verwendeter Linux Distribution kann es sein, dass Du folgend noch nach weiteren Angaben (Telefonnummer, Raumnummer, etc.) gefragt wirst. Diese Felder kannst Du leer lassen, da es sich hier rein um einen technischen Benutzer handelt.



## Berechtigungen vergeben



Nun müssen dem neuen Benutzer noch entsprechende Berechtigungen erteilt werden. Gib hierzu auf der Befehlszeile folgenden Befehl ein:



```
sudo usermod -aG sudo alarmiator
```



Wenn diese Befehlszeile erfolgreich (ohne Fehlermeldung) verarbeitet wurde, kannst Du Dich mit dem neuen Benutzer und dem vergebenen Passwort anmelden.



## Optional: Anpassen des Hostnamens



Damit Du Deinen Server in Deinem Netzwerk später unter einem einfach zu merkenden Namen erreichen kannst, solltest Du den sog. Hostnamen des Systems nun anpassen. Alternativ kannst Du das System auch dauerhaft über seine IP-Adresse ansprechen. In diesem Fall solltest Du allerdings in Deinem Router einstellen, dass der Server immer die gleiche IP-Adresse erhält.



Zur Anpassung des Hostnamens des Systems auf einem Raspberry starte mit dem folgenden Befehl das Konfigurationstool:



```
sudo raspi-config
```



Nun startet das Konfigurationstool. Wähle im Menü den Punkt "1. System Options" aus. Im daraufhin erscheinenden Untermenü wähle den Punkt "S4 Hostname" aus. Nun kannst Du Deinem System einen sprechenden Namen geben (z.B. alarmiator oder alarmiatorserver).



Bestätige die Dialoge und beende dann das Konfigurationstool wieder. Es bietet sich nun ein Neustart an, damit der neue Hostname wirkt.



## Neustart des Systems



Damit der neu eingerichtete Benutzer und ggf. die Änderung des Hostnamens greifen, solltest Du das System nun einmal neu starten. Das erreichst Du am einfachsten, in dem Du auf der Kommandozeile den folgenden Befehl eingibst:



```
sudo reboot now
```



## Anmelden auf dem System



Melde Dich nun erneut mit Deinem eben angelegten Benutzer am Raspberry an.  
Wenn Du eine Tastatur und Maus sowie einen Monitor an Deinem Raspberry / Linux Server angeschlossen hast, dann kannst Du Dich nun mit dem neu angelegten Benutzer am Desktop anmelden. Starte dann eine neue Konsole/ein Terminal, um die folgenden Schritte auf der Kommandozeile auszuführen.



Hast Du das System ohne Maus, Tastatur und Monitor installiert, dann melde Dich nun über einen SSH-Client am System mit dem neuen Benutzer an. Starte dazu Deinen SSH Client (Windows Putty, MacOS oder Linux Terminal).



## Anlegen eines Installationsordners



Wechsle nun in das Home-Verzeichnis des Benutzers ("alarmiator"). Gebe dazu auf der Konsole den folgenden Befehl ein



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



## Herunterladen des Installationspakets



Lade nun in das neu erstellte Verzeichnis das jeweils aktuellste Installationspaket herunter. Gebe dazu in die Konsole folgenden Befehl ein



```
wget https://alarmiator.de/wp-content/uploads/2025/10/ALARMiator-Server-1.5.1-stable.zip
```



Abhängig von der Bandbreite Deines Internetanschlusses geht der Download relativ schnell. Nach Abschluss findest Du nun eine Datei latest-stable.zip im Verzeichnis.



## Entpacken des Installationspaketes



Nun muss das heruntergeladene Archiv entpackt werden. Gebe hierzu den folgenden Befehl in die Konsole ein:



```
unzip ALARMiator-Server-1.5.1-stable.zip
```



**Achtung:** Wird Dir hier eine Fehlermeldung angezeigt, kann es sein, dass auf Deinem System das nötige unzip-Paket fehlt. Ist das der Fall, dann kannst Du es sehr einfach nachinstallieren mit dem folgenden Befehl



```
sudo apt-get install unzip
```



Beantworte die Frage, ob Du das Paket wirklich installieren möchtest mit Ja. Nach erfolgter Installation kannst Du den vorherigen Befehl zum entpacken nochmals ausführen.



## Aktualisieren aller System-Pakete



Damit alle nötigen Komponenten auf dem aktuellsten Stand sind führe bitte nun folgenden Befehl in der Konsole aus



```
sudo apt-get update && sudo apt-get upgrade && sudo apt-get autoremove
```



Beantworte eventuelle Fragen ob eine Installation durchgeführt werden soll mit Ja. Dein System braucht je nach Aktualität der installierten Pakete nun ein paar Minuten, bis alle Quellen heruntergeladen und installiert sind. Das der Vorgang abgeschlossen ist, siehst Du daran, dass Du wieder die normale Eingabeaufforderung siehst.



## Installation von Abhängigkeiten



Nun installiere bitte mit dem folgenden Befehl nötige zusätzliche Pakete auf Deinem System



```
sudo apt-get install -y apt-utils python2 curl libcups2-dev git gcc g++ make locate sqlite3 libsqlite3-dev ng-common
```



Auch hier kann der automatische Download und die Installation ein paar Minuten dauern. Sobald die Eingabeaufforderung wieder zu sehen ist, ist die Installation der zusätzlichen Pakete abgeschlossen.



## Setzen von Umgebungsvariablen



Gebe nun die folgenden Befehle nacheinander auf der Konsole ein, um Umgebungsvariablen zu setzen



```
sudo apt-get autoremove
```



```
sudo updatedb
```



```
sudo update-alternatives --install /usr/bin/python python /usr/bin/python2 1
```



```
PATH=”$PATH:/usr/bin/python2” && PATH=”$PATH:/usr/bin/python”
```



## Installation von NodeJS



ALARMiator ist eine auf NodeJS basierende Serveranwendung. Damit ALARMiator ausgeführt werden kann, muss nun die aktuelle LTS (Long Term Support) Version von NodeJS installiert werden. Dies erfolgt mit den folgenden Befehlen auf der Kommandozeile:



```
curl -sL https://deb.nodesource.com/setup_lts.x | sudo bash -
```



```
sudo apt-get install -y nodejs
```



Die Installation samt Download kann je nach Geschwindigkeit Deiner Internetverbindung ein paar Minuten dauern. Dass die Installation abgeschlossen ist, erkennst Du daran, dass die Eingabeaufforderung wieder angezeigt wird.



## Start Installation des ALARMiator Servers



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



Nun sind alle Voraussetzungen zur Installation des ALARMiator Servers erfüllt. Mit dem folgendem Befehl startest Du nun die eigentliche Installation des ALARMiator Servers. Gebe dazu den folgenden Befehl auf der Kommandozeile ein



```
npm install
```



NPM ist der sog. NodeJS Package Manager. Der Package Manager prüft nun die ALARMiator Installationsdateien und ermittelt alle nun zu installierenden Pakete. Diese werden nun Stück für Stück heruntergeladen und installiert. Manche Pakete benötigen noch zusätzliche Aktionen, die ggf. auch für Laien unverständliche Ausgaben auf der Konsole ausgeben. Manche Installationsschritte zeigen auch sog. "warnings" an. Diese kannst Du ignorieren. An dieser Stelle musst Du etwas Geduld mitbringen, die Installation dauert ca. 10 Minuten auf einem Raspberry Pi 4. Siehst Du hier allerdings rot markierte ERROR-Meldungen, dann stimmt mit den Voraussetzungen auf Deinem Server etwas nicht. Prüfe nochmal alle vorherigen Schritte. Wenn Du dennoch diesen Schritt nicht erfolgreich abschließen kannst, dann melde Dich in der ALARMiator Community, hier erhältst Du Unterstützung.



## Automatischen Start einrichten



ALARMiator sollte immer so eingerichtet sein, dass er mit dem System automatisch startet. So ist gewährleistet, dass ALARMiator nach einem Ausfall der Spannungsversorgung automatisch wieder startet. Hierzu gebe nun folgenden Befehl auf der Kommandozeile ein



```
sudo npm install -g pm2
```



Dieser Befehl installiert den Node Process Manager. Die Installation benötigt nur wenige Sekunden.



Nun startest Du über pm2 den ALARMiator Server zum ersten mal mit dem Befehl



```
pm2 start alarmiator_pm2.yml
```



Damit ALARMiator nun automatisch mit Deinem System gestartet wird, gebe schlussendlich nun noch folgenden Befehl auf der Kommandozeile ein



```
pm2 startup
```



Folge den Anweisungen in den Ausgaben auf der Konsole.



Dein ALARMiator Server ist nun installiert und gestartet. Nach einem Ausfall der Spannungsversorgung startet ALARMiator Server auch von alleine.



## Überprüfung der Installation



Ob alles geklappt hat und Dein Serber erfolgreiche gestartet wurde kannst Du ganz einfach testen. Versuche dazu die Weboberfläche des ALARMiator Servers in einem Browser zu öffnen. Dazu kannst Du von jedem Computer oder Tablet / Smartphone im gleichen Netzwerk auf die Adresse



http://name Deines Systems:5000



zugreifen. Du solltest nun die Anmeldemaske des ALARMiator Servers angezeigt bekommen. Die Standard-Anmeldedaten für den Administrator lauten



```
Benutzername: admin
Passwort: admin
```



Denke daran, direkt das Passwort des Admin-Benutzers zu ändern. Dies erfolgt nach der Anmeldung über das Benutzermenü rechts oben.