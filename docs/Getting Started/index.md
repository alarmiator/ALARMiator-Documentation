---
title: "Getting Started - Legen wir los"
slug: /gettingstarted
---

Diese Anleitung führt dich Schritt für Schritt durch die Einrichtung deines ALARMiator Servers.

## 📋 Voraussetzungen

Bevor du startest, stelle sicher dass du:
- Einen **Raspberry Pi 4** (empfohlen) oder Linux-Server hast
- Eine **stabile Internetverbindung** verfügbar ist
- Grundkenntnisse in **SSH und Linux** mitbringst (hilfreich, aber nicht zwingend)

→ [Detaillierte Systemanforderungen](systemanforderungen)

## 🎯 Installationsschritte

### 1️⃣ Hardware vorbereiten
- [Raspberry Pi / Linux Server einrichten](installationraspberrypilinuxserver)
- Betriebssystem installieren
- Netzwerkverbindung herstellen

### 2️⃣ ALARMiator Server installieren

**Empfohlen (Docker Compose)**:
- [Installation via Docker Compose](installation-des-servers-via-docker-compose)
- Einfache Updates
- Weniger Wartungsaufwand

**Alternativ (Native Installation)**:
- [Native Installation](installationalarmiator-servernativ)
- Mehr Kontrolle
- Für erfahrene Nutzer

### 3️⃣ Netzwerk & SSL einrichten
1. [Eigene Domain einrichten](eigenedomaineinrichten)
2. [SSL-Zertifikate konfigurieren](installation-des-servers-via-docker-compose#ssl-zertifikate-installieren)
3. [Nginx Proxy Manager absichern](nginx-proxy-manager-verschluesseln) (für VPS/Root-Server)

### 4️⃣ Grundeinstellungen vornehmen
- [Erste Einstellungen nach Installation](erste-einstellungen-im-adminpanel-nach-der-installation)
- Servername und Domain festlegen
- Adminbenachrichtigungen konfigurieren
- Berechtigungsgruppen anlegen

### 5️⃣ Stammdaten anlegen
- [Übersicht Stammdaten](uebersicht-stammdatenanlegen)
- Organisation → Standort → Gruppen → Mitglieder → Benutzer

### 6️⃣ Alarmierung aktivieren
- [Übersicht Alarmierung](uebersicht-alarmierungen)
- Alarmwege und -profile einrichten
- KatSys oder andere Alarmquelle anbinden

### 7️⃣ Wallboard einrichten (optional)
- [Übersicht Wallboard](uebersicht-wallboard)
- Raspberry Pi Zero als Wallboard-Client
- Widgets konfigurieren

### 8️⃣ Spaceport Client (optional)
- [Übersicht Spaceport](uebersicht-spaceport)
- Abgesetzte Standorte anbinden

## 🔄 Nach der Installation

### Regelmäßige Aufgaben
- [Backups erstellen](backupdeinesserverserstellen)
- [Server aktualisieren](updatedesalarmiatorservers)
- Logs überprüfen

### Erweiterte Konfiguration
- [Plugins aktivieren](plugins)
- [Email-Vorlagen anpassen](email-verarbeitung)
- [Berechtigungen verwalten](berechtigungsgruppen-anlegen)

## 🆘 Probleme?

- [Docker Troubleshooting](dockertroubleshooting)
- [Allgemeine Probleme](externeipadressewirdnichtaktualisiert)
- [Community Forum](https://community.alarmiator.de)

## 📚 Weiterführende Links

- [ALARMiator ausprobieren (PROBIERiator)](alarmiator-probieren)
- [Alternative Reverse Proxies](alternativereverseproxies)
- [Von nativer zu Docker Compose migrieren](vonnativerinstallationzudockercomposemigrieren)

---

**Tipp**: Arbeite die Schritte nacheinander ab und teste nach jedem Schritt, ob alles funktioniert. Bei Fragen hilft dir unsere [Community](https://community.alarmiator.de) gerne weiter!