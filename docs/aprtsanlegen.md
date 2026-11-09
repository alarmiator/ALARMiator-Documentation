---
title: "APRTs anlegen"
slug: /aprtsanlegen
---

# APRTs anlegen

Durch das Einpflegen der ARPTs können diese als alarmierbare Einsatzmittel in den Alarmierungsprofilen und auf dem Wallboard genutzt werden.

## Gerät anlegen

Navigiere zu **Inventar → Geräte** und klicke auf **+ Neu**.

Fülle hier nun die folgenden Felder aus:

* Organisation auswählen
* Bezeichnung vergeben (z.B. Max Mustermann APRT)
* Inventargruppe auswählen (diese kann z.B. "APRT Digitalfunkmelder" heißen - **Wichtig:** Die Gruppe sollte schon existieren, falls nicht frag bei deinem Administrator nach)
* Status auf **Einsatzbereit** schalten
* im Schritt **Lager & Beschaffung** optional Beschaffungsdatum angeben

![Gerät anlegen](/img/ui/inventar/geraet-anlegen.png)

Wechsle nun in den Schritt **Alarmierung**.

* Den Schalter **Alarmierbares Einsatzmittel** **NICHT** aktivieren
* Den Bezeichner freilassen
* ISSI angeben (im Normalfall 7-Stellen)
* Endgeräte-Typ: **APRT (Digitalfunkmelder)** auswählen

![Alarmierung des Geräts](/img/ui/inventar/geraet-alarmierung.png)

Klicke jetzt auf **Speichern**, um das Gerät hinzuzufügen.

## Inventargruppe anlegen - nur Admins

Falls bis jetzt noch keine Inventargruppe für die ARPTs angelegt wurde, sollte dies jetzt nachgeholt werden. Dafür **Inventar → Inventargruppen** wählen und **+ Neu** klicken.

Hier nun einen beliebigen **Namen**, die **Organisation** und im zweiten Schritt die **verantwortliche Rolle** auswählen und die Option **Enthält alarmierbare Einsatzmittel** aktivieren. Wird der Schalter nicht aktiviert, werden die Geräte der Gruppe nicht als Digitalfunkmelder angeboten.

![Inventargruppe anlegen](/img/ui/inventar/inventargruppe-anlegen.png)
