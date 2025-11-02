---
title: "aktuelles Wetter"
slug: /aktuelleswetter
---

# aktuelles Wetter

Dieses Widget zeigt Dir grundlegende Wetterdaten auf Deinem Wallboard an. Die Daten werden vom DWD bezogen. Das Widget lädt die Wetterdaten für die Geoposition (Latitude, Longitude) des Standortes, dem Dein Wallboard zugeordnet ist.



Angezeigt werden die aktuelle Temperatur, die Windgeschwindigkeit, die Geschwindigkeit von Windböen sowie die Wolkendichte in Prozent.


![](/img/Bildschirmfoto-2021-11-14-um-19.49.09.png)



Damit Du das Widget in Deinem Wallboard verwenden kannst, trage einen Block in die Idle-Konfiguration Deines Wallboardprofiles ein:



```
{
        "cols": 2,
        "rows": 2,
        "y": 0,
        "x": 0,
        "type": "weather"
    },
```



In diesem Beispiel wird das Wetter-Widget mit einer Breite von 2 Spalten (cols) und einer Höhe von 2 Zeilen (rows) dargestellt. Das Widget wird in diesem Fall links oben angezeigt (x - 0, y - 0). Weitere Konfigurationswerte sind nicht nötig.



### Aktuelle Änderungen (nur im dev Branch nicht im Realease)



Es gibt nun die Möglichkeit Parameter mitzugeben:




|  |  |
| --- | --- |
| `"darkmode": true` | sorgt für minimaleres Design des Widgets (abhängig von Sekundärfarbe) |



![](/img/Bildschirmfoto-2022-05-17-um-12.10.33.png)

default



![](/img/Bildschirmfoto-2022-05-17-um-12.28.37.png)

darkmode