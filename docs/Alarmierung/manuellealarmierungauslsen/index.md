---
title: "Manuelle Alarmierung auslösen"
slug: /manuellealarmierungauslsen
---

# Manuelle Alarmierung auslösen

ALARMiator bietet ab der Version 1.3.0 die Möglichkeit, Alarmierungen auszulösen ohne eine externe Alarmierung durch eine Leitstelle. So eine manuelle Alarmierung macht z.B. in folgenden Szenarien Sinn:



* Keine Leitstellenabindung (z.B. Nutzung in einer Werksfeuerwehr mit Auslösung über Werkschutz)
* Leitstellenanbindung ist gestört (z.B. Überlastung einer ILS in Unwetter-Szenarien)
* usw.



Zum auslösen einer manuellen Alarmierung navigiere innerhalb des Web-Frontends zu **Einsätze**  **Neuer Einsatz**



Nun erscheint ein Formular, das Dir eine schnelle und unkomplizierte Alarmauslösung gestattet.


![](/img/image-1024x844.png)



## aktive Alarmauslösung



ganz oben findest Du eine Schaltfläche mit mit einem roten Megafon-Icon. Diese Schaltfläche bestimmt, ob Du einen "stillen" Einsatz erstellen möchtest (AUS), oder einen aktiven Alarm mit Alarmierung der definierten Einsatzkräfte (AN). Einen "stillen" Einsatz erstellst Du z.B. zu Zwecken der Nachdokumentation. Du kannst alle relevanten Informationen zu einem Einsatz erfassen und diesen speichern, es wird allerdings keine aktive Alarmierung Deiner Kräfte ausgeführt.


![](/img/image-2.png)



Klickst du die Schaltfläche an, so wird sie rot eingefärbt. Jetzt würde die Alarmierung nachdem Du sie auslöst auch an Deine Einsatzkräfte übermittelt.


![](/img/image-1.png)



## Von Vorlage laden



Du kannst nun entweder alle Felder ausfüllen die für Dich relevant sind, oder auf eine Vorlage zurückgreifen. Vorlagen kannst Du selber erstellen, in dem Du die Felder vorbefüllst, die Du zukünftig durch eine Vorlage nutzen möchtest und dann am Ende des Formulares die Schaltfläche "als Vorlage speichern" nutzt. Du kannst diese einmal gespeicherten Vorlagen dann durch Auswahl in der Auswahlliste nutzen.


![](/img/image-3.png)



## Einsatzinformationen



Der Bereich Einsatzinformationen fasst die grundlegenden Informationen zu Deinem Einsatz zusammen. Das Feld Schlagwort ist das einzige Pflichtfeld, alle weiteren Felder sind optional.



## Einsatzort



Die Angabe eines Einsatzortes ist optional, aber für Deine Einsatzkräfte evtl. wichtig. Der Einsatzort kann über verschiedene Wege angegeben werden



### Direkteingabe



Fülle die Felder Straße und Postleizahl & Ort aus und klicke dann auf die Schaltfläche Koordinaten ermitteln. Nun werden im Hintergrund die Koordinaten der angegeben Adresse ermittelt und die Karte zeigt die Einsatzstelle an.



### Über die Karte



Du kannst in der Karte auf der rechten Seite mit der Maus die Einsatzstelle suchen und mit einem Klick die Nadel an die entsprechende Stelle positionieren. Dabei werden die Koordinaten ermittelt. Du kannst mit der blau hinterlegten Schaltfläche "+" die Karte hierzu auch vergrößern um eine bessere Übersicht zu erhalten.



### Freie Suche



Unterhalb der Karte findest Du das Suchfeld "Freie Suche". Hier kannst Du wie in Suchmaschinen eine Adresse, besondere Örtlichkeiten oder Namen eingeben. Unterhalb des Suchfeldes wird Dir eine Ergebnisliste dargestellt, aus der Du dann den richtigen Eintrag anklicken und damit übernehmen kannst. Sobald Du einen Eintrag ausgewählt hast, zoomt die Karte auf die entsprechende Position und die Adressfelder werden automatisch ausgefüllt. Diese Suche sind z.B. hilfreich, wenn Du nach Sonderobjekten suchen möchtest (Beispiel: "DORMERO Schlosshotel").



### aus Vorlage



