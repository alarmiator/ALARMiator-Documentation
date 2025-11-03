---
title: "KatSys Cloud Connector"
slug: /katsyscloudconnector
---

# KatSys Cloud Connector

Das KatSys Cloud Plugin stellt die Verbindung zwischen ALARMiator und der KatSys Cloud her. Über dieses Plugin werden Alarmierungen einer Leitstelle über die KatSys Cloud entgegengenommen. Das Plugin baut dazu eine dauerhafte Verbindung zur KatSys Cloud auf und prüft diese Verbindung auch dauerhaft.



Sollte die Verbindung unterbrochen werden, wird die Unterbrechung sofort als Benachrichtigung an die Administratoren versendet. Zudem versucht das Plugin automatisch die Verbindung wieder herzustellen.



Neben Alarmierungen kann das Plugin auch Statusmeldungen empfangen und in ALARMiator verarbeiten.



## Voraussetzungen



Damit Du das Plugin nutzen kannst, benötigst Du einen KatSys-Zugang. Diesen erhältst Du normalerweise von Deinem zuständigen KatSys-Verantwortlichen oder Deiner alarmierenden Leitstelle. Zum Zugang gehören



* Mastertoken
* Subtoken
* PEM-Datei



Zudem muss die Verantwortliche KatSys Stelle Alarmierungen und Statusausleitungen für Deinen KatSys-Zugang konfiguriert und aktiviert haben.



```
Jeder ILS-Bereich und teilweise auch zusätzlich die darunter organisierten Landkreise nutzen KatSys unterschiedlich. So unterscheiden sich die übermittelten Informationen in Ihrer Zusammenstellung und auch in den übermittelten Variablennamen. Für immer mehr ILS Bereiche bietet ALARMiator bereits sog. "Parser" zur Übersetzung an. Wenn für Deinen ILS Bereich noch kein Parser vorhanden ist, dann melde Dich einfach in der Community bei uns. Wir können normalerweise innerhalb von wenigen Tagen einen neuen Parser erstellen und dann standardmäßig mit ausliefern.
```



## Konfiguration



In den Plugin-Einstellungen musst Du folgende Konfiguration vornehmen:




|  |  |
| --- | --- |
| Plugin aktiv | **Ja / Nein** Damit das Plugin aktiviert ist und eine Verbindung zur KatSys Cloud aufnimmt muss hier Ja gewählt werden. |
| Master Token | Trage hier das Dir übermittelte Master Token ein Es handelt sich dabei um eine lange Folge an Zahlen und Buchstaben |
| Sub Token | Trage hier das Dir übermittelte Sub Token ein Es handelt sich dabei um eine lange Folge an Zahlen und Buchstaben |
| PEM Datei | Zu den beiden Tokens hast Du eine PEM-Datei erhalten. Diese musst Du hier auf den ALARMiator Server hochladen |
| Alarmierung aktiv | **Ja / Nein** Wenn hier Ja gewählt ist, dann werden eingehende Alarmierungen aus KatSys als aktive Alarmierung in ALARMiator behandelt. Wenn hier Nein gewählt wurde, dann werden eingehende Alarmierungen zwar aufgenommen und in ALARMiator gespeichert, lösen aber keine weiteren Alarmierungen aus ALARMiator heraus aus. |
| ILS Parser | Wähle hier Deinen Landkreis aus. KatSys-Alarmierungen unterscheiden sich im Aufbau von Landkreis zu Landkreis. Um diese Unterschiede zu berücksichtigen, bietet ALARMiator Landkreis-Parser an. Wenn für Deinen Landkreis noch kein Parser angeboten wird in diesem Auswahlfeld, dann wende Dich bitte in der ALARMiator Community an die Entwickler. Wir werden dann einen Parser für Deinen Landkreis erstellen und für ALARMiator anbieten. |
| erweitere KatSys Einstellungen | Diese Einstellung ist für Entwicklungsumgebungen vorgesehen und sollte in aktiv genutzten Umgebungen auf **Nein** stehen. |
| KatSys URL | Hier muss die Adresse des KatSys Cloud Dienstes eingetragen werden (normalerweise wss://connect.katsys.cloud) |
| KatSys Port | Hier muss der Port des KatSys Cloud Dienstes eingetragen werden (normalerweise 81) |