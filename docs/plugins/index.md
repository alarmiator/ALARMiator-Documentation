---
title: "Plugins"
slug: /plugins
---

# Plugins

ALARMiator kann durch Plugins einfach und generisch um neue Funktionen erweitert werden. ALARMiator wird mit einer Vielzahl an Plugins ausgeliefert und der Umfang steigt mit jeder Version.



Plugins werden dabei in eingehende und ausgehende Plugins eingeteilt.



## eingehende Plugins



Eingehendeo Plugins sind Plugins, mit denen Daten oder Informationen in den ALARMiator Server hineinkommen. Zu diesen Plugins zählt z.B. das Plugin "Externe IP Adresse", das regelmässig die öffentliche IP-Adresse des ALARMiator Servers ermittelt und allen anderen Plugins zur Verfügung stellt.



## ausgehende Plugins



Ausgehende Plugins stellen die Gegenseite zu den eingehenden Plugins dar. Ausgehende Plugins stellen Daten und Informationen für Drittsysteme zur Verfügung, geben also Informationen aus ALARMiator an andere Systeme weiter. Zu diesen Plugins zählt z.B. das ALARMiator Mobile Plugin, das Alarmierungen an die Smartphone Apps übermittelt. Auch das MQTT-Plugin beispielsweise ist ein ausgehendes Plugin, da es Informationen an einen MQTT-Broker übermittelt.



## Pluginmanager



Innerhalb des Admin-Modules in der Weboberfläche können einzelne Plugins aktiviert / deaktiviert und auch konfiguriert werden. Plugins bieten dabei jeweils ihre eigene spezifische Konfiguration an. Ein EMail-Versand Plugin benötigt andere Konfigurationswerte wie ein MQTT-Plugin.



## Plugins selber entwickeln



Dass jedermann ein eigenes neues Plugin entwickeln kann ist im Grundkonzept vorgesehen. Hierzu lohnt sich ein Blick in die Entwicklerdokumentation. So kann ALARMiator schnell und unkompliziert an neue Alarmquellen angebunden werden, oder auch Alarmierungen an weitere bisher nicht unterstützte Systeme angebunden werden.