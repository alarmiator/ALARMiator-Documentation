---
title: "Installation Raspberry Pi / Linux Server"
slug: /installationraspberrypilinuxserver
---

# Installation Raspberry Pi / Linux Server

Folgend werden die nötigen Vorbereitungen zur Installation eines ALARMiator Servers auf Basis einen Raspberry Pi4 dargestellt. Eine Installation auf anderer Hardware unterscheidet sich kaum.



## Vorbereitung des Raspberry Pi



### Vorbereitung Hardware



1. Baue den Raspberry in sein Gehäuse ein. Verklebe ggf. mit gelieferte Kühlkörper aus die einzelnen Bauteile des Raspberry.
2. Schließe den Raspberry wenn möglich an ein LAN-Kabel an.



### Vorbereitung Betriebssystem



Damit der Raspberry genutzt werden kann, benötigt er ein installiertes Betriebssystem auf der SD-Karte. Bei Raspberrys heisst dieses Betriebssystem Raspberry Pi OS, das kostenlos von der Website des Herstellers geladen werden kann.



* Achte darauf, eine leere SD-Karte zu nutzen, denn nach dem Übertragen des Betriebssystems auf die SD Karte sind alle vorher darauf gespeicherten Daten unwiederbringlich verloren.


* Um das Betriebssystem auf die SD Karte zu schreiben, kannst Du vorhandene kostenfreie Tools wie den Raspberry Pi Imager verwenden. Wie dieser Vorgang durchzuführen ist, ist auf der Website des Anbieters der Tools beschrieben.



### Vorkonfiguration für den "Headless" Modus



Möchtest Du den Raspberry Pi über WLAN in Dein Netzwerk einbinden und keinen Monitor und eine Tastatur anschließen, so musst Du vor dem ersten Start des Raspberry noch den Zugang zu Deinem WLAN-Netzwerk konfigurieren.



* Schiebe die SD-Karte in einen Kartenleser ein und verbinde den Kartenleser mit Deinem Computer. Nach kurzer Zeit erscheint die SD-Karte als neues Laufwerk in Deinem Dateiexplorer.


* Lege nun eine leere Datei mit dem Namen "**.ssh**" (*Achtung, mit Punkt als erstes Zeichen*) direkt auf der SD-Karte an. Diese Datei sorgt dafür, dass Dein Raspberry nach dem Bootvorgang eine Anmeldung über SSH-Konsole zulässt (wird für die weitere Installation benötigt).


* Lege nun eine weitere leere Datei mit dem Namen "wpa\_supplicant.conf" auf der SD-Karte an. Diese Datei füllen wir im folgenden Schritt nun mit den nötigen Informationen um dem Raspberry Pi den Zugang zu Deinem WLAN-Netzwerk zu ermöglichen.


* Wähle einen Texteditor Deiner Wahl und fülle nun die eben erstellte Datei **wpa\_supplicant.conf** mit den folgenden Zeilen. Ersetze dabei ***Netzwerkname*** mit dem Namen Deines WLAN-Netzes und ***meinschluessel*** mit dem Passwort Deines WLAN-Netzes.



```
network={
     ssid="Netzwerkname"
     scan_ssid=1
     proto=RSN
     key_mgmt=WPA-PSK
     pairwise=CCMP
     group=CCMP
     psk="meinschluessel"
}
```



* Speichere Deine Änderungen und trenne das Laufwerk der SD-Karte dann über Dein Betriebssystem (Windows: Rechtsklick auf Laufwerk - auswerfen)



### Erster Start des Raspberry Pi



* Entnehme die SD-Karte nun aus dem Kartenleser und schiebe sie vorsichtig in den Kartenhalter des Raspberry Pi.
* Stelle sicher, dass das konfigurierte WLAN verfügbar ist, oder dass das LAN-Kabel zwischen Raspberry Pi und Deinem Router/Switch eingesteckt ist.
* Schließe nun das Netzteil des Raspberry Pi an und schalte ggf. die Spannungsversorgung ein. Der Raspberry beginnt nun mit der Startprozedur. Wenn alles richtig gelaufen ist, dann siehst Du. nun eine rote und eine grüne LED unregelmässig flackern.



### Überprüfung des installierten Systems



Nun ist es an der Zeit zu prüfen, ob alle vorherigen Schritte erfolgreich waren und ob der Raspberry nun in Deinem Netzwerk erreichbar ist. Das unterscheidet sich ein wenig von der Art der Installation (also ob Du ihn mit Monitor und Tastatur oder "headless" betreibst).



#### Mit Tastatur, Maus und Monitor



Während dem Startvorgang siehst Du zunächst eine farbige Karte für ein paar Sekunden. Danach erscheint das Raspberry Pi OS Logo. Wenn der Startvorgang abgeschlossen ist, siehst Du je nach gewählter Betriebssystemvariante (Desktop oder minimal) den Raspberry Pi Desktop oder die Anmeldung auf der Konsole.



Öffne nun den Chrome-Browser aus dem Desktop heraus und prüfe, ob Du eine normale Website öffnen kannst. Gib hierzu einfach in die Adresszeile des Browsers https://www.alarmiator.de ein. Wird die Website geladen und angezeigt, so hast Du Grundvoraussetzungen für eine Installation des ALARMiator auf Raspberry Pi erfüllt und kannst zum nächsten Kapitel wechseln. Wenn Du keine Verbindung aufbauen kannst, so prüfe nochmal alle vorherigen Schritte oder bitte in der ALARMiator Community andere User um Unterstützung.



#### Headless



Damit Du überprüfen kannst, ob der Raspberry sich wie gewünscht im Netzwerk angemeldet hat und erreichbar ist, musst Du die IP-Adresse des Raspberry in Deinem Netzwerk ermitteln.



* Dazu öffnest Du die Verwaltungsoberfläche Deines Routers (z.B. Fritz Box). In jedem Router findet man eine Liste aller im Netzwerk angemeldeten Geräte. In dieser Liste suchst Du nun das Geräte mit den Namen "Raspberrypi" und schreibst Dir die IP-Adresse auf. Wenn Dein Router die Vergabe von festen IP-Adressen erlaubt, dann konfiguriere diese Option am besten für Deinen Raspberry. So ist er auch nach einem Stromausfall oder Router-Neustart immer unter der gleichen IP-Adresse im lokalen Netzwerk erreichbar.
* Starte nun einen sog. SSH-Client. Je nach dem von Dir auf Deinem Computer verwendeten Betriebssystem gibt es hier unterschiedliche Clients. Für Windows kann hier Putty genutzt werden. Auf Apple Computern ist das Terminal bereits Teil des Betriebssystems und kann für die folgenden Schritte genutzt werden. Auch Linux-Betriebssysteme liefern bereits die Konsole mit.
* Verbinde Dich mit Deinem SSH-Client nun mit der IP-Adresse des Raspberry Pi. Verwende als Benutzername "***pi***" und als Passwort "***raspberry***".
* Kommt die Verbindung zu Stande hast Du die Grundvoraussetzungen für eine Installation des ALARMiator auf Raspberry Pi erfüllt und kannst zum nächsten Kapitel wechseln. Wenn Du keine Verbindung aufbauen kannst, so prüfe nochmal alle vorherigen Schritte oder bitte in der ALARMiator Community andere User um Unterstützung.