---
title: "Wallboards - Einführung"
slug: /wallboards-einfuehrung
---

# Wallboards - Einführung

Wallboards sind in ALARMiator das, was auch als **Alarmmonitor** bezeichnet wird. Mit Wallboards kannst Du also Informationen gut sichtbar anzeigen.



Wallboards unterscheiden dabei zwei unterschiedliche Sichten, die **Bereitschafts-Sicht** und die **Alarm-Sicht**. Das Wallboard schaltet völlig selbständig zwischen diesen beiden Sichten um. Liegt keine Alarmierung für die Organisation an der das Wallboard zugeordnet ist, wird automatisch der Bereitschaftsmodus angezeigt.


## Was brauche ich für ein Wallboard



### Anzeigegerät



Grundlegend benötigst Du pro Wallboard ein Anzeigegerät wie z.B. einen Fernseher, einen Beamer oder einen simplen Computer-Monitor. Hier gilt "desto größer, desto besser", denn Deine Einsatzkräfte sollen die dargestellten Informationen ja im Vorbeigehen gut aufnehmen können. Bewährt haben sich hier Fernseher ab ca. 40 Zoll. Für ALARMiator ist die Größe technisch nicht relevant, da sich die Darstellung an die Auflösung des Anzeigegerätes anpasst.



### Abspielgerät



Das Wallboard wird über einen Browser geladen und im Vollbild angezeigt. Daher benötigst du dann noch ein Gerät, das das Wallboard lädt und auf dem angeschlossenen Anzeigegerät darstellt. Wir haben folgende Geräte erfolgreich getestet:



* Raspberry Pi Zero W 2
* Raspberry Pi Zero
* Raspberry Pi 3 & 4
* PC mit Windows 10
* SAMSUNG Fernseher mit eingebautem Browser



Der Raspberry Pi Zero W2 ist mit gerade einmal 15 EUR das günstigste Abspielgerät und reicht für die Darstellung absolut aus. Einen Artikel wie Du einen Raspberry Pi als Wallboard-Client installierst findest Du auch hier im Handbuch.



### Wie viele Wallboards kann ich betreiben?



Du kannst **so viele** Wallboards nutzen **wie Du benötigst**. Technisch gibt es auch hier keine Begrenzung. Dabei ist es auch irrelevant, ob die Wallboards unterschiedliche Informationen oder alle die gleichen Informationen anzeigen sollen.



### Kann ich ein Wallboard auf mehrere Displays verteilen?



Wallboards können problemlos auf mehrere Displays verteilt werden. So kannst Du sehr einfach aus mehreren kleinen Displays, die neben-/übereinander angeordnet sind, ein großes Wallboard anbieten. Möchtest Du z.B. zwei Fernseher nebeneinander nutzen für die die Darstellung eines übergreifenden Wallboards, so erstellst Du einfach zwei Wallboardprofile, die Du dann entsprechend konfigurierst. Auch sind so größere Wallboards mit 4 oder 8 Displays sehr einfach aufzubauen.



### Kann ich das gleiche Wallboard mehrfach im Gebäude anzeigen?



Wallboards werden über eine definierte URL aufgerufen. Du kannst das gleiche Wallboard somit von unbegrenzt vielen Abspielgeräten aus aufrufen. Alle werden dann die gleichen Informationen darstellen.



### Kann ich Wallboards auch an anderen Standorten installieren?



Der Zugriff auf Wallboards erfolgt über eine URL, die im Browser aufgerufen wird. Möchtest Du ein Wallboard an einem anderen Standort als dem des ALARMiator Servers anzeigen, so musst Du den ALARMiator Server von diesem Standort aus einfach erreichen können. Das kann über ein **gemeinsames Netzwerk**, **einen VPN-Tunnel** oder auch über **eine Portfreigabe** erfolgen. ALARMiator Wallboards können über https:// erreicht werden, eine Verschlüsselung der Daten ist somit gewährleistet.