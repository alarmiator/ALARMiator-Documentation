---
title: "Installation auf Basis Raspberry Pi Zero W2"
slug: /installation-auf-basis-raspberry-pi-zero-w2
---

# Installation auf Basis Raspberry Pi Zero W2

Der neue Raspberry Pi Zero 2W bietet sich perfekt als Wallboard-Monitor Hardware an. Der kleine Einplatinencomputer liegt bei ca. 15 EUR Verkaufspreis bei einschlägigen Versandhändlern. Durch seine kleine Baugröße findet er auch direkt hinter einem Monitor / Fernseher Platz und er bietet alle Anschlüsse, die man für den Betrieb eines abgesetzten Wallboard benötigt.




## Hardware



Du benötigst pro Wallboard-Monitor folgende Hardwarekomponenten



* Raspberry Pi Zero W2
* Gehäuse für den Raspberry Pi Zero 2W (auch die Gehäuse vom Raspberry Pi Zero W passen)
* Micro-SD-Karte (mind. 8 GB)
* Steckernetzteil mit mind. 2.5 Ampere und Micro-USB-Anschluss
* Adapter von Mini-HDMI - HDMI
* Adapter von mico-USB auf USB (falls Du ein Keyboard anschließen möchtest. Wenn Du Keyboard und Maus anschließen möchtest, benötigst Du zwei dieser Adapter)



## Installation



