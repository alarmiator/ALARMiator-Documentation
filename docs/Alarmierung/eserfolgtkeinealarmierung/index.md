---
title: "Es erfolgt keine Alarmierung"
slug: /eserfolgtkeinealarmierung
---

# Es erfolgt keine Alarmierung

## Frage


 Wir sind alarmiert worden, es wurde aber keine Alarmierung auf den Smartphones ausgelöst. Woran kann das liegen?



## Antwort



Das kann mehrere Ursachen haben, einige davon zählen wir wie folgt auf mit jeweils kurzem Hinweis zur Analyse:



### Die Internetverbindung war kurzzeitig unterbrochen



ALARMiator versendet die ausgehenden Alarmierungen an die mobilen Apps über das Internet. Hierzu baut der Server eine verschlüsselte Verbindung zu Servern von Google Firebase auf. Wenn Deine Internetverbindung unterbrochen oder gestört ist, kann diese Verbindung nicht aufgebaut werden und der Versand von Alarmierungen schlägt fehl. Beachte, dass auf der Strecke vom ALARMiator Server bis zu den Google Firebase-Servern im Internet auch Dein eigenes Netzwerk genutzt wird. Hast Du den ALARMiator Server also über WLAN in Dein Netzwerk eingebunden und das WLAN-Signal ist nicht stabil, kann es auch zu solchen Effekten kommen. Wir empfehlen daher immer, den ALARMiator Server möglichst mit einem Netzwerkkabel direkt an den Router anzuschließen, der die Internetverbindung bereit stellt. So schließt Du von vorne herein einige Fehlerquellen aus.



### Dein Internetprovider hatte ein technisches Problem



Auch die Anbieter von Internetanschlüssen haben regelmässig mit technischen Störungen zu kämpfen. So kommt es häufig vor, dass die sogenannte Namensauflösung (DNS-Auflösung) gestört ist. Damit Dein Computer (und so auch der ALARMiator Server) hinter einem Domainnamen die richtige Adresse im Internet findet, muss er zunächst bei einem öffentlichen DNS-Server nachfragen. Ist diese DNS-Abfrage kurzzeitig gestört, dann kann der ALARMiator Server ebenfalls keine Alarmierungen an die Apps versenden.



### Ein Fehler bei der Verarbeitung der Alarmierung im Server



Auch wenn dieser Fall sehr selten ist, kann es zu einem Fehler in der Verarbeitung von eingehenden Alarmierungen kommen. Um dies zu prüfen kannst Du Dir in der Weboberfläche das Logfile des Tages an dem eine Alarmierung nicht zugestellt worden ist ansehen. Wenn hier Fehlermeldungen auftauchen, dann kannst Du Dich gerne jederzeit in der ALARMiator Community melden. Bitte prüfe vorher Logfile-Auszüge auf sensible Daten bevor Du sie im Forum postest. Ggf kannst Du diese sensiblen Inhalte vorher löschen.



### Alarmierungsregeln falsch konfiguriert



Mit Alarmierungsregeln legst Du fest, welche Einsatzkraft bei welcher Alarmierunge eine Alarmierung auf das Smartphone bekommen soll. Wenn Die eingehende Alarmierung korrekt in der Weboberfläche im Bereich "Einsätze" zu sehen ist, aber keine Alarmierung auf die Smartphones erfolgte, dann prüfe die Alarmierungsregeln.



### Änderung an den eingehenden Daten



Von Zeit zu Zeit ändern manche Leitstellenbereiche die Datenstruktur der gelieferten Alarmierungsdaten. Bei KatSys kann so z.B. ein Feld umbenannt worden sein, Informationen in einem anderen Feld oder anders strukturiert geliefert werden. Bei ILS Fax kommt es immer wieder vor, dass Bezeichner im Fax geändert werden oder durch den Einsatz einer neues Faxsoftware das gesamte Dokument anders aussieht. Diese Änderungen können dazu führen, dass die eingehden Alarmierungen nicht mehr korrekt / vollständig übernommen werden können. Prüfe die Alarmierung in der Weboberfläche in Hinsicht auf Vollständigkeit. Findest Du hier Auffälligkeiten, dann kannst Du Dich in der ALARMiator Community melden und erhältst Hilfe.



### Dein Mitglied hat die Alarmierung für eine Gruppe ausgeschalten



Jedes Mitglied hat die Möglichkeit über sein Dashboard eine Alarmierungsgruppe zu deaktivieren. Das Dashboard ist die erste Seite nach dem Login am Web-UI und kann auch am Handy unter Profile (3 Personen oben rechts)  Dashboard gefunden werden.