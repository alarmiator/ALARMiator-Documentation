---
title: "Externe IP Adresse"
slug: /externeipadresse
---

# Externe IP Adresse

Diese Plugin ermittelt alle 60 Sekunden die externe IP-Adresse, unter der ALARMiator Server erreichbar ist. Mit externer IP-Adresse ist nicht die IP-Adresse des Servers im lokalen Netzwerk gemeint, sondern die IP-Adresse des WAN-Interface, also des aus den öffentlichen Internet erreichbaren Internetanschluss.



Dies ist nötig, damit ALARMiator auch an Internetanschlüssen erreichbar ist, an denen sich regelmässig die externe IP-Adresse ändert. Das ist bei so gut wie allen (S/A)DSL Anschlüssen im Privatbereich der Fall.



Ermittelt wir die IPv4-Adresse (IPv6 noch nicht integriert)



Die IP-Adresse wird in der internen Datenbank gespeichert und allen anderen Modulen sowie dem ALARMiator Core zur Verfügung gestellt. Eine Änderung der externen IP-Adresse löst innerhalb des PluginManagers ein Event aus, auf das alle anderen Module reagieren können.