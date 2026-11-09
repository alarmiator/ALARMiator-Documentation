---
title: "Erste Einstellungen im Adminpanel nach der Installation"
slug: /erste-einstellungen-im-adminpanel-nach-der-installation
---

# Erste Einstellungen im Adminpanel nach der Installation

## Adminbenachrichtigungen verteilen

Um Adminbenachrichtigungen an die Serveradmins zu schicken, muss dafür eine Rolle angelegt werden. Es empfiehlt sich die Rolle "Admin" zu nennen. Diese kann an Mitglieder vergeben werden.

Wie man eine Rolle oder ein Mitglied anlegt wird in dem entsprechenden Guide gezeigt.

Wähle die Rolle anschließend unter **Admin → Einstellungen** als **Empfänger-Gruppe für Admin-Benachrichtigungen** aus und klicke auf **Speichern**. Die Mitglieder dieser Rolle erhalten wichtige Meldungen des Servers (z.B. nicht erreichbare Schnittstellen) als Push-Nachricht in der Mobile App.

![Admin → Einstellungen](/img/ui/admin/einstellungen.png)

## Grundeinstellungen

Die Grundeinstellungen findest du unter **Admin → Server-Konfiguration**. Nach Änderungen klickst du unten auf **Speichern**.

### Servername vergeben

![Servername](/img/ui/admin/server-allgemein.png)

Hier trägst du ein welchen Namen dein Server tragen soll. Dieser wird in E-Mails und den Mobile-Apps als Name benutzt.

### Serverdomain eintragen

![Serverdomain](/img/ui/admin/server-wan.png)

Hier trägst du die Domain deines Servers ein, diese wird zum Beispiel beim Anmeldedaten versandt an deine Mitglieder geschickt und in den QR-Code eingetragen für die Anmeldung in der App.

Gib bitte nur den Domainnamen ohne http:// oder https:// davor ein.

### Automatische Updates via Github einrichten

Dieses Feature ist nicht funktionsfähig!

### Zeilentrenner der ILS-Mitteilungen angeben

![ILS-Einstellungen](/img/ui/admin/server-ils.png)

Leitstellen verwenden in den Mitteilungstexten oft besondere Zeichen, anhand derer ein Zeilentrenner erkennbar sein soll. Im Bereich der ILS Nürnberg ist das z.B. das sog. Pipe-Symbol ("|"). Hier trägst du das Zeichen ein, das von deiner Leitstelle in den Texten verwendet wird. ALARMiator wird dann dieses Zeichen mit einem Zeilenbruch ersetzen, und so die Mitteilungstexte leserlicher darstellen.

### Alarmierungs-Limits einstellen

![Alarmierungs-Limits](/img/ui/admin/server-limits.png)

"Maximales Alter Alarmierung" ist noch nicht funktionsfähig!

Es empfiehlt sich die Zeit bis zum Schließen auf zwischen 60-240 Minuten zu stellen. Nach dieser Zeit werden die Einsätze automatisch von den Endgeräten entfernt und die Wallboards gehen wieder in den Bereitschaftsmodus über.

Steht die Archivierung auf 0 so muss man Einsätze nachdem sie geschlossen wurden manuell archivieren. Es empfiehlt sich hier eine größere Zeitspanne zu wählen, für die automatische Archivierung. Nach einer Archivierung kann ein Einsatz nicht mehr geöffnet werden, um einen Einsatz nachzubearbeiten, falls Infos nachgetragen werden sollen.

### Routenkey für das Wallboard angeben

Solltest du ein Wallboard mit Routenberechnungsanzeige zum Einsatzort wollen, dann kannst du online auf der Website des Anbieters https://openrouteservice.org/ kostenfrei einen Zugang erstellen und den **API Key für Routenberechnung** eintragen. Die kostenfreie Variante gestattet aktuell bis zu 2000 Routing-Anfragen pro 24h.

### Benachrichtigungszeiträume einstellen

![Benachrichtigungs-Einstellungen](/img/ui/admin/server-benachrichtigung.png)

Hier kannst du einstellen wie viele Tage im Voraus du über Wartungen und auslaufende G26.3 benachrichtigt werden möchtest.

Die Meldungen können per E-Mail versandt, am Wallboard angezeigt und im zugehörigen Modul in der Übersicht angezeigt werden.

### Avatargrößen einstellen

Unter **Mitglieder-Avatar-Einstellungen** stellst du ein, wie groß das Profilbild eines Mitglieds maximal sein darf, unter **Organisations-Avatar-Einstellungen** die maximale Größe von Organisationswappen. Größere Bilder werden automatisch verkleinert.

### Zeitraum für das Löschen der Logfiles einstellen

Solltest du die Logs nach einem gewissen Zeitraum löschen wollen, kannst du unter **Logfiles-Einstellungen** angeben wie viele Tage die Logfiles aufgehoben werden sollen. Ist die Option nicht gesetzt, werden die Logfiles nicht gelöscht.
