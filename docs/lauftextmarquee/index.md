---
title: "Lauftext (Marquee)"
slug: /lauftextmarquee
---

# Lauftext (Marquee)

Mit diesem Widget kannst Du einen Lauftext auf Deinem Wallboard anzeigen. Der Lauftext kann aus nur einer oder auch mehrerer Zeilen Text bestehen, die hintereinander dargestellt werden.


![](/img/Bildschirmfoto-2021-11-14-um-20.12.20-1024x67.png)



Damit Du den Lauftext auf Deinem Wallboard angezeigt bekommst, musst Du folgenden Code-Block in die Idle-Konfiguration Deines Walboardprofils mit aufnehmen:



```
{
        "cols": 6,
        "rows": 1,
        "y": 4,
        "x": 0,
        "type": "marquee",
        "speed": "drowsy",
        "marqueeTexts": [
            "Text aus Widget Configuration",
            "Zweiter Text aus Widget Configuration"
        ]
    },
```



In unserem Beispiel wird der Lauftext mit einer Breite von 6 Spalten (cols) und einer Höhe von einer Zeile (rows) angezeigt. Der Lauftext ist hier so positioniert, dass er in der 5. Zeile angezeigt wird (y - 4).



Mit dem Parameter "speed" kannst Du die Geschwindigkeit des Lauftextes beeinflussen. Mögliche Werte sind:



* drowsy
* slow
* normal
* fast
* swift
* hyper



Mit dem Parameter "marqueeTexts" gibst Du die Texte vor, die hintereinander angezeigt werden sollen. Wenn Du nur eine Zeile Text anzeigen möchtest, dann behalte die Struktur bei und entferne einfach das zweite Element in der Liste. Mehrere Zeilen werden automatisch durch drei Stiche "---" separiert in der Anzeige.