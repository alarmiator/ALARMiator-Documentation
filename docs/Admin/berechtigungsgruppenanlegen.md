---
title: "Berechtigungsgruppen anlegen"
slug: /berechtigungsgruppen-anlegen
---

# Berechtigungsgruppen anlegen

Berechtigungsgruppen heißen in der Oberfläche **Rechte-Vorlagen**. Du findest sie unter **Admin → Rechte-Vorlagen**. Dort siehst du eine Übersicht deiner angelegten Vorlagen und welche Bereiche sie freigeben.

![Rechte-Vorlagen](/img/ui/admin/rechte-vorlagen-liste.png)

Eine Vorlage fasst Berechtigungen zusammen und kann bei einem Benutzer unter **Stammdaten → Benutzer → Berechtigungen** mit **Vorlage anwenden** je Organisation übernommen werden.

## Eigene Vorlagen erstellen

Klicke oben rechts auf **+ Neu**. Gib im ersten Schritt einen Namen an und lege im Schritt **Berechtigungen** für jeden Bereich fest, was die Vorlage erlaubt. Es gibt folgende Optionen:

* Kein Zugriff
* Lesen
* Lesen & Schreiben
* Lesen, Schreiben & Löschen

![Neue Rechte-Vorlage](/img/ui/admin/rechte-vorlage-anlegen.png)

Es empfiehlt sich statt mehrere "große" Vorlagen kleine Vorlagen anzulegen, da einem Benutzer mehrere Vorlagen zugeteilt werden können. So hat man am Ende eine bessere Übersicht über die Berechtigungen einer einzelnen Person und weniger administrativen Aufwand.

Eine beispielhafte Vorlage für die Mitgliederverwaltung hat also nur bei **Stammdaten** die Stufe **Lesen, Schreiben & Löschen**, alle anderen Bereiche stehen auf **Kein Zugriff**.
