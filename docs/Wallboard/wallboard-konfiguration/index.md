---
title: "Wallboard - Konfiguration"
slug: /wallboard-konfiguration
---

# Wallboard - Konfiguration

Um ein Wallboard betreiben zu können musst du zuerst das Rest-Api Plugin sowie das Wallboard Plugin aktivieren.



# Wallboardprofil

Jedes Wallboard benötigt als Grundlage ein sog. Wallboardprofil. Wallboardprofile werden in der ALARMiator Weboberfläche erstellt und konfiguriert. Du findest die Wallboard-Profile in der Weboberfläche im Bereich "Alarmierung" - "Wallboardprofile".


![](/img/image.png)


Das Menü bietet Dir zwei Untermenüpunkte, "Liste" und "neu anlegen". Unter "Liste" werden Dir alle vorhandenen Wallboardprofile in einer Liste angezeigt. Mit dem Menüpunkt "neu anlegen" kannst Du ein weiteres neues Wallboardprofil erstellen.



# Übersicht Wallboardprofile


![](/img/image-1-1024x296.png)



Folgende Spalten sind in de Liste der Wallboardprofile zu finden:




|  |  |  |
| --- | --- | --- |
| Spalte | Erklärung | Beispiele |
| Name | Der Name identifiziert das Wallboardprofil in allen Listen.  Der Name sollte so gewählt sein, dass er selbsterklärend eine Zuordnung des Profils abbildet. | - Fahrzeughalle - Umkleide Herren - Umkleide Damen - Infodisplay Hauseingang |
| Verbunden | In dieser Spalte wird Dir ein Icon angezeigt. Entweder ist das Icon grau oder grün. Wenn es grau ist, dann ist aktuell kein Wallboard mit dem Server verbunden, das dieses Wallboardprofil nutzt. Ist das Icon grün, so ist mindestens ein Wallboard mi dem Server verbunden, das dieses Wallboardprofil nutzt. Ist das Icon grün, dann wird Dir neben dem Icon auch die Anzahl der verbundenen Wallboards für dieses Wallboardprofil angezeigt. Wenn Du mit der Maus über ein grünes Icon fährst, werden Dir auch die IP-Adressen der aktuell verbundenen Wallboard-Abspielgeräte als Tooltip angezeigt. |  |
| Organisation | Hier siehst Du die Organisation, der das Wallboardprofil zugeordnet ist. Ein Wallboardprofil muss immer einer Organisation fest zugeordnet sein. Über die Organisation werden Alarmierungen gefiltert. So werden auf dem Wallboard nur Alarmierungen angezeigt, die der Organisation zugehörig sind. Der Abgleich findet über die in der Organisation (Stammdaten - Organisationen) hinterlegten Schleifen statt. | Feuerwehr Reichenschwand |
| Standort | Hier siehst Du den Standort, der dem Wallboardprofil zugeordnet ist. Ein Wallboardprofil muss immer einen Standort zugeordnet sein. Das Wallboard bezieht z.B. für die Darstellung von Wetterinformationen die Geoposition des Standortes, um für die dort hinterlegte Latitude / Longitude das passende Wetter des DWD zu laden. Ebenso wird die Adresse das Standortes für die Berechnung der Anfahrt im Rahmen einer Alarmierung genutzt. | Gerätehaus |
| Typ | Der Typ bestimmt, ob das Wallboardprofil für ein Wallboard, die ALARMiator Mobile App oder für beides genutzt werden soll. Für klassische Wallboards wähle hier immer Wallboard aus. | Wallboard |
| Standard | Ein Wallboardprofil wird bereits mit der Installation des ALARMiator Servers ausgeliefert. Hierbei handelt es sich um das sog.- Standard-Profil. Dieses Profil ist notwendig, um die ALARMiator Mobile App nutzen zu können. (Hierüber wird die Darstellung der Rückmeldungen in der ALARMiator Mobile App gesteuert). Ein Standard-Profil kann nicht gelöscht werden. Für alle Wallboardprofile, die Du zusätzlich erzeugst, wird hier immer "nein" angezeigt. | ja / nein |




## Mögliche Aktionen



### Neues Token



Wallboardprofile haben ein automatisch generiertes Token. Ein Token dient dabei der Authentifzierung eines Client gegen den ALARMiator Server. Das hat den Vorteil, dass an einem Wallboard-Abspielgerät keine Zugangsdaten eingegeben werden müssen und somit auch nicht lokal auf einem Client vorliegen (oder in Scripten gespeicher werden müssen). Mit dieser Schaltfläche kannst Du das Token eines Wallboardprofils neu generieren. Das macht z.B. Sinn, wenn ein Token bekannt geworden ist. Nachdem Du auf diese Schaltfläche geklickt hast, wird ein neues Token berechnet. Du musst dann auf allen Clients, die dieses Wallboardprofil nutzen das neue Token eintragen.



#### Aktivieren/Deaktivieren



Wallboardprofile können deaktiviert werden. Wird ein Wallboradprofil deaktiviert, kann es von Abspielgeräten nicht mehr genutzt werden. Über diese Schaltfläche kannst Du ein Wallboardprofil aktivieren / deaktivieren.



#### Ändern



