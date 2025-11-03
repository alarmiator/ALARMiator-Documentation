---
title: "Kalender-Liste"
slug: /kalender-liste
---

# Kalender-Liste

Dieses Widget zeigt die kommenden Termine in einer Listenform an. Es werden aktuell nur Termine angezeigt, bei denen die Checkbox "sichtbar für Jeden" gesetzt ist. Termine werden mit ihrer Startzeit / dem Startdatum, dem Titel und der gewählten Kategorie angezeigt. Die Farbwerte der Kategorie werden in der Liste angewendet.


![](/img/Bildschirmfoto-2021-11-14-um-19.56.43-1024x398.png)



Damit Du das Widget auf Deinem Wallboard verwenden kannst, musst Du in Deinem Wallboardprofil einen Eintrag für das Kalender-Widget hinzufügen.



```
{
        "cols": 3,
        "rows": 2,
        "y": 0,
        "x": 2,
        "type": "calendar-events",
        "maxEventsCount": 5
    },
```



In diesem Beisipiel wird das Kalender-Widget mit einer Breite von 3 Spalten (cols) und einer Höhe von 2 Zeilen (rows) dargestellt. Das Widget wird ab der 3. Spalte (x - 2) und in der ersten Zeile (y - 0) angezeigt. Der Parameter "maxEventsCount" ist optional. Setzt Du ihn nicht, wird ein Standardwert von 5 angenommen. Dieser Parameter limitiert die maximale Anzahl an anzuzeigenden Terminen in der Liste.



### Aktuelle Änderungen (nur im dev Branch nicht im Realease)



Es gibt nun die Möglichkeit Parameter mitzugeben:




|  |  |
| --- | --- |
| `"darkmode": true` | sorgt für minimaleres Design des Widgets (abhängig von Sekundärfarbe) |



![](/img/Bildschirmfoto-2022-05-17-um-12.26.08.png)

standard




![](/img/Bildschirmfoto-2022-05-17-um-12.44.02.png)

darkmode