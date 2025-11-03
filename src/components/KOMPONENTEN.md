# MDX-Komponenten für die Dokumentation

Diese Datei beschreibt die verfügbaren MDX-Komponenten, die in der ALARMiator-Dokumentation verwendet werden können.

## 🎨 Verfügbare Komponenten

### DocCard

Erstellt eine anklickbare Karte mit Icon, Titel und Beschreibung für interne Links.

```mdx
<DocCard
  title="Dein Titel"
  description="Eine kurze Beschreibung"
  to="/docs/dein-link"
  icon="🚀"
/>
```

**Props:**
- `title` (string, required) - Der Titel der Karte
- `description` (string, required) - Die Beschreibung
- `to` (string, required) - Der interne Link
- `icon` (string, optional) - Ein Emoji als Icon (Standard: 📄)

---

### DocCardGrid

Container für mehrere DocCards in einem Grid-Layout.

```mdx
<DocCardGrid cols={2}>
  <DocCard ... />
  <DocCard ... />
  <DocCard ... />
</DocCardGrid>
```

**Props:**
- `cols` (2 | 3, optional) - Anzahl der Spalten (Standard: 2)

---

### InfoBox

Zeigt hervorgehobene Informationen, Tipps, Warnungen oder wichtige Hinweise an.

```mdx
<InfoBox type="info" title="Dein Titel">
Dein Text hier...
</InfoBox>
```

**Props:**
- `type` ('info' | 'tip' | 'warning' | 'danger', optional) - Der Typ der Box (Standard: 'info')
- `title` (string, optional) - Überschreibt den Standard-Titel
- `children` (ReactNode, required) - Der Inhalt der Box

**Standard-Titel:**
- `info`: "Info" (💡)
- `tip`: "Tipp" (ℹ️)
- `warning`: "Achtung" (⚠️)
- `danger`: "Wichtig" (🚨)

---

### RelatedLinks

Zeigt eine Liste verwandter Links am Ende einer Seite an.

```mdx
<RelatedLinks
  title="📚 Siehe auch"
  links={[
    {
      title: "Link-Titel",
      to: "/docs/link",
      description: "Optionale Beschreibung"
    },
    {
      title: "Anderer Link",
      to: "/docs/anderer-link"
    }
  ]}
/>
```

**Props:**
- `title` (string, optional) - Titel der Sektion (Standard: "📚 Siehe auch")
- `links` (array, required) - Array von Link-Objekten
  - `title` (string) - Titel des Links
  - `to` (string) - Ziel-URL
  - `description` (string, optional) - Beschreibung des Links

---

### StepByStep

Erstellt eine nummerierte Schritt-für-Schritt-Anleitung.

```mdx
<StepByStep>
  <Step title="Erster Schritt">
    Beschreibung des ersten Schritts...
  </Step>
  <Step title="Zweiter Schritt">
    Beschreibung des zweiten Schritts...
  </Step>
</StepByStep>
```

**Props (StepByStep):**
- `children` (Step[], required) - Array von Step-Komponenten

**Props (Step):**
- `title` (string, required) - Titel des Schritts
- `children` (ReactNode, required) - Inhalt des Schritts

---

## 📝 Verwendung in MDX-Dateien

1. **Datei muss .mdx Endung haben** (nicht .md)
2. Alle Komponenten sind automatisch verfügbar (kein Import nötig)
3. Verwende JSX-Syntax für die Komponenten

### Beispiel einer kompletten Seite

```mdx
---
title: "Meine Beispielseite"
slug: /meine-seite
---

Einleitungstext...

<InfoBox type="tip">
Wichtiger Hinweis für die Nutzer!
</InfoBox>

## Hauptinhalt

<DocCardGrid>
  <DocCard
    title="Erste Option"
    description="Beschreibung der ersten Option"
    to="/docs/option-1"
    icon="🎯"
  />
  <DocCard
    title="Zweite Option"
    description="Beschreibung der zweiten Option"
    to="/docs/option-2"
    icon="🚀"
  />
</DocCardGrid>

## Schritt-für-Schritt

<StepByStep>
  <Step title="Installation">
    Installiere zuerst...
  </Step>
  <Step title="Konfiguration">
    Konfiguriere dann...
  </Step>
</StepByStep>

<RelatedLinks
  links={[
    {
      title: "Verwandtes Thema",
      to: "/docs/verwandt",
      description: "Mehr dazu hier"
    }
  ]}
/>
```

---

## 🎨 Design-Richtlinien

### Icons
- Verwende Emojis als Icons
- Wähle passende Emojis für den Kontext
- Beliebte Icons:
  - 🚀 Installation/Start
  - 📖 Dokumentation
  - ⚙️ Einstellungen
  - 🚨 Alarmierung
  - 👥 Benutzer/Mitglieder
  - 📺 Wallboards
  - 📱 Mobile App

### Farben (InfoBox)
- **info** (blau): Allgemeine Informationen
- **tip** (grün): Hilfreiche Tipps
- **warning** (orange): Warnungen, nicht kritisch
- **danger** (rot): Wichtige/kritische Hinweise

### Beschreibungen
- Kurz und prägnant halten
- In "du"-Form schreiben
- Maximal 1-2 Sätze

---

## 🔧 Technische Details

- **Location**: `/src/components/`
- **MDX Config**: `/src/theme/MDXComponents.tsx`
- **CSS Modules**: Jede Komponente hat ein eigenes `.module.css`
- **Dark Mode**: Alle Komponenten unterstützen Dark Mode
- **Responsive**: Alle Komponenten sind mobile-optimiert
