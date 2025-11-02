---
title: "Getting Started - Legen wir los"
slug: /gettingstarted
---

Diese Anleitung führt dich Schritt für Schritt durch die Einrichtung deines ALARMiator Servers.

## 📋 Voraussetzungen

Bevor du startest, stelle sicher dass du:
- Einen **Raspberry Pi 4 oder 5** oder **Linux-Server** hast. Wir empfehlen, wenn möglich die Anmietung eines VPS.
- Eine **stabile Internetverbindung** verfügbar ist
- Grundkenntnisse in **SSH und Linux** mitbringst (hilfreich, aber nicht zwingend)

→ [Detaillierte Systemanforderungen](systemanforderungen)

## 🎯 Installationsschritte

### 1️⃣ Hardware vorbereiten
- [Raspberry Pi / Linux Server einrichten](installationraspberrypilinuxserver)
- Betriebssystem installieren
- Netzwerkverbindung herstellen

### 2️⃣ ALARMiator Server installieren

**Empfohlen Installationsmethode**:
- [Installation via Docker Compose](installation-des-servers-via-docker-compose)
- Einfache Updates und Installation
- Weniger Wartungsaufwand

**Alternativ (Native Installation)**:
- [Native Installation](installationalarmiator-servernativ)
- Nur für erfahrene Nutzer

### 3️⃣ Netzwerk & SSL einrichten
1. [Eigene Domain einrichten](eigenedomaineinrichten)
2. [SSL-Zertifikate konfigurieren](installation-des-servers-via-docker-compose#ssl-zertifikate-installieren)
3. [Nginx Proxy Manager absichern](nginx-proxy-manager-verschluesseln) (für VPS)

### 4️⃣ Grundeinstellungen vornehmen
- [Erste Einstellungen nach Installation](erste-einstellungen-im-adminpanel-nach-der-installation)
- Servername und Domain festlegen
- Adminbenachrichtigungen konfigurieren
- Berechtigungsgruppen anlegen

### 5️⃣ Stammdaten anlegen
- [Organisation](eine-organisation-anlegen) → Standort → Gruppen → Mitglieder → Benutzer

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

:::tip Tipp
Arbeite die Schritte nacheinander ab und teste nach jedem Schritt, ob alles funktioniert. Bei Fragen hilft dir unsere [Community](https://community.alarmiator.de) gerne weiter!
:::