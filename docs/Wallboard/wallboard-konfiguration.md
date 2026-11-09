---
title: "Wallboard - Konfiguration"
slug: /wallboard-konfiguration
---

# Wallboard - Konfiguration

Um ein Wallboard betreiben zu können musst du zuerst das Rest-Api Plugin sowie das Wallboard Plugin aktivieren.

# Wallboardprofil

Jedes Wallboard benötigt als Grundlage ein sog. Wallboardprofil. Wallboardprofile werden in der ALARMiator Weboberfläche erstellt und konfiguriert. Du findest sie unter **Wallboards → Wallboardprofile**.

![Wallboardprofile](/img/ui/wallboards/profile-liste.png)

Folgende Spalten sind in der Liste der Wallboardprofile zu finden:

| Spalte | Erklärung |
| --- | --- |
| Name | Der Name identifiziert das Wallboardprofil in allen Listen. Er sollte selbsterklärend eine Zuordnung des Profils abbilden, z.B. "Fahrzeughalle", "Umkleide Herren" oder "Infodisplay Hauseingang". |
| Verbunden | Anzahl der Wallboards, die aktuell mit dem Server verbunden sind und dieses Profil nutzen. Bei 0 ist kein Wallboard verbunden. |
| Organisation | Die Organisation, der das Wallboardprofil zugeordnet ist. Über die Organisation werden Alarmierungen gefiltert: Das Wallboard zeigt nur Alarmierungen dieser Organisation. |
| Alarmierungen | Ob das Wallboard Alarmierungen anzeigt. |
| Typ | Ob das Profil für ein Wallboard, die ALARMiator Mobile App oder beides genutzt wird. Für klassische Wallboards wähle **Wallboard**. |

Das Profil **Standard** wird bereits mit der Installation ausgeliefert. Es ist notwendig, um die ALARMiator Mobile App nutzen zu können (hierüber wird die Darstellung der Rückmeldungen in der App gesteuert).

## Mögliche Aktionen

* **Bearbeiten** – öffnet das Formular, mit dem du ein Wallboardprofil verändern kannst.
* **Aktivieren/Deaktivieren** – ein deaktiviertes Profil kann von Abspielgeräten nicht mehr genutzt werden.
* **Designer öffnen** – öffnet den [Wallboard-Builder](/docs/wallboard-builder) für das Profil in einem neuen Tab.
* **Löschen** – löscht das komplette Wallboardprofil. Verbundene Abspielgeräte können dann keine Daten mehr abrufen.

Wallboardprofile haben außerdem ein automatisch generiertes Token. Es authentifiziert ein Abspielgerät gegen den Server, sodass dort keine Zugangsdaten eingegeben werden müssen. Du kannst es in den Details des Profils neu generieren, öffnest die **Monitor-Ansicht** in einem neuen Tab oder lädst mit **Wallboard neu starten** alle verbundenen Abspielgeräte sofort neu. Das bietet sich an, wenn du größere Änderungen vorgenommen hast.

## Eigenschaften eines Wallboardprofiles

Klicke auf **+ Neu**, um ein Wallboardprofil anzulegen. Das Formular für Anlegen und Bearbeiten ist gleich aufgebaut.

![Wallboardprofil anlegen](/img/ui/wallboards/profil-anlegen.png)

Vergib im Schritt **Profil** einen **Namen** und ordne das Profil einer **Organisation** zu. Die Organisation beschränkt die anzuzeigenden Alarmierungen. Wähle optional den **Standort des Wallboards**: Er ist relevant für die Berechnung der Wetterdaten sowie der Route zur Anfahrt. Mit **Typ** legst du fest, wie das Profil genutzt wird, und mit **Status** ob es aktiv genutzt werden kann. So kannst du neue Wallboardprofile konfigurieren, aber noch nicht für die Nutzung freigeben.

![Anzeige](/img/ui/wallboards/profil-anzeige.png)

Unter **Anzeige der Namen** legst du fest, wie Namen von Einsatzkräften dargestellt werden (Vorname Nachname, Nachname Vorname usw.). **Alarmierungen anzeigen** schaltet die Alarmierungsanzeige ein, **Maximale Verbindungen** begrenzt, wie viele Wallboards sich gleichzeitig verbinden dürfen.

![Zuordnungen](/img/ui/wallboards/profil-zuordnungen.png)

Im Schritt **Zuordnungen** wählst du die **Alarmgruppen**, deren Rückmeldungen am Wallboard angezeigt werden, und unter **Qualifizierungen**, welche Qualifikationen am Wallboard für die Rückmeldungen gesondert ausgewiesen werden. Es macht z.B. Sinn, Rückmeldungen gesondert für Atemschutzgeräteträger oder Maschinisten auszuweisen.

Den Aufbau des Wallboards im Bereitschafts- und im Alarmmodus legst du im [Wallboard-Builder](/docs/wallboard-builder) fest.
