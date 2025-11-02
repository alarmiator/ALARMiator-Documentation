import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ALARMiator Dokumentation',
  tagline: 'Zusatzalarmierung und Organisationsverwaltung',
  favicon: 'img/favicon.png',

  future: { v4: true },
  url: 'https://alarmiator.github.io',
  baseUrl: '/ALARMiator-Documentation/',
  organizationName: 'alarmiator',
  projectName: 'ALARMiator-Documentation',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: { defaultLocale: 'de', locales: ['de'] },


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/alarmiator/ALARMiator-Documentation/edit/main/',
          sidebarCollapsible: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Local search
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      { 
        indexDocs: true, 
        indexBlog: false, 
        indexPages: false, 
        language: 'de',
        lunr: {
          tokenizerSeparator: /[\s\-]+/
        }
      },
    ],
  ],

  themeConfig: {
    image: 'img/alarmiator-social-card.png',
    metadata: [
      { name: 'keywords', content: 'ALARMiator, Feuerwehr, BOS, Katastrophenschutz, Mobile Zusatzalarmierung, Einsatzverwaltung, Mitgliederverwaltung, Organisationsverwaltung' },
      { name: 'description', content: 'Offizielle Dokumentation für ALARMiator - Die kostenlose ehrenamtlich entwickelte Lösung für Zusatzalarmierung und Organisationsverwaltung von Rettungsorganisationen' },
      { property: 'og:title', content: 'ALARMiator Dokumentation' },
      { property: 'og:description', content: 'Komplette Anleitung für Installation, Konfiguration und Betrieb von ALARMiator Server und Mobile Apps' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'de_DE' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'ALARMiator - Dokumentation' },
      { name: 'twitter:description', content: 'Open-Source Alarmierung für BOS-Einheiten' },
    ],
    colorMode: { 
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
      disableSwitch: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'ALARMiator',
      logo: { 
        alt: 'ALARMiator Logo', 
        src: 'img/alarmiator-logo.webp',
        href: '/ALARMiator-Documentation/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'serverSidebar',
          position: 'left',
          label: 'Server Doku',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mobileSidebar',
          position: 'left',
          label: 'Mobile App Doku',
        },
        {
          href: 'https://community.alarmiator.de',
          label: '💬 Community',
          position: 'right',
        },
        {
          href: 'https://github.com/alarmiator/ALARMiator-Documentation',
          label: "Doku Github Repo",
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub Repository',
        },     
      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://community.alarmiator.de',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/alarmiator',
            },
          ],
        },
        {
          title: 'Ressourcen',
          items: [
            {
              label: 'PROBIERiator (Demo)',
              href: 'https://probiere.alarmiator.de',
            },
            {
              label: 'Projekt Website',
              href: 'https://alarmiator.de',
            },
            {
              label: 'Downloads',
              href: 'https://alarmiator.de/download',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ALARMiator. Mit ❤️ von Ehrenamtlichen für Ehrenamtliche entwickelt.`,
    },
    prism: { 
      theme: prismThemes.github, 
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  },
};

export default config;