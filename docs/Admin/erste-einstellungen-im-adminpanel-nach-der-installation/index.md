---
title: "Erste Einstellungen im Adminpanel nach der Installation"
slug: /erste-einstellungen-im-adminpanel-nach-der-installation
---

# Erste Einstellungen im Adminpanel nach der Installation

## Adminbenachrichtigungen verteilen



![](/img/image-1024x446.png)



Um Adminbenachrichtigungen an die Serveradmins zu schicken, muss dafür eine Rolle angelegt werden. Es empfiehlt sich die Rolle "Admin" zu nennen. Diese kann an Mitglieder vergeben werden.



Wie man eine Rolle oder ein Mitglied anlegt wird in dem entsprechenden Guide gezeigt.



## Grundeinstellungen



### Servername vergeben


![](/img/image-1.png)



Hier trägst du ein welchen Namen dein Server tragen soll. Dieser wird in Emails und den Mobile-Apps als Name benutzt.




### Serverdomain eintragen


![](/img/image-2.png)



Hier trägst du die Domain deines Servers ein, diese wird zum Beispiel beim Anmeldedaten versandt an deine Mitglieder geschickt und in den QR-Code eingetragen für die Anmeldung in der App.



Gib bitte nur den Domainnamen ohne http:// oder https:// davor ein.



### Automatische Updates via Github einrichten



Dieses Feature ist nicht funktionsfähig!




### Verschlüsselung der Weboberfläche festlegen


![](/img/image-4.png)



Hier legst du fest, ob die Weboberfläche über http, https oder über beides aufgerufen werden kann.



### Zeilentrenner der ILS-Mitteilungen angeben


![](/img/image-5.png)



Leitstellen verwenden in den Mitteilungstexten oft besondere Zeichen, anhand derer ein Zeilentrenner erkennbar sein soll. Im Bereich der ILS Nürnberg ist das z.B. das sog. Pipe-Symbol ("|"). Hier trägst du das Zeichen ein, das von Deiner Leitstelle in den Texten verwendet wird. ALARMiator wird dann dieses Zeichen mit einem Zeilenbruch ersetzen, und so die Mittelungstexte leserleicher darstellen.



### Alarmierungs-Limits einstellen


![](/img/image-17-1024x538.png)



"Maximales Alter Alarmierung" ist noch nicht funktionsfähig!



Es empfiehlt sich die Zeit bis zum Schließen auf zwischen 60-240 Minuten zu stellen. Nach dieser Zeit werden die Einsätze automatisch von den Endgeräten entfernt und die Wallboards gehen wieder in den Bereitschaftsmodus über.



Steht die Archivierung auf 0 so muss man Einsätze nachdem Sie geschloßen wurden manuell archvieren. Es empfiehlt sich hier eine größere Zeitspanne zu wählen, für die automatische Archivierung. Nach einer Archivierung kann ein Einsatz nicht mehr geöffnet werden, um einen Einsatz nachzubearbeiten, falls Infos nachgetragen werden sollen.



### Routenkey für das Wallboard angeben


![](/img/image-8.png)



Solltest du ein Wallboard mit Routenberechnungsanzeige zum Einsatzort wollen, dann kannst Du online auf der Website des Anbieters https://openrouteservice.org/ kostenfrei einen Zugang erstellen. Die kostenfreie Variante gestattet aktuell bis zu 2000 Routing-Anfragen pro 24h.



### Benachrichtigungszeiträume einstellen


![](/img/image-9-1024x470.png)



Hier kannst du einstellen wie viele Tage im Vorraus du über Wartungen und auslaufene G26.3 benachrichtigt werden möchtest.



Die Meldungen können per Email versandt, am Wallboard angezeigt und im zugehörigen Modul in der Übersicht angezeigt werden.



### Mitglieder-Avatargröße einstellen


![](/img/image-10-1024x431.png)



Ein Mitglied kann für seinen Account ein Profilbild hochladen. Hier kannst du einstellen wie groß das Bild maximal sein darf.



### Organisations-Avatargröße einstellen


![](/img/image-11-1024x422.png)



Hier kannst du die maximale Größe von Organisationswappen auf dem Server einstellen.



### Zeitraum für das Löschen der Logfiles einstellen


![](/img/image-12-1024x292.png)



Solltest du die Logs nach einem gewissen Zeitraum löschen wollen, kannst du hier die angeben wie viele Tage die Logfiles aufgehoben werden sollen. Ist die Option nicht gesetzt, werden die Logfiles nicht gelöscht.