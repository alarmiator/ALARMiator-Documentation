---
title: "Eigene Domain einrichten"
slug: /eigenedomaineinrichten
---

# Eigene Domain einrichten

Damit Dein ALARMiator Server aus dem öffentlichen Internet erreichbar ist, musst Du Deinem Server eine Domain geben. Hier gibt es mehrere Möglichkeiten, die von Deinem Router abhängen.



## AVM FritzBox



AVM bietet mit seinen Fritz!Box Routern von Haus aus seinen eigenen Dienst "myFritz" an. Du kannst in der Konfigurationsoberfläche Deiner Fritzbox den MyFritz-Dienst aktivieren und konfigurieren. Nach der Aktivierung wird Dir in der Oberfläche der Fritzbox Deine MyFritz-Adresse angezeigt.


![MyFRITZ!-Domainnamen für direkten Internetzugriff auf FRITZ!Box und  Heimnetz ermitteln | FRITZ!Box 7590 | AVM Deutschland](/img/306.png)



Unter dieser Adresse erreichst Du nun fortan die von Dir freigegebenen Endgeräte in Deinem Netzwerk auch aus dem Internet. (Nur die, für die Du eine Portfreigabe eingerichtet hast!).



Diese Adressen sind nun allerdings nicht leicht zu merken und Tippfehler bei der Eingabe z.B. in der ALARMiator Mobile App oder im Browser werden an der Tagesordnung sein.



## Andere Router



Abhängig vom Hersteller finden sich unterschiedliche Möglichkeiten, dynamische Domains einzurichten. Lies Dir am besten die Dokumentation Deines Routers durch und suche nach Begriffen wie "DynDNS" oder "Dynamic Domain".




## DynDNS-Dienst



Wenn Dein Router die Verwaltung und Aktualisierung von Dynamischen Domains nicht unterstützt, dann gibt es hierzu auch Anbieter wie z.B. dedyn.io, die einen eigenen Client anbieten. Bei Fragen findest Du hier auch Unterstützung in der ALARMiator Community.




## Deine Eigene Domain



Bist Du im Besitz einer eigenen Domain, dann kannst Du diese auch für ALARMiator nutzen. Wichtig hierfür ist, dass Du die sog. DNS-Einträge zu dieser Domain verwalten kannst. Hierzu bieten eigentlich alle Webhoster heutzutage einen Bereich in der Hosting-Verwaltungsoberfläche an.



Empfehlung: Richte für ALARMiator eine eigene Subdomain zu Deiner Domain ein. Ein Beispiel:



Domain **www.feuerwehr-musterstadt.de** wird aktuell genutzt für z.B. die Website und auch für EMail-Verkehr.



Richte nun eine Subdomain ein mit dem Namen **alarmserver.feuerwehr-musterstadt.de**. Diese wird nach Abschluss der Konfiguration zukünftig für ALARMiator verwendet.



Diese Domain muss nun einen speziellen DNS-Eintrag erhalten, damit Du alle Anfragen für diese Domain auf Deinen dynamischen Internet-Anschluss weiterleiten kannst. Öffne nun den Verwaltungsbereich für Deine Domain bei Deinem Hoster und erstelle für Deine Domain einen sog. CNAME-Eintrag.


![](/img/image-1024x115.png)



Als Name trägst Du den Namen der Subdomain ein, die Du verwenden möchtest, in unserem Beispiel hier "alarmserver". Als Value (das ist das Ziel) trägst Du Deine dynamische Domain ein, die Du vorher schon eingerichtet hast, in diesem Beispiel die MyFritz-Adresse einer FritzBox. Der TTL Wert legt fest, wie lange dieser Wert gültig ist und von DNS-Servern im Internet zwischengespeichert wird (Cache). Diesen TTL Wert kannst Du bei der Standard-Einstellung belassen.




Sobald ein solcher CNAME-Eintrag erstellt wurde, werden alle Anfragen aus dem Internet für die Domain alarmserver.feuerwehr-musterstadt.de mit der öffentlichen IP-Adresse Deiner dynamischen Domain beantwortet.



Bei manchen Routern (wie z.B. der AVM Fritz!Box) muss nun noch ein Eintrag in der Konfigurationsoberfläche eingetragen werden. Du findest bei vielen Routern einen Bereich mit der Bezeichnung "DNS-Rebind" oder "DNS-Rebind-Schutz". In diesem Bereich findest Du ein Textfeld, in das Du alle Domainnamen eintragen kannst, für die die Fritz-Box Anfragen zulässt. Trage hier Deine neue Subdomain ein, und starte den Router einmal neu.