---
title: "Uhrzeit / Datum"
slug: /uhrzeitdatum
---

# Uhrzeit / Datum

Dieses Widget zeigt die aktuelle Uhrzeit (hh:mm:ss) und das aktuelle Datum auf Deinem Wallboard an.


![](/img/Bildschirmfoto-2021-11-14-um-20.01.58.png)



Damit Du dieses Widget auf Deinem Wallboard nutzen kannst, musst Du folgenden Code-Block in die Idle-Konfigurationm Deines Wallboardprofils mit eintragen



```
{
        "cols": 1,
        "rows": 2,
        "y": 2,
        "x": 0,
        "type": "clock-widget"
    },
```



In diesem Beispiel ist das Uhrzeit-Widget eine Spalte breit (cols) und eine Zeile hoch (rows). Die Uhr wird in unserem Beispiel am linken Rand (x - 0) und ab der 3. Zeile angezeigt (y - 2).



### Uhrzeit - Digital oder Analog



ALARMiator bietet ein weiteres - alternatives - Widget für die Uhrzeitanzeige an. Dieses Widget zeigt nur die Uhrzeit an, der Admin kann wählen ob digital oder in form einer Analog-Uhr.



#### Digitale Anzeige


![](/img/Bildschirmfoto-2022-05-17-um-12.09.47.png)

Standard



![](/img/Bildschirmfoto-2022-05-17-um-12.28.29.png)

Darkmode





#### Analoge Anzeige


![](/img/image.png)




## Konfiguration Uhr - digital



```
{
        "cols": 1,
        "rows": 2,
        "y": 2,
        "x": 0,
        "type": "idle-clock-type2",
        "showseconds": false
    },
```



## Konfiguration Uhr - analog



```
{
"cols": 2,
"rows": 2,
"y": 2,
"x": 0,
"type": "idle-clock-type2",
"clocktype": "analog",
"showdate": true,
"datecolor": "#00FF00",
"backgroundcolor": "#546e7a",
"backgroundopacity": 80
},
```





Folgende Parameter können für die Uhr definiert werden:




|  |  |
| --- | --- |
| `"darkmode": true` | sorgt für minimaleres Design des Widgets (abhängig von Sekundärfarbe) |
| `"showseconds": false` | zeigt nur die Stunden und Minuten an (HH:MM) |
| `"clocktype": "analog"` | legt fest, ob die Uhr als analoge ("analog") oder digitale ("digital") Uhr angezeigt werden soll |
| `"showdate": true` | legt fest, ob in der analogen Uhr das Datum angezeigt werden soll oder nicht |
| `"datecolor": "#FFFFFF"` | legt bei Anzeige des Datums in der analogen Uhr die Schriftfarbe für das Datum fest (Hex-Farbcode) |
| `"backgroundcolor": "#FFFFFF"` | überschreibt die Standardmässige Hintergrundfarbe des Widget für die analoge Uhr (Hex-Farbcode) |
| `"backgroundopacity": "#FFFFFF"` | legt optionale die Transparenz der Hintergrundfarbe des Widget für die analoge Uhr fest. 100 - keine Transparenz, 0 - voll transparent. Desto geringer der Wert ist, umso mehr scheint der Hintergrund des Wallboard durch. |





## Datum und Wochentag



```
{
        "cols": 1,
        "rows": 2,
        "y": 2,
        "x": 0,
        "type": "idle-date",
    },
```



Es gibt nun die Möglichkeit Parameter mitzugeben:




|  |  |
| --- | --- |
| `"darkmode": true` | sorgt für minimaleres Design des Widgets (abhängig von Sekundärfarbe) |
| `"fontsizedate": "25px"` | Schriftgröße des Datums (17.05.2022) |
| `"fontsizeday": "30px"` | Schriftgröße des Wochentags (Dienstag) |
| `"daymode": "onlyday"` | Länge des Datums:  "onlyday" - "DD" "dayandmonth" - "DD:MM" wird er weggelassen ist automatisch das komplette Datum angezeigt (DD:MM:YYYY) |



![](/img/Bildschirmfoto-2022-05-17-um-12.09.38.png)

Standard



![](/img/Bildschirmfoto-2022-05-17-um-12.28.22.png)

Darkmode