---
title: "Route zur Einsatzstelle als Karte"
slug: /routezureinsatzstellealskarte
---

# Route zur Einsatzstelle als Karte

Dieses Widget zeigt die Route vom Standort des Wallboards bis zum Einsatzort an.


![](/img/image-41.png)



Damit Du dieses Widget nutzen kannst, füge folgenden Code-Block in die Alarm-Konfiguration Deines Wallboardprofiles ein:



```
    {
        "cols": 2,
        "rows": 2,
        "y": 1,
        "x": 3,
        "type": "operation-map-directions"
    }
```



In unserem Beispiel wird das Widget mit einer Breite von zwei Spalten (cols) und einer Höhe von zwei Zeilen (rows) dargestellt. Die Position liegt hier ab Spalte 1 (y) und Zeile 3 (x).



Damit die Route berechnet werden kann, muss ein API-Key in den Grundeinstellungen eingetragen sein. [Hier geht es zum Grundeinstellungswalkthrough.](erste-einstellungen-im-adminpanel-nach-der-installation)