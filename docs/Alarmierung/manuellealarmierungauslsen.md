---
title: "Manuelle Alarmierung auslösen"
slug: /manuellealarmierungauslsen
---

# Manuelle Alarmierung auslösen

ALARMiator bietet ab der Version 1.3.0 die Möglichkeit, Alarmierungen auszulösen ohne eine externe Alarmierung durch eine Leitstelle. So eine manuelle Alarmierung macht z.B. in folgenden Szenarien Sinn:



* Keine Leitstellenabindung (z.B. Nutzung in einer Werksfeuerwehr mit Auslösung über Werkschutz)
* Leitstellenanbindung ist gestört (z.B. Überlastung einer ILS in Unwetter-Szenarien)
* usw.



Zum Auslösen einer manuellen Alarmierung navigiere innerhalb des Web-Frontends zu **Einsatz → Einsätze** und klicke auf **+ Neu**.

Nun erscheint ein Formular mit drei Schritten, das Dir eine schnelle und unkomplizierte Alarmauslösung gestattet. Wichtig: Beim Abschluss werden die ausgewählten Gruppen sofort alarmiert. Einen Einsatz, der bereits vorbei ist, erfasst Du ohne Alarmierung über die **Einsatznacherfassung**.

## Einsatz

Das Feld **Stichwort** ist das einzige Pflichtfeld, alle weiteren Felder sind optional. Du kannst alle relevanten Felder ausfüllen, oder unter **Vorlage laden** auf eine Vorlage zurückgreifen. Vorlagen kannst Du selber unter **Einsatz → Vorlagen** erstellen. Die Angaben der Vorlage ersetzen die bisherigen Eingaben.

![Neue Alarmierung - Einsatz](/img/ui/alarmierung/einsatz-neu.png)

## Einsatzort

Die Angabe eines Einsatzortes ist optional, aber für Deine Einsatzkräfte evtl. wichtig. Fülle die Felder **Straße** und **Postleitzahl & Ort** aus und klicke dann auf **Koordinaten aktualisieren**. Nun werden im Hintergrund die Koordinaten der angegebenen Adresse ermittelt und die Karte zeigt die Einsatzstelle an. Alternativ klickst Du die Einsatzstelle in der Karte an. Wenn Du eine Vorlage nutzt, werden die dort hinterlegten Adressdaten direkt übernommen.

![Neue Alarmierung - Einsatzort](/img/ui/alarmierung/einsatz-neu-ort.png)

## Alarmierung

Im letzten Schritt definierst Du, wer für diesen Einsatz alarmiert wird. Unter **Alarmierte Gruppen** wählst Du alle alarmierbaren Gruppen, für die Du eine Berechtigung besitzt. Unter **Einsatzmittel** kannst Du zusätzlich die in Deiner ALARMiator-Installation gepflegten Einsatzmittel auswählen. Mit **Alle** und **Keine** setzt Du alle Haken auf einmal.

![Neue Alarmierung - Alarmierung](/img/ui/alarmierung/einsatz-neu-alarmierung.png)

Klicke zum Schluss auf **Alarmieren**. Da eine ausgehende aktive Alarmierung doch gewisse Konsequenzen hat, wirst Du vorher noch einmal um Bestätigung gebeten. Mit dem Auslösen wird der Einsatz gespeichert und fortan wie jede andere Alarmierung behandelt. Als auslösende Stelle wird in der ALARMiator App Dein Name angezeigt.