Wir verwenden als Betriebssystem für diese Anleitung eine spezielle Distribution [Chillipie](https://github.com/jareware/chilipie-kiosk), die auf sog. Kiosk-Betrieb ausgelegt ist. Der Raspberry startet hier direkt in einen Vollbild-Browser, der Dein Wallboard anzeigt. Die Distribution verzichtet dabei auf alles, was Du für diesen Einsatzbereich nicht benötigst.



Lade das aktuellste Release von Chillipie auf Deinen PC herunter. Entpacke das Image nach dem Download.  
  
[Hier ist der Link zum](https://github.com/jareware/chilipie-kiosk/releases/download/v3.0.0-rc4/chilipie-kiosk-3.0.0-rc4.img.tar.gz) [Release](https://github.com/jareware/chilipie-kiosk/releases/download/v3.0.0-rc4/chilipie-kiosk-3.0.0-rc4.img.tar.gz)



Nun starte ein Programm, mit dem Du das Image auf die Micro-SD-Karte des Raspberry Pi schreiben kannst. Wir empfehlen die Nutzung von Etcher.io oder auch des Raspberry Pi Imagers.



Nachdem das Image auf die micro-SD-Karte geschrieben wurde, verbinde die Micro-SD Karte nochmals mit Deinem PC.



## WLAN-Verbindung konfigurieren



Starte einen Texteditor und erstelle eine neue Datei mit dem Namen "wpa\_supplicant.conf" auf der boot-Partition der Micro-SD-Karte. Diese Datei sorgt dafür, dass der Raspberry Pi beim Start direkt Dein WLAN verbinden kann. Fülle die Datei wpa\_supplicant.conf mit dem folgenden Textzeilen:



```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=DE

network={
    ssid="WiFi-SSID"
    psk="WiFi-PASSWORD"
    key_mgmt=WPA-PSK
}
```



Ersetze hier WiFi-SSID mit dem Namen Deines WLAN Netzes, in das sich der Raspberry einbuchen soll. Ersetze WiFi-PASSWORD mit dem Passwort des WLAN Netzes, in das der Raspberry sich einbuchen soll.



## SSH-Verbindung konfigurieren



Damit Du zukünftig auch per SSH Konsole aus dem Netzwerk auf den Raspberry zugreifen kannst, musst Du den SSH-Dienst aktivieren. Das lässt sich sehr einfach erledigen, in dem Du auf der micro-SD Karte eine leere Textdatei mit dem Namen "ssh" (ohne Dateierweiterung) speicherst. Der Raspberry prüft beim Start auf dieses Datei und wenn sie vorhanden ist wird der SSH-Port gestartet.



Nun werfe die SD-Karte aus dem Betriebssystem aus und setze sie in den Micro-SD Slot Deines Raspberry Pi Zero W2 ein.



Setze den Raspberry in sein Gehäuse ein und verschließe das Gehäuse.



Stecke nun den HDMI-Adapter an den Raspberry Pi an und stecke das HDMI-Kabel an den Adapter an.



Stecke den USB-Adapter an und verbinde ihn mit einer Tastatur.



## Erster Start



Stecke nun den Stecker der Stromversorgung an den Raspberry an und stelle danach die Spannungsversorgung her.



Der Raspberry wird nun starten. Nach kurzer Zeit siehst Du ein Logo mit einem Einhorn, bis der Raspberry vollständig gebootet ist.



Wenn Dein Monitor / Fernseher einen Browser zeigt, auf dem die Google Startseite zu sehen ist, dann ist der Ladevorgang abgeschlossen.



## Initiale Einrichtung



### Wallboard-URL einrichten



Die Google-Startseite ist aktuell im Vollbildmodus zu sehen. Drücke auf Deiner Tastatur nun die Taste F11, um den Vollbildmodus zu beenden. Drücke dann die Tastenkombination STRG-L, um die Adressleiste anzuzeigen. Gebe nun in die Adressleiste die vollständige Adresse inkl. Token zu Deinem Wallboard ein und drücke anschließen ENTER.



Dein Wallboard sollte nun geladen werden und fehlerfrei angezeigt werden. Drücke nun wieder die Taste F11, und das Wallboard wird im Vollbildmodus angezeigt.



### Hostnamen ändern



Der Raspberry hat standarmässig den Hostnamen "chilipie-kiosk". Wenn Du nur ein Wallboard betreiben möchtest, kannst Du den Hostnamen auch beim Standrd belassen. Wenn Du mehrere einrichten willst, dann solltest Du nun den Hostnamen auf jeden Fall anpassen. Auch wenn Du nur ein Wallboard betreibst, kannst Du einen einfacher zu merkenden Hostnamen vergeben. In unserem Beispiel setzen wir den Hostnamen auf "wallboard01".



Das nötige Konfigurations-Tool erreichst Du über die Tastenkombination `Strg + Alt + F2`. Nun siehst Du das Tool "raspi-config".



Wähle nun den Menüpunkt `Network Options` aus.



Im nun erscheinenden Untermenü wählst Du `Hostname` aus.



Nun kannst Du einen neuen Hostnamen vergeben. ***Beachte***: Ein Hostname kann nur aus a-z, 0-9 bestehen. Keine Leerzeichen, keine Sonderzeichen!



Speichere Deine Änderung mit "Finish" und starte den Raspberry dann einmal neu. Nun ist Dein Raspberry unter dem neuen Hostnamen im Netzwerk erreichbar.



## Austausch des Start-Logos



Das während des Startvorgangs angezeigte Einhorn-Logo sollte nun noch ersetzt werden. Dazu musst Du auf dem Raspberry im Verzeichnis



`/home`



die Datei ***`background.png`*** ersetzen gegen die folgende Datei :


![](/img/background.png)



Dazu kannst Du z.B. das [Programm FileZilla](https://filezilla-project.org/) verwenden. Mit FileZilla kannst Du eine SFTP-Verbindung zu Deinem Chilipie-kiosk herstellen und die Datei angenehm von Deinem lokalen PC auf den Chilipie kopieren.



Wenn Du Deinen Raspberry nun neu startest, wird das ALARMiator Logo mit dem Hinweis "Wallboard wird geladen" angezeigt.



## Die Bildschirmausrichtung anpassen



Wenn Du Dein Wallboard um 90° gedreht montiert hast, dann kannst Du auch die Anzeige entsprechend drehen.



Drücke die Tastenkombination `Strg + Alt + F3` um eine Konsole zu öffnen. Nun kannst Du mit z.B. dem vi-editor die Datei `/boot/config.txt` bearbeiten. (Verwende `sudo` !) Am Ende der Datei musst Du eine der folgenden Zeilen - passend zu Deiner Bildschirmausrichtung - hinzufügen:



* `display_rotate=0` keine Rotation
* `display_rotate=1` 90° im Uhrzeigersinn rotieren
* `display_rotate=2` 180° rotieren
* `display_rotate=3` 90° gegen den Uhrzeigersinn rotieren



Speichere die Datei, und führe einen Neustart durch (`sudo reboot`)