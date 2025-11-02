---
title: "Beispiel Bereitschaftsmodus"
slug: /beispielbereitschaftsmodus
---

# Beispiel Bereitschaftsmodus

### Beispiel 1: BRK Nürnberger Land



Beispiel für eine Wallboard Konfiguration im Bereitschaftsmodus: Für die zusätzlichen Parameter bitte die einzelnen Docs der Widgets beachten!


![](/img/Bildschirmfoto-2022-05-17-um-14.08.49-1024x521.png)

Standard



![](/img/Bildschirmfoto-2022-05-17-um-14.19-1024x522.png)

Darkmode




```
[
    {
        "cols": 8,
        "rows": 2,
        "y": 0,
        "x": 2,
        "type": "logo",
        "doublepicture": true
    },
    {
        "cols": 2,
        "rows": 2,
        "y": 0,
        "x": 2,
        "type": "idle-date",
        "daymode": "dayandmonth",
        "fontsizedate": "3.4rem",
        "fontsizeday": "3.4rem"
    },
    {
        "cols": 2,
        "rows": 2,
        "y": 0,
        "x": 10,
        "type": "idle-clock-type2"
    },
    {
        "cols": 4,
        "rows": 3.5,
        "y": 2,
        "x": 0,
        "type": "weather"
    },
    {
        "cols": 4,
        "rows": 5.5,
        "y": 5.5,
        "x": 0,
        "type": "idle-covid",
        "location": "Nürnberger Land",
        "state": "BY"
    },
    {
        "cols": 8,
        "rows": 9,
        "y": 2,
        "x": 4,
        "type": "calendar-events"
    },
    {
        "type": "general",
        "x": 0,
        "y": 0,
        "cols": 0.01,
        "rows": 0.01,
        "darkmodestart": "22:00",
        "darkmodeend": "06:00"
    }
]
```



### Beispiel 2: Feuerwehr Hartmannshof



```
[
    {
        "cols": 1,
        "rows": 3,
        "y": 3,
        "x": 0,
        "type": "weather"
    },
    {
        "cols": 1,
        "rows": 1,
        "y": 6,
        "x": 0,
        "type": "idle-clock-type2"
    },
    {
        "cols": 2,
        "rows": 6,
        "y": 0,
        "x": 1,
        "type": "calendar-events"
    },
    {
        "cols": 1,
        "rows": 2,
        "y": 0,
        "x": 3,
        "type": "extended-gear-states",
        "caption": "Feuerwehr Hartmannshof",
        "organizationNames": [
            "Feuerwehr Hartmannshof"
        ]
    },
    {
        "cols": 1,
        "rows": 3,
        "y": 0,
        "x": 0,
        "type": "logo"
    },
    {
        "cols": 1,
        "rows": 5,
        "y": 1,
        "x": 3,
        "type": "extended-gear-states",
        "caption": "Gemeindewehren",
        "organizationNames": [
            "Feuerwehr Eschenbach",
            "Feuerwehr Hohenstadt",
            "Feuerwehr Pommelsbrunn",
            "Feuerwehr Hubmersberg",
            "Feuerwehr Guntersrieth",
            "Feuerwehr Stallbaum"
        ]
    }
]
```