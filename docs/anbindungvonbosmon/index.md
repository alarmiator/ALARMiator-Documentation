---
title: "Anbindung von BosMon"
slug: /anbindungvonbosmon
---

# Anbindung von BosMon

Vielen Dank an [Josh](https://community.alarmiator.de/u/josh/summary) aus der ALARMiator Community für die hervorragende Zusammenstellung dieses Guides.



Bitte beachte, dass zur Nutzung dieser Funktion eine vollwertige, kostenpflichtige Bosmon-Version notwendig ist, da nur dort die Ereignisfunktion „Programm ausführen“ genutzt werden kann.



Zusätzlich müssen in den Konfigurationen der Bosmon-Instanz die Alarmierungs-Daten so bearbeitet werden, dass diese die Meldungen korrekt nach den Adressen sowie Stichwörtern aufschlüsselt so wie hier:


![](/img/image-1.png)



Eine genaue Erklärung dieser Einstellungen ist innerhalb der Dokumentation von Bosmon ersichtlich: https://www.bosmon.de/doc/bosmon/1.5/cfg/adresse.html



Um die spezifischen Variablen der Meldung nun zum ALARMiator-Server zu übertragen, nutzen wir eine sogenannte Batchdatei. Diese wird einfach mittels eines Texteditors deiner Wahl erstellt und anschließend mit der Endung „.bat“ gespeichert.


![](/img/image-2-1024x97.png)



Der Inhalt dieser Textdatei enthält dabei folgenden Code:



```bash
@echo off
curl -G "https://{{example.com}}/api/operations/sendAlarm" --data-urlencode
"token={{deintoken}}" --data-urlencode "subject=%~1" --data-urlencode "ils=Leitstelle"
--data-urlencode "location=%~3" --data-urlencode "street=%~2" --data-urlencode
"lat=%~4" --data-urlencode "lon=%~5" --data-urlencode "zveis=%~6"
```



Hier wird https benutzt und mit /api/ wird implizit die Nutzung unseres Standardsetups mit Reverse Proxy vorrausgesetzt. Solltest du diesen nicht benutzen musst du selber deinen Api Port entsprechend deiner Konfiguration ansprechen. Wir empfehlen wie immer deutlich die Nutzung von HTTPS!



Die in \{\{ \}\} geschriebene Inputs sind dabei für deinen Server entsprechend abzuändern.
Die IP enthält die übliche Server-Adresse und das Token muss vorab im ALARMiator Adminmenü unter „API-Token“ angelegt werden.


![](/img/image-3-1024x340.png)



Die jeweiligen Variablen werden dabei durch Platzhalter mit der Nummerierung z.B. „%~1“ übergeben. Dies kann je nach Konfiguration der Einstellungen jedoch beliebig abgeändert werden. Die genaue Aufschlüsselung dieser Platzhalter wird dabei in Bosmon direkt erledigt, was  
im folgenden noch erläutert wird. Zusätzlich können ebenso weitere Variablen in der Batchdatei übergeben werden, welche hier aufgelistet sind:



https://community.alarmiator.de/t/neu-alarmierung-ueber-rest-api/102/11



Bei einem Eingang einer entsprechend neuen Meldung muss dazu in Bosmon unter den Ereignissen ein neues Event angelegt werden, welches den Übergabeprozess startet. Dazu werden zunächst die jeweiligen Filter gesetzt sowie als Aktion ein Programm ausgeführt.


![](/img/image-5-1024x724.png)



Das Programm zum Ausführen muss dabei auf den Pfad der Batchdatei deuten. Im Beispiel oben lautet der Pfad:



```
"C:\Users\XXX\Desktop\Systemstart\BosMon\Send_to_ALARMiator.bat"
```



Mit diesem Ereignis wird die Batchdatei aufgerufen. Nun müssen jedoch noch die ausgewerteten Variablendaten übergeben werden. Dies wird dabei ebenfalls im Pfad der Ereignisdatei hinterlegt. Im Beispiel wird an den o.g. Pfad somit die folgende Zusatzinfo mit einer Leerstelle getrennt eingetragen:



```
"C:\Users\XXX\Desktop\Systemstart\BosMon\Send_to_ALARMiator.bat"
"%stichwort.kurz%",
"%koordinaten.strasse% %koordinaten.hausnummer%",
"%koordinaten.stadt%",
"%koordinaten.latitude%",
"%koordinaten.longitude%",
"%telegramm.adresse%“
```



Je nachdem, an welcher Stelle die Variable hier angeordnet ist, wird sie auch in der Batchdatei bei der Übertragung eingepflegt. Das Stichwort kurz wird an der 1. Stelle unter dem „Subject“ übertragen, die „location=%~3“ steht oben an der dritten Stelle der Variablen, welche immer mit einem Komma getrennt werden müssen. Die Strasse und die Hausnummer werden direkt in einer Variable übergeben, um mehrere Platzhalter zu ermöglichen.



Die in der „%telegramm.adresse%“ hinterlegte Schleifennummer muss zusätzlich im ALARMiator-Server als Schleife hinterlegt sein ([Schleifen anlegen Doku](schleifenanlegen)) sowie ein Alarmierungsprofil dafür erstellt werden ([Doku Alarmierungsprofil](alarmierungsprofileanlegen)), welche die jeweilige Gruppe per ALARMiator alarmiert. Die zu übermittelnden Daten an die Einsatzkräfte auf Schleifenebene kann natürlich im ALARMiator in der Alarmdatenmatrix eingestellt werden ([Doku Alarmdatenmatrix](alarmdatenmatrixeinstellen)), um die Menge an eingehenden Einsatzinfos und die Menge an übermittelten Einsatzinfos an Einsatzkräfte einzustellen.



Um die Karten- sowie Navigationsfunktion nutzen zu können ist es wichtig, dass in Bosmon direkt die Adresserkennung aktiviert ist und ordnungsgemäß funktioniert. Dabei werden die ausgewerteten Adressdaten als Koordinaten übergeben (im oberen Beispiel latitude sowie longitude), welche im ALARMiator-Server dann weiter verarbeitet werden.



Insgesamt können bis zu neun Variablen von Bosmon an den ALARMiator-Server übergeben werden. Eine genaue Liste aller möglichen Variablen in Bosmon ist hier ersichtlich:



https://www.bosmon.de/doc/bosmon/1.5/howto/variablen.html



Ob die Übertragung problemlos funktioniert, kann mittels einer Testalarmierung über das Zusatzprogramm „BosmonDial“ geprüft werden. Dort einfach einen bekannten Meldungstext und die zu testende Schleife manuell eintragen und testweise alarmieren lassen.
