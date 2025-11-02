---
title: "Allgemeine Einstellungen"
slug: /allgemeine-einstellungen
---

# Allgemeine Einstellungen

Es gibt die Möglichkeit Parameter mitzugeben, um das Gesamtbild des Wallboards besser zu individualisieren.



**WICHTIG**: Alle Parameter sind optional, das heißt das Wallboard kommt in seiner Standardkonfiguration und kann durch die folgenden für die eigenen Bedürfnisse angepasst werden.



Folgender Eintrag muss in die Konfig mit übernommen werden. (Beispiel)



```
{
    "type": "general",
    "x": 0,
    "y": 0,
    "cols": 0.01,
    "rows": 0.01,
    "darkmodestart": "21:02",
    "darkmodeend": "10:00"
}
```




|  |  |
| --- | --- |
| `"primary-color": "#ffffff"` | gültige hex Farbe für die Primärfarbe |
| `"secondary-color": "#b20000"` | gültige hex Farbe für die Sekundärfarbe |
| `"border-radius": "0px"` | Angabe der Eckenabrundung |
| `"darkmode": true` | sorgt für dauerhaftes minimaleres Design des gesamten Wallboards (Bereitschaftsmodus) |
| `"darkmode-primary-color": "#ffffff"` | gültige hex Farbe für die Primärfarbe während des Darkmodes |
| `"darkmode-secondary-color": "black"` | gültige hex Farbe für die Sekundärfarbe während des Darkmodes |
| `"darkmodeauto": true` | schaltet den Darkmode automatisch bei Sonnenuntergang an und Sonnenaufgang ab (nicht in Kombination mit 'darkmode', 'darkmodestart', 'darkmodeend' nutzbar) |
| `"darkmodestart": "22:00"` | Beginn des Darkmodes um 22:00 (Uhrzeit mit HH:MM angeben; in Kombination mit 'darkmodeend' nutzen) |
| `"darkmodeend": "06:00"` | Ende des Darkmodes um 06:00 (Uhrzeit mit HH:MM angeben; in Kombination mit 'darkmodestart' nutzen) |