Wenn Du eine Vorlage nutzt, dann werden aus der Vorlage die dort ggf. hinterlegten Adressdaten direkt übernommen und die Karte zoomt auf die entsprechende Position.



## Einsatzmittel



Im Bereich Einsatzmittel kannst Du nun Fahrzeuge, andere Einsatzmittel, Gruppen sowie einzelne Mitglieder beliebig kombinieren. Hier definierst Du, wer alles für diesen Einsatz alarmiert wird. Die hier gewählten Einsatzmittel werden in die ALARMiator App sowie die Wallboards übermittelt und dargestellt. Der Übersichtlichkeit halber sind die Einsatzmittel in auf-/zuklappbare Sektionen unterteilt. Ein klick auf die Sektions-Köpfe öffnet oder schließt eine Sektion. Lädst Du eine Vorlage, so werden alle Sektionen aufgeklappt, damit Du auf einen Blick erkennen kannst, welche Vorgaben aus der Vorlage geladen worden sind.



### Einsatzmittel



In diesem Block werden Dir die in Deiner ALARMiator-Installation gepflegten Einsatzmittel zur Auswahl angeboten. Die Ziffer oberhalb des Namens der Einsatzmittel zeigt Dir den aktuellen FME-Status des jeweiligen Einsatzmittels an. Mit einem Klick auf ein Einsatzmittel wählst Du es für diese Alarmierung aus. Ausgewählte Einsatzmittel sind rot hinterlegt. Im Sektions-Kopf der Einsatzmittel wird die die Anzahl der gewählten Einsatzmittel in grüner Schrift angezeigt. So ist auch zu erkennen, wie viele Einsatzmittel Du für diese Alarmierung ausgewählt hast, wenn die Sektion zugeklappt ist.


![](/img/image-4.png)



### Einsatzkräfte (Gruppen)



In dieser Sektion legst Du fest, welche Gruppen für diesen Einsatz alarmiert werden sollen. Hier werden Dir alle in Deiner ALARMiator-Instanz konfigurierten alarmierbaren Gruppen angeboten, für die Du eine Berechtigung besitzt. Auch hier gilt das gleiche Schema: ausgewählte Gruppen werden rot markiert angezeigt und die Anzahl der gewählten Gruppen wird im Sektions-Kopf grün dargestellt.


![](/img/image-5.png)



### Einsatzkräfte Mitglieder



Du kannst für eine Alarmierung auch gezielt einzelne Mitglieder anwählen. Dies kann zusätzlich zu Gruppen erfolgen oder auch ohne alarmierte Gruppen. Dies ist z.B. sinnvoll, wenn Du für eine spezielle Aufgabe genau weißt, wen Du benötigst. Dir werden hier alle Mitglieder angezeigt, für deren Anzeige Du die nötigen Berechtigungen besitzt. Auch hier gilt das gleiche Schema: ausgewählte Mitglieder werden rot markiert angezeigt und die Anzahl der gewählten Mitglieder wird im Sektions-Kopf grün dargestellt.


![](/img/image-6.png)



## Alarmierung auslösen



Wenn Du ganz oben im Formular die aktive Alarmauslösung aktiviert hast, dann steht Dir am Ende des Formulars die Schaltfläche "Alarmierung auslösen" zur Verfügung. Da eine ausgehende aktive Alarmierung doch gewisse Konsequenzen hat, fragt Dich ALARMiator nach einem Klick auf diese Schaltfläche nun noch einmal ob Du Dir sicher bist.


![](/img/image-7.png)



Mit dem Auslösen der Alarmierung wird der Einsatz auch gespeichert und fortan wie jede andere Alarmierung behandelt. Als auslösende Stelle wird in der ALARMiator App Dein Name angezeigt.




## Einsatz speichern



Wenn Du ganz oben im Formular die aktive Alarmauslösung nicht aktiviert hast, dann steht Dir nun am Ende des Formulars die grüne Schaltfläche "speichern" zur Verfügung. Klickst Du auf diese Schaltfläche, erfolgt keine Alarmauslösung, der Einsatz wird aber nun abgespeichert und steht wie alle anderen Einsätze in ALARMiator zu Dokumentationszwecken zur Verfügung. Der Einsatz wird als "aktiver Einsatz" geführt.