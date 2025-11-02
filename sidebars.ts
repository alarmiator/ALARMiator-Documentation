import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Mobile App Dokumentation
  mobileSidebar: [
    'docs-mobile/intro',
    {
      type: 'category',
      label: 'Benutzerhandbuch',
      collapsed: false,
      items: [
        'docs-mobile/androidguidefuerbenutzer/index',
        'docs-mobile/iosguidefuerbenutzer/index',
        'docs-mobile/lautlos-durchbrechungios/index',
      ],
    },
  ],

  // Server Dokumentation
  serverSidebar: [
    'intro',
    
    // ALARMiator Allgemein
    {
      type: 'category',
      label: 'Über ALARMiator',
      collapsed: false,
      items: [
        'alarmiatorallgemein/index',
        'ALARMiator Probieren/index',
        'systemanforderungen/index',
      ],
    },

    // Getting Started
    {
      type: 'category',
      label: 'Installation & Einrichtung',
      collapsed: false,
      items: [
        'Getting Started/index',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'installationraspberrypilinuxserver/index',
            'Docker/installationdesserversviadockercompose/index',
            'installationalarmiator-servernativ/index',
          ],
        },
        {
          type: 'category',
          label: 'Netzwerk & SSL',
          items: [
            'eigenedomaineinrichten/index',
            'Getting Started/NginxProxyManagerVerschlüsseln',
            'alternativereverseproxies/index',
          ],
        },
        {
          type: 'category',
          label: 'Erste Schritte',
          items: [
            'Admin/erste-einstellungen-im-adminpanel-nach-der-installation/index',
            'Admin/backupdeinesserverserstellen/index',
            'Admin/berechtigungsgruppenanlegen/index',
          ],
        },
      ],
    },

    // Stammdaten
    {
      type: 'category',
      label: 'Stammdaten',
      collapsed: true,
      items: [
        'eineorganisationanlegen/index',
        'einenstandortanlegen/index',
        'gruppenanlegen/index',
        'rollenanlegen/index',
        'qualifikationenanlegen/index',
        'mitgliederanlegen/index',
        'benutzeranlegen/index',
        'notfallkontakteintragen/index',
      ],
    },

    // Alarmierung
    {
      type: 'category',
      label: 'Alarmierung',
      collapsed: true,
      items: [
        'Übersichten/uebersichtalarmierungen/index',
        {
          type: 'category',
          label: 'Einrichtung',
          items: [
            'schleifenanlegen/index',
            'Alarmierung/alarmierungsprofileanlegen/index',
            'Alarmierung/alarmdatenmatrixeinstellen/index',
            'Alarmierung/alarmwegematrixeinstellen/index',
            'endgerteaktivieren/index',
          ],
        },
        {
          type: 'category',
          label: 'Alarmquellen',
          items: [
            'katsyscloudconnector/index',
            'Alarmierung/alarmierungmitbosmon/index',
            'anbindungvonbosmon/index',
            'Alarmierung/manuellealarmierungauslsen/index',
          ],
        },
        {
          type: 'category',
          label: 'Probealarme',
          items: [
            'Alarmierung/zeitgesteuerteprobealarmeanlegen/index',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'Alarmierung/eserfolgtkeinealarmierung/index',
          ],
        },
      ],
    },

    // Inventar
    {
      type: 'category',
      label: 'Inventar',
      collapsed: true,
      items: [
        'aprtsanlegen/index',
        'hydranteneintragen/index',
      ],
    },

    // Termine
    {
      type: 'category',
      label: 'Termine',
      collapsed: true,
      items: [
        'Termine/terminkategorienanlegen/index',
        'Termine/terminanlegen/index',
      ],
    },

    // Wallboards
    {
      type: 'category',
      label: 'Wallboards',
      collapsed: true,
      items: [
        'Übersichten/uebersichtwallboard/index',
        'Wallboard/wallboards-einfhrung/index',
        'Wallboard/wallboard-konfiguration/index',
        'Wallboard/Wallboard-Builder/index',
        'installationaufbasisraspberrypizerow2/index',
        {
          type: 'category',
          label: 'Bereitschaftsmodus Widgets',
          items: [
            'allgemeineeinstellungen/index',
            'beispielbereitschaftsmodus/index',
            'logo/index',
            'uhrzeitdatum/index',
            'aktuelleswetter/index',
            'covid-19status/index',
            'kalender-liste/index',
            'anstehendewartungen/index',
            'einsatzmittel-status/index',
            'einsatzmittel-statuserweitert/index',
            'lauftextmarquee/index',
          ],
        },
        {
          type: 'category',
          label: 'Alarmmodus Widgets',
          items: [
            'Alarmierung/beispielconfigalarmierungsmodus/index',
            'Alarmierung/alarmierungsstichwort/index',
            'adresse/index',
            'mitteilungdisponent/index',
            'karteeinsatzstelle/index',
            'routezureinsatzstellealskarte/index',
            'Alarmierung/zeitseitalarmierungalslaufendeuhr/index',
            'Alarmierung/alarmierteeinsatzmittel/index',
            'Alarmierung/rckmeldungenzuralarmierung/index',
          ],
        },
        'installationseinesbewegungsmelders/index',
      ],
    },

    // Spaceport
    {
      type: 'category',
      label: 'Spaceport Client',
      collapsed: true,
      items: [
        'Übersichten/uebersichtspaceport/index',
        'spaceportclient/index',
        'spaceportclientanlegen/index',
      ],
    },

    // Administration
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'moduladministration/index',
        'Übersichten/uebersicht-dashboard/index',
        'grundeinstellungen/index',
        {
          type: 'category',
          label: 'Plugins',
          items: [
            'plugins/index',
            'externeipadresse/index',
            'webhooksaktivieren/index',
          ],
        },
        {
          type: 'category',
          label: 'System',
          items: [
            'Seiten/protokollelogviewer/index',
            'Seiten/aufgaben-verwaltung/index',
            'Seiten/broadcast-nachricht/index',
          ],
        },
        {
          type: 'category',
          label: 'Updates & Wartung',
          items: [
            'updatedesalarmiatorservers/index',
            'Docker/vonnativerinstallationzudockercomposemigrieren/index',
          ],
        },
      ],
    },

    // Troubleshooting
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      items: [
        'Docker/dockertroubleshooting/index',
        'externeipadressewirdnichtaktualisiert/index',
        'wasmacheichwennichbereitsserviceswebserveraufmeinemhosthabe/index',
      ],
    },

    // Referenz
    {
      type: 'category',
      label: 'Referenz',
      collapsed: true,
      items: [
        'module/index',
        'Übersichten/uebersichtparser/index',
        'fcmtokens/index',
      ],
    },
  ],
};

export default sidebars;