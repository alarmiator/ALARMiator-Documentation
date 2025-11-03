---
title: "Logo"
slug: /logo
---

# Logo

Du kannst mit diesem Widget das Logo / Wappen Deiner Organisation auf dem Wallboard anzeigen. Das entsprechende Bild wird aus der Organisation geladen, der das Wallboard im Wallboardprofil zugeordnet ist. (Stammdaten - Organisation).



![](/img/Bildschirmfoto-2021-11-14-um-20.07.41.png)



Damit Du das Logo-Widget auf Deinem Wallboard nutzen kannst, verwende folgenden Code-Block in der Idle- oder Alarm-Konfiguration:



```
{
        "cols": 1,
        "rows": 2,
        "y": 2,
        "x": 1,
        "type": "logo"
    },
```



In unserem Beispiel wird das Logo mit einer Breite von einer Spalte (cols) und einer Höhe von zwei Zeilen (rows) angezeigt. Das Logo ist hier so platziert, dass es ab der 3. Spalte und der 2. Zeile dargestellt wird.



### Aktuelle Änderungen (nur im dev Branch nicht im Realease)



Es gibt nun die Möglichkeit Parameter mitzugeben:




|  |  |
| --- | --- |
| `"doublepicture": true` | gibt an, dass im Logo zwei Bilder versteckt sind (eins oben für den normalen Modus und eins unten für den Darkmode) |
| `"showbottom": true` | sind zwei Bilder im Logo enthalten, wird das untere angezeigt |

Ausgangsbild



![](/img/both-1024x576.png)



Resultierender Darkmode bei obigen Bild und "doublepicture": true


![](/img/Bildschirmfoto-2022-05-17-um-13.00.15-1024x147.png)