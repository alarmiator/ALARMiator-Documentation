---
title: "Grundeinstellungen"
slug: /grundeinstellungen
---

# Grundeinstellungen

Hier legst Du grundlegende Einstellungen zu Deiner ALARMiator-Installation fest.




### **Serverschlüssel (UUID)**



Dieser Schlüssel wird automatisch beim ersten Serverstart generiert und ändert sich danach nicht mehr. Dieser Schlüssel wird von unterschiedlichen Modulen des ALARMiator verwendet, um Deine Installation eineindeutig zu identifizieren. Besonders die mobilen Apps unterscheiden über diesen Schlüssel die jeweiligen Installationen für den Fall, dass ein Mitglied bei mehreren Wehren mit unterschiedlichen ALARMiator Servern aktiv ist.




# **Allgemeine Einstellungen**



### **Name für diesen Server**



Gib hier einen Namen ein, unter dem Deine Benutzer in den mobilen Apps Deinen Server aufgelistet bekommen sollen. Gängig ist hier z.B. "ALARMiator Reichenschwand", "ALARMiaror Musterdorf" oder "ALARMiator Landkreis Musterkreis"



Der hier vergeben Name wird in diversen Benachrichtigungen (EMail) sowie innerhalb der ALARMiator Mobile App verwendet. Er dient der Zuordnung Deiner ALARMiator Installation.




## **Erreichbarkeit aus dem Internet (WAN)**



### **externer Domainname**



Damit Dein ALARMiator Server weiss, unter welcher Domain er aus dem öffentlichen Internet erreichbar ist, gib bitte hier diesen Domainnamen an. Gib bitte nur den Domainnamen ohne http:// oder https:// davor ein.




## **Update-Einstellungen**



ALARMiator kann regelmässig auf neue Versionen prüfen. Damit die Prüfung durchgeführt werden kann, musst Du hier Deine Zugangsdaten für das GitHub-Repository hinterlegen.



### **Github-Benutzername**



Dein Benutzername für das Github-Repository



### **Github-Passwort**



Dein Passwort für das GitHub-Repository



### **Version**



Wähle hier, um was für ein System es sich bei Deiner Installation handelt. Abhängig von Deiner Auswahl werden dann nur stabile Release-Versionen geprüft, Beta-Versionen oder der jeweils aktuellste Entwicklungsstand.



Für aktiv genutzte Systeme sollte "Produktivsystene" genutzt werden, diese sind am besten getestet.




## **Weboberfläche**



### **Datenschutzeinstellungen**



Wähle hier, ob die Weboberfläche unverschlüsselt (http), verschlüsselt und unverschlüsselt oder nur verschlüsselt abgerufen werden kann.




## **ILS-Einstellungen**



### **Zeilentrenner in ILS Mitteilungen**



Leitstellen verwenden in den Mitteilungstexten oft besondere Zeichen, anhand derer ein Zeilentrenner erkennbar sein soll. Im Bereich der ILS Nürnberg ist das z.B. das sog. Pipe-Symbol ("|"). Trage hier das Zeichen ein, das von Deiner Leitstelle in den Texten verwendet wird. ALARMiator wird dann dieses Zeichen mit einem Zeilenbruch ersetzen, und so die Mittelungstexte leserleicher darstellen.




## **Alarmierungs-Limits**



### **Maximales Alter Alarmierung**



Trage hier die Zeit in Minuten ein, die eine eingehende Alarmierung alt sein darf. Alarmierungen, deren Alarmierungszeit um diese Minuten älter ist, werden nicht mehr an ausgehende Alarmwege weitergereicht.



### **Alarmierung nach wie viel Minuten automatisch schließen**



Trage hier die Zeit in Minuten ein, nach der eine Alarmierung automatisch geschlossen wird.




## **Wallboard-Einstellungen**



### **API Key für Routenberechnung**



Trage hier Deinen API-Key von https://openrouteservice.org/ ein. Dieser kostenfreie Dienst wird für die Routenberechnung innerhalb der Wallboards verwendet. Wenn Du noch keinen API-Key für diesen Service hast, dann kannst Du online auf der Website des Anbieters kostenfrei einen Zugang erstellen. Die kostenfreie Variante gestattet aktuell bis zu 2000 Routing-Anfragen pro 24h.




## Benachrichtigungs-Einstellungen



### Warnzeitraum Inventargegenstände anstehende Wartung



Anzahl in Tagen in der Zukunft, für die Inventargegenstände auf anstehende Wartung überprüft werden. Diese Vorgabe wird bei der Generierung der EMail-Reports, der Anzeige auf Wallboards, sowie im Dashboard verwendet.




### Warnzeitraum auslaufende G26.3



Anzahl in Tagen in der Zukunft, für die auslaufende G26.3 überprüft werden. Diese Vorgabe wird bei der Generierung der EMail-Reports verwendet.




## Mitglieder-Avatar-Einstellungen



Hier wählst du die maximale Größe eines Organisationswappens. Wird ein größeres Bild ausgewählt, wird dies automatisch runter skaliert.




## Logfiles-Einstellungen



### Aufbewahrung in Tagen



Falls diese Einstellung gesetzt ist, werden Logfiles, die älter als die angegebene Anzahl Tage sind, von einem nächtlichen Cronjob aufgeräumt / gelöscht.