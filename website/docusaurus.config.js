// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '#30DaysOf Responsible AI',
  tagline: 'From Core Principles To Applied Practices',
  url: 'https://30DaysOf.github.io',
  baseUrl: '/responsible-ai/',
  favicon: 'img/favicon.ico',
  //trailingSlash: false,

  // GitHub pages deployment config.
  organizationName: '30DaysOf', 
  projectName: 'responsible-ai',
  deploymentBranch: 'gh-pages',

  // Deployment validation
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          blogTitle: '#30DaysOf Responsible AI',
          blogDescription: 'Learn Core Principles of Responsible AI. Then explore tools and best practices to evaluate your responsible AI compliance for real-world applications.',
          blogSidebarCount:  30, // 'ALL',
          blogSidebarTitle: 'Recent Posts',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 7,
          showReadingTime: true,
          sortPosts: 'descending'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      navbar: {

        title: 'Responsible AI',

        logo: {
          alt: 'My Site Logo',
          src: 'img/landing/rai.jpeg',
        },

        style: 'primary',

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'basics',
            position: 'left',
            label: 'Basics',
          },

          {
            type: 'docSidebar',
            sidebarId: 'subset',
            position: 'left',
            label: 'Extras',
          },

          {to: '/blog', label: 'Blog', position: 'left'},

          {
            href: 'https://github.com/30DaysOf/responsible-ai',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: `RAI Toolbox`,
            to: "https://responsibleaitoolbox.ai/",
          },
          {
            label: `RAI Collection`,
            to: "https://aka.ms/rai-hub/collection",
          },
          {
            label: `RAI Developer Hub`,
            to: "https://aka.ms/rai-hub/website",
          },
          {
            label: `AI Developer Hub`,
            to: "https://learn.microsoft.com/ai/",
          },
          {
            label: 'Azure AI Discord',
            to: 'https://discord.gg/yrTeVQwpWm',
          },
          {
            label: `© ${new Date().getFullYear()} Nitya Narasimhan`,
            to: "https://github.com/nitya",
          },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
