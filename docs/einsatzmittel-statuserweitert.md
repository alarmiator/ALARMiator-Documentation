---
title: "Einsatzmittel-Status erweitert"
slug: /einsatzmittel-statuserweitert
---

# Einsatzmittel-Status erweitert

Dieses Widget zeigt den aktuellen Status Deiner Einsatzmittel auf Deinem Wallboard an.




Damit Du dieses Widget nutzen kannst, füge folgenden Code-Block in die Idle-Konfiguration oder Alarm-Konfiguration Deines Wallboardprofiles ein:



```
    {
        "cols": 1,
        "rows": 3,
        "y": 1,
        "x": 2,
        "type": "extended-gear-states",
        "caption": "Organisationen",
        "organizationNames": [
            "FFW Musterstadt",
            "RD Musterstadt",
            "Bereitschaft Musterstadt"
        ]
    }
```



In unserem Beispiel wird das Widget mit einer Breite von 1 Spalten (cols) und einer Höhe von 3 Zeilen (rows) dargestellt. Die Position liegt hier ab Spalte 1 und Zeile 2.



Die "organizationnames" müssen 1:1 vorhandenen Organisationen auf deinem Server entsprechen!



### Aktuelle Änderungen (nur im dev Branch nicht im Realease)



Es gibt nun die Möglichkeit Parameter mitzugeben:




|  |  |
| --- | --- |
| `"darkmode": true` | sorgt für minimaleres Design des Widgets (abhängig von Sekundärfarbe) |
| `"organizationNames": ["FFW Musterstadt", "RD Musterstadt"]` | Die "organizationnames" müssen 1:1 vorhandenen Organisationen auf deinem Server entsprechen! |



![](/img/Bildschirmfoto-2022-05-17-um-13.08.39.png)

Standard



![](/img/Bildschirmfoto-2022-05-17-um-13.08.19.png)

Darkmode