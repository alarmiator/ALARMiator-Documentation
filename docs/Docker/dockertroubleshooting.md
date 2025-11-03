---
title: "Docker Troubleshooting"
slug: /dockertroubleshooting
---

# Docker Troubleshooting

## Wie kann ich eine Bash Shell eines Containers öffnen?



Um dich in einen Container zu bringen kannst du folgenden Befehl benutzen:



```
docker exec -it container_id bash
```



Um die container\_id zu finden kannst du folgendes eingeben:



```
docker ps
```



Wenn dein Container hier nicht aufgelistet ist, dann ist er gestoppt. Um eine Bash Shell zu öffnen muss dein Container jedoch laufen!



## Wo sind meine Logs?



Docker lässt auf deinem System sogenannte Container laufen. Diese sind für den Endnutzer deutlich angenehmer, da man nichts selbst installieren muss. Wir das ALARMiator Team können dir direkt einen bereits funktionsfähigen Container schicken. Ein Problem für Endnutzer ist jedoch, dass Sie ihre Logdateien dadurch nicht so leicht wie sonst finden können.



### Im Web UI



Du kannst dir deine Logs im Web-UI unter Administration  Protokolle  Download herunterladen.



### Im Terminal



Um Ordner aus einem Container in dein Lokales Filesystem zu kopieren kann folgender Befehl genutzt werden:



```
docker cp container_id:alarmiatorserver/logs ./alarmiator_logs_export
```



Deine Container Id findest du in dem du folgendes ausführst:



```
docker ps -a
```



Suche nach dem ALARMiator Container und benutze die zugehörige container\_id um den Logs Ordner zu kopieren.



## Wie sehe ich Logs beim Starten des Compose Setups?



Im Installationsguide wird dieser Befehl häufig benutzt:



```
docker compose up -d
```



Das -d startet die Container im Hintergrund. Um Sie im Vordergrund mit Konsolenausgabe zu starten gib folgendes ein:



```
docker compose up
```



Wenn du Sie wieder im Hintergrund starten möchtest, damit Sie dauerhaft laufen drücke STRG + C und lasse den oberen Befehl wieder laufen.



Du kannst auch bei einem bereits laufendem Setup dich im Nachhinein noch "hinzuschalten" mit folgendem Befehl:



```
docker compose events
```



## Wie stoppe ich meinen ALARMiator Server?



Um den Server zu stoppen gib im Verzeichnis in dem deine docker-compose.yml liegt folgendes ein:



```
docker compose down
```