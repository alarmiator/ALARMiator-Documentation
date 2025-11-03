import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Mobile App Dokumentation
  mobileSidebar: [
    'docs-mobile/intro',
    {
      type: 'category',
      label: '📱 Benutzerhandbuch',
      collapsed: false,
      items: [
        'docs-mobile/androidguidefuerbenutzer',
        'docs-mobile/iosguidefuerbenutzer',
        'docs-mobile/lautlos-durchbrechungios',
        'docs-mobile/hydranteneintragen',

      ],
    },
  ],

  // Server Dokumentation
  serverSidebar: [
    'intro',

    // ALARMiator Allgemein
    {
      type: 'category',
      label: '📖 Über ALARMiator',
      collapsed: false,
      items: [
        'alarmiatorallgemein',
        'alarmiator-probieren',
        'systemanforderungen',
      ],
    },

    // Getting Started
    {
      type: 'category',
      label: '🚀 Installation & Einrichtung',
      collapsed: false,
      items: [
        'getting-started/index',
        {
          type: 'category',
          label: 'Server Installation',
          collapsed: false,
          items: [
            'getting-started/Übersicht-Erstinstallation',
            'Docker/installationdesserversviadockercompose',
            'installationalarmiator-servernativ',
            'installationraspberrypilinuxserver',
          ],
        },
        {
          type: 'category',
          label: 'Netzwerk & Zugriff',
          collapsed: true,
          items: [
            'eigenedomaineinrichten',
            'getting-started/NginxProxyManagerVerschlüsseln',
            'alternativereverseproxies',
          ],
        },
        {
          type: 'category',
          label: 'Erste Konfiguration',
          collapsed: true,
          items: [
            'Admin/erste-einstellungen-im-adminpanel-nach-der-installation',
            'Admin/backupdeinesserverserstellen',
            'Admin/berechtigungsgruppenanlegen',
          ],
        },
      ],
    },

    // Stammdaten
    {
      type: 'category',
      label: '👥 Stammdaten',
      collapsed: true,
      items: [
        'Übersichten/uebersichtstammdatenanlegen',
        'eineorganisationanlegen',
        'einenstandortanlegen',
        'mitgliederanlegen',
        'benutzeranlegen',
        'gruppenanlegen',
        'rollenanlegen',
        'qualifikationenanlegen',
        'notfallkontakteintragen',
      ],
    },

    // Alarmierung
    {
      type: 'category',
      label: '🚨 Alarmierung',
      collapsed: true,
      items: [
        'Übersichten/uebersichtalarmierungen',
        {
          type: 'category',
          label: 'Grundkonfiguration',
          collapsed: true,
          items: [
            'schleifenanlegen',
            'Alarmierung/alarmierungsprofileanlegen',
            'Alarmierung/alarmdatenmatrixeinstellen',
            'Alarmierung/alarmwegematrixeinstellen',
            'endgerteaktivieren',
          ],
        },
        {
          type: 'category',
          label: 'Alarmquellen & Anbindungen',
          collapsed: true,
          items: [
            'Alarmierung/manuellealarmierungauslsen',
            'katsyscloudconnector',
            'Alarmierung/alarmierungmitbosmon',
            'anbindungvonbosmon',
          ],
        },
        {
          type: 'category',
          label: 'Probealarme',
          collapsed: true,
          items: [
            'Alarmierung/zeitgesteuerteprobealarmeanlegen',
          ],
        },
        {
          type: 'category',
          label: 'Fehlerbehebung',
          collapsed: true,
          items: [
            'Alarmierung/eserfolgtkeinealarmierung',
          ],
        },
      ],
    },

    // Inventar
    {
      type: 'category',
      label: '📦 Inventar',
      collapsed: true,
      items: [
        'Übersichten/inventar-uebersicht',
        'aprtsanlegen',
      ],
    },

    // Termine
    {
      type: 'category',
      label: '📅 Termine',
      collapsed: true,
      items: [
        'Termine/terminkategorienanlegen',
        'Termine/terminanlegen',
      ],
    },

    // Wallboards
    {
      type: 'category',
      label: '📺 Wallboards',
      collapsed: true,
      items: [
        'Übersichten/uebersichtwallboard',
        'Wallboard/wallboards-einfhrung',
        'Wallboard/wallboard-konfiguration',
        'Wallboard/Wallboard-Builder',
        'installationaufbasisraspberrypizerow2',
        {
          type: 'category',
          label: 'Bereitschaftsmodus',
          collapsed: true,
          items: [
            'beispielbereitschaftsmodus',
            'allgemeineeinstellungen',
            'logo',
            'uhrzeitdatum',
            'aktuelleswetter',
            'kalender-liste',
            'anstehendewartungen',
            'einsatzmittel-status',
            'einsatzmittel-statuserweitert',
            'lauftextmarquee',
            'covid-19status',
          ],
        },
        {
          type: 'category',
          label: 'Alarmmodus',
          collapsed: true,
          items: [
            'Alarmierung/beispielconfigalarmierungsmodus',
            'Alarmierung/alarmierungsstichwort',
            'adresse',
            'mitteilungdisponent',
            'karteeinsatzstelle',
            'routezureinsatzstellealskarte',
            'Alarmierung/zeitseitalarmierungalslaufendeuhr',
            'Alarmierung/alarmierteeinsatzmittel',
            'Alarmierung/rckmeldungenzuralarmierung',
          ],
        },
        'installationseinesbewegungsmelders',
      ],
    },

    // Spaceport
    {
      type: 'category',
      label: '🛰️ Spaceport Client',
      collapsed: true,
      items: [
        'Übersichten/uebersichtspaceport',
        'spaceportclient',
        'spaceportclientanlegen',
      ],
    },

    // Administration
    {
      type: 'category',
      label: '⚙️ Administration',
      collapsed: true,
      items: [
        'Übersichten/uebersicht-dashboard',
        'moduladministration',
        'grundeinstellungen',
        'email-verarbeitung',
        {
          type: 'category',
          label: 'Plugins',
          collapsed: true,
          items: [
            'plugins',
            'externeipadresse',
            'webhooksaktivieren',
          ],
        },
        {
          type: 'category',
          label: 'System-Tools',
          collapsed: true,
          items: [
            'Seiten/protokollelogviewer',
            'Seiten/aufgaben-verwaltung',
            'Seiten/broadcast-nachricht',
          ],
        },
        {
          type: 'category',
          label: 'Updates & Wartung',
          collapsed: true,
          items: [
            'Admin/backupdeinesserverserstellen',
            'updatedesalarmiatorservers',
            'Docker/vonnativerinstallationzudockercomposemigrieren',
          ],
        },
      ],
    },

    // Troubleshooting
    {
      type: 'category',
      label: '🔧 Fehlerbehebung',
      collapsed: true,
      items: [
        'Docker/dockertroubleshooting',
        'externeipadressewirdnichtaktualisiert',
        'wasmacheichwennichbereitsserviceswebserveraufmeinemhosthabe',
      ],
    },

    // Referenz
    {
      type: 'category',
      label: '📚 Referenz',
      collapsed: true,
      items: [
        'module',
        'Übersichten/uebersichtparser',
        'fcmtokens',
      ],
    },
  ],
};

export default sidebars;
