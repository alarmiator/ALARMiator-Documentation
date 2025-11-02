---
title: "Nginx Proxy Manager Login verschlüsseln"
slug: /nginx-proxy-manager-verschluesseln
---

# Nginx Proxy Manager Login verschlüsseln

Dieser Guide zeigt euch, wie ihr auch das Login vom Nginx Proxy Manager mit SSL Verschlüsselung ausliefern könnt.   
Das ist vor allem wichtig für diejenigen, die nicht im Heimnetzwerk hinter einem Router liegen und dort die Ports nach außen beliebig öffnen und schließen können.   
Bei einer VPS oder einem Root Server ist euer Port 81 erstmal unverschlüsselt erreichbar.



Es wird hier davon ausgegangen, dass ihr das aktuell empfohlene Docker Compose Setup nutzt un die vorherigen Walkthroughs beendet habt.



## Subdomain einrichten



Ihr habt aktuell eure Domain z.B "example.com" eingerichtet, welche auf euren ALARMiator Server zeigt. Um den Login des Nginx Proxy Managers auszuliefern benötigt ihre entweder eine weiter Domain oder am einfachsten eine Subdomain. Diese könnt ihr bei eurem Domain Provider einrichten.   
In diesem Tutorial lautet unsere Subdomain "nginx.example.com".



## Neuen Proxy Host einrichten



Richtet euch einen neuen Proxy Host im Nginx Proxy Manager ein, welcher folgendermaßen aussieht:


![](/img/grafik-942x1024.png)



Tipp: Falls bei euch localhost nicht geht und ihr einen Bad Gateway Error beim Seitenaufruf bekommt probiert statt localhost "127.0.0.1".




Beantragt auch für diesen Proxy ein Zertifikat unter dem "SSL" Reiter:


![](/img/image-7-930x1024.png)



Force SSL und HSTS dienen beide der Erhöhung der Sicherheit und sollte aktiviert werden.



## Testen



Testet nun einmal, ob ihr mit eurer URL also in unserem Fall https://nginx.example.com auf die Loginseite kommt.



## Den Port 81 unverschlüsselt deaktivieren



Wenn ihr unserem Guide gefolgt seid habt ihr in eurer docker-compose.yml folgendes unter dem Service "nginxProxyManager" stehen:



```
ports:
  - '80:80'
  - '443:443'
  - '81:81'
```



Entfernt nun einfach die Zeile '81:81' und startet danach eurer Compose Setup neu:



```
docker compose up -d
```



Ihr solltet nun nicht mehr wie davor unter "http://example.com:81" den Nginx Proxy Manager erreichen, sondern nur noch unter eurer Subdomain.



Stellt auch sicher, dass euer Browser nicht die Seite gecached hat, indem ihr einmal die Seite neu ladet mit folgender Tastsenkombination STRG + FN + F5



## Rückgängig machen



Sollte eure Domain auslaufen o.ä könnt ihr den Nginx Proxy Manager auch wieder unverschlüsselt erreichen, indem ihr eure docker-compose.yml wie im Schritt davor abändert und '81:81' wieder hinzufügt. Danach natürlich 'docker compose up -d' nicht vergessen.