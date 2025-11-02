---
title: "Übersicht Alarmierung"
slug: /uebersicht-alarmierungen
---

Um die Alarmierungsfunktion von ALARMiator nutzen zu können, müssen mehrere Komponenten eingerichtet werden. Diese Anleitung führt dich Schritt für Schritt durch den Prozess.

## 📋 Voraussetzungen

Bevor du mit der Alarmierungseinrichtung beginnst, sollten bereits vorhanden sein:
- ✅ Mindestens eine [Organisation](eine-organisation-anlegen)
- ✅ Mindestens ein [Standort](einen-standort-anlegen)
- ✅ Mindestens eine [Gruppe](gruppen-anlegen)
- ✅ Mindestens ein [Mitglied](mitglieder-anlegen)
- ✅ Zugehöriger [Benutzer](benutzer-anlegen) für das Mitglied

## 🔧 Schritt-für-Schritt Einrichtung

### 1. Plugins aktivieren

Aktiviere im Admin-Bereich folgende Plugins:

- **REST-API Plugin** - Grundlegende API-Funktionen
- **ALARMiator Mobile Plugin** - Alarmierung über Mobile Apps

→ [Plugins verwalten](plugins)

### 2. Schleifen anlegen

Schleifen verbinden Alarmcodes mit lesbaren Bezeichnungen und steuern das Wallboard.

→ [Schleifen anlegen](schleifenanlegen)

**Beispiel:**
- Schleifencode: `12345`
- Bezeichner: `FFW Musterstadt - Vollalarm`

### 3. Alarmwege konfigurieren

Lege fest, welche Mitglieder über welche Wege alarmiert werden können.

→ [Alarmwegematrix einstellen](alarmwegematrixeinstellen)

**Verfügbare Alarmwege:**
- Mobile App (Push-Benachrichtigung)
- SMS
- E-Mail
- Webhook

**Wichtig:** Für jeden Alarmweg muss das entsprechende Plugin aktiviert sein!

### 4. Alarmdaten konfigurieren

Bestimme, welche Einsatzinformationen an welche Gruppen übermittelt werden.

→ [Alarmdatenmatrix einstellen](alarmdatenmatrixeinstellen)

**Beispiel-Datenfelder:**
- Einsatzstichwort
- Einsatzort
- Mitteilung Disponent
- Alarmierte Einsatzmittel
- Karte

### 5. Alarmierungsprofile erstellen

Alarmierungsprofile legen fest, welche Gruppen bei welchen Schleifen alarmiert werden.

→ [Alarmierungsprofile anlegen](alarmierungsprofileanlegen)

**Beispiel-Profil:**
```
Wenn Schleife "12345" empfangen wird:
  → Alarmiere Gruppe "Einsatzabteilung"
  → In Organisation "FFW Musterstadt"
```

### 6. Endgeräte freischalten

Neue Endgeräte müssen vom Administrator freigegeben werden, bevor sie Alarmierungen empfangen können.

→ [Endgeräte aktivieren](endgeraet-aktivieren)

**Ablauf:**
1. Mitglied meldet sich erstmalig in der App an
2. Endgerät erscheint in der Endgeräte-Liste
3. Administrator aktiviert das Endgerät
4. Mitglied kann nun Alarmierungen empfangen

## 📥 Alarmquellen einrichten

Wähle eine oder mehrere Alarmquellen:

### KatSys Cloud Connector (empfohlen)
→ [KatSys Cloud Connector einrichten](katsyscloudconnector)

**Vorteile:**
- Direktanbindung an Leitstelle
- Automatische Alarmübernahme
- Statusmeldungen

**Voraussetzungen:**
- KatSys-Zugang (Master Token, Sub Token, PEM-Datei)
- Freischaltung durch Leitstelle

### BosMon
→ [Alarmierung mit BosMon](alarmierung-mit-bosmon)

**Vorteile:**
- Dekodierung von ZVEI, FMS, POCSAG
- Lokale Funkmelder-Anbindung

**Voraussetzungen:**
- Kostenpflichtige BosMon-Version
- API-Token von ALARMiator

### Manuelle Alarmierung
→ [Manuelle Alarmierung auslösen](manuellealarmierungauslsen)

**Anwendungsfälle:**
- Keine Leitstellenanbindung
- Werksfeuerwehren
- Störung der Leitstellenanbindung
- Tests und Übungen

## ✅ Installation testen

### 1. Probealarm konfigurieren
→ [Zeitgesteuerte Probealarme](zeitgesteuerteprobealarmeanlegen)

### 2. Test-Alarmierung auslösen
- [Manuelle Alarmierung](manuellealarmierungauslsen) nutzen
- Oder Probealarm über Mobile App anfordern

### 3. Prüfen
- ✅ Alarm kommt auf Mobile App an?
- ✅ Rückmeldung funktioniert?
- ✅ Richtige Daten werden angezeigt?
- ✅ Navigation zum Einsatzort möglich?

## 🔍 Troubleshooting

### Alarm kommt nicht an
→ [Es erfolgt keine Alarmierung](eserfolgtkeinealarmierung)

**Häufige Ursachen:**
- Internetverbindung unterbrochen
- Endgerät nicht freigegeben
- Alarmierungsregeln falsch konfiguriert
- Akkuoptimierung nicht deaktiviert (Android)
- Kritische Hinweise nicht aktiviert (iOS)

### Weitere Probleme
- [Endgeräte aktivieren](endgeraet-aktivieren)
- [FCM Tokens prüfen](fcmtokens)
- [Community Forum](https://community.alarmiator.de)

## 📱 Mobile App einrichten

Nach erfolgreicher Server-Konfiguration:

1. **Android**: [Android-Guide](docs-mobile/android-guide-fuer-benutzer)
2. **iOS**: [iOS-Guide](docs-mobile/ios-guide-fuer-benutzer)

## 🎓 Weiterführende Themen

- [Alarmdatenmatrix Details](alarmdatenmatrixeinstellen)
- [Alarmwegematrix Details](alarmwegematrixeinstellen)
- [KatSys Cloud Connector](katsyscloudconnector)
- [API-Tokens verwalten](alarmierung-mit-bosmon)

---

**Tipp:** Teste die Alarmierung zunächst mit einer kleinen Testgruppe, bevor du sie produktiv nutzt!