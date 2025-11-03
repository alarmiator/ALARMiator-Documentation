---
title: "COVID-19 Status"
slug: /covid-19status
---

# COVID-19 Status

Dieses Widget zeigt die aktuelle Inzidenz basierend auf den Daten des RKI für Deine Region an. Zusätzlich wird die Hospitalisierungsrate für Dein Bundesland angezeigt. Eine Region ist hierbei eine Stadt oder ein Landkreis.


![](/img/image-5.png)



Um das Widget auf Deinem Wallboard zu platzieren, trage für das Widget in dem entsprechenden Wallboardprofil einen Eintrag in der Idle-Konfiguration ein.



Ein Beispiel:



```
{
        "cols": 1,
        "rows": 2,
        "y": 0,
        "x": 5,
        "type": "idle-covid",
        "location": "Nürnberger Land",
        "state": "BY"
    },
```



Hier ist das Covid-19 Widget mit einer Breite von einer Spalte (Cols) und zwei Zeilen (rows) anglegt. Das Widget wird im Raster x - 5 und y - 0 dargestellt. Mittels der "location"-Eigenschaft bestimmst Du, für welche Region Du die Daten anzeigen möchtest.



### Aktuelle Änderungen (nur im dev Branch nicht im Realease)



Es gibt nun die Möglichkeit Parameter mitzugeben:




|  |  |
| --- | --- |
| `"darkmode": true` | sorgt für minimaleres Design des Widgets (abhängig von Sekundärfarbe) |



![](/img/Bildschirmfoto-2022-05-17-um-12.10.44.png)

default



![](/img/Bildschirmfoto-2022-05-17-um-12.28.44.png)

darkmode