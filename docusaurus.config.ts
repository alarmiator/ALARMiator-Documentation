import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ALARMiator-Dokumentation',
  tagline: 'Zusatzalarmierung und Organisationsverwaltung',
  favicon: 'img/alarmiator-logo.webp',

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

  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/alarmiator/ALARMiator-Documentation/edit/main/',
          sidebarCollapsible: true,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Local search
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      { indexDocs: true, indexBlog: false, indexPages: false, language: 'de' },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'ALARMiator',
      logo: { alt: 'ALARMiator Logo', src: 'img/alarmiator-logo.webp' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'serverSidebar', // default docs sidebar
          docPluginId: 'default',      // default docs plugin
          position: 'left',
          label: 'Server Doku',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mobileSidebar',
          docPluginId: 'default',          // mobile plugin ID
          position: 'left',
          label: 'Mobile App Doku',
        },
       {
          href: 'https://github.com/alarmiator/ALARMiator-Documentation',
          label: 'GitHub',
          position: 'right',
        },     
       ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
             {
          label: 'Server Doku',
          to: '/docs/intro', 
        },
        {
          label: 'Mobile App Doku',
          to: '/docs/docs-mobile/intro',
        },
          ],
        },
        { title: 'More', items: [{ label: 'GitHub Repo', href: 'https://github.com/alarmiator/ALARMiator-Documentation' }] },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ALARMiator. Built with Docusaurus.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};

export default config;