Ein Klick auf diese Schaltfläche zeigt Dir das Formular an, mit dem Du ein Wallboardprofil verändern kannst.



#### Neustart



Ein Klick auf diese Schaltfläche sendet einen Befehl an alle mit diesem Wallboardprofil verbundenen Abspielgeräte, die das Wallboard dann sofort neu laden. Das bietet sich an, wenn Du größere Änderungen vorgenommen hast, oder Du aus anderen Gründen ein Wallboard aktualisieren musst. Es ist so auch kein direkter physikalischer Zugriff auf ein Abspielgerät nötig (z.B. wenn ein Wallboard an einem anderen Standort verbaut ist).



#### löschen



Mit dieser Schaltfläche löschst Du das komplette Wallboardprofil. Verbundene Abspielgeräte für dieses Wallboardprofil können dann keine Daten mehr abrufen und werden nicht mehr funktionieren.



#### Wallboard öffnen



Diese Schaltfläche ruf das Wallboard zu diesem Profil in einem neuen Tab in Deinem Browser auf.



## Eigenschaften eines Wallboardprofiles



Wallboardprofile beschreiben, wie sich Wallboards darstellen sollen. Folgend findest Du eine Beschreibung, wie Du ein Wallboardprofil konfiurieren kannst. Da die Inhalte bei "neu erstellen" und "bearbeiten" eines Wallboardprofiles die gleichen sind, beschreiben wir hier exemplarisch das ändern eines Wallboardprofiles.


![](/img/image-3.png)



Als erstes musst Du das Wallboardprofil einer **Organisation** zuordnen. In der Auswahlliste werden Dir alle vorhandenen Organisationen angeboten (Stammdaten - Organisationen). Die hier gewählte Organisation beschränkt anzuzeigende Alarmierungen. Nur Alarmierungen, deren Schleife in der hier gewählten Organisation aufgeführt sind, werden auf dem Wallboard überhaupt angezeigt. Wenn Dein Wallboard das Widget "Logo" verwendet, dann wird auf dem Wallboard automatisch das in der Organisation gespeicherte Logo/Wappen verwendet.



Nun wählst Du einen **Standort** aus. In dem Auswahlfeld stehen Dir alle für die Organisation vorhandenen Standorte zur Auswahl (Stammdaten - Standorte). Der hier gewählte Standort ist relevant für die Berechnung der Wetterdaten sowie der Route zur Anfahrt im Alarmfall. Stelle sicher, dass im Standort die Geoposition gesetzt ist.



Vergebe folgend einen **Namen für das Profil**. Der Name wird in Listen innerhalb der ALARMiator Weboberfläche genutzt um Profile unterschieden zu können.



Mit dem Feld **Status** steuerst Du, ob das Profil aktiv genutzt werden kann. So kannst Du z.B. neue Wallboardprofile konfigurieren, aber über den Status "inaktiv" noch nicht für die Nutzung freigeben.



Das Feld **API-Token** wird automatisch vom ALARMiator Server berechnet nach dem ersten Speichern. Dieses Token ist für den Zugriff eines Wallboard-Abspielgerätes notwendig. Mit der blauen Schaltfläche kannst du ein gespeichertes Wallboard direkt in einem neuen Tab öffnen. Die graue Schaltfläche kopiert das Token in die Zwischenablage.



Mit dem Feld **Typ** legst Du fest, wie das Wallboardprofil genutzt werden kann. Willst Du nur ein Wallboard konfigurieren, dann wähle hier "Wallboard" aus. Möchtest Du Vorgaben für die Anzeige von Rückmeldungen in der ALARMiator Mobile App festlegen, dann wähle hier "App" aus.



Im Feld **Anzeige Namen** legst Du fest, wie Namen von Einsatzkräften dargestellt werden sollen (Vorname, Nachname / Nachname Vorname / etc.)


![](/img/image-4.png)



Im Bereich **Qualifikation Anzeige** kannst du steuern, welche Qualifikationen am Wallboard für die Rückmeldungen gesondert ausgewiesen werden sollen. Es macht z.B. Sinn, Rückmeldungen gesondert für Atemschutzgeräteträger oder Maschinisten auszuweisen (Wie viele Atemschutzgeräteträger rücken an?) Setze hier die Checkbox bei den Qualifikationen, die Du auf dem Wallboard angezeigt bekommen möchtest. Qualifikationen müssen im Bereich der Stammdaten angelegt sein, damit Du sie hier auswählen kannst. Ebenfalls müssen die Qualifikationen den Mitgliedern (Stammdaten - Mitglieder - Qualifikationen) zugeordnet werden, damit das Wallboard sie verarbeiten kann.



Im nächsten Feld kannst Du für das Wallboardprofil ein **Hintergrundbild** hochladen. Das Hintergrundbild wird dann bei allen mit diesem Wallboardprofil verbundenen Abspielgeräten geladen und angezeigt.



Das Feld **Konfiguration Bereitschaftsmodus** enthält die Definition der Oberfläche des Wallboards im Bereitschaftsmodus (also wenn keine Alarmierung angezeigt wird).


Das Feld **Konfiguration Alarmmodus** enthält die Definition der Oberfläche des Wallboards im Alarmmodus.