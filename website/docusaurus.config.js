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

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      image: 'img/banners/000-roadmap.png',

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
            sidebarId: 'concepts',
            position: 'left',
            label: '🧰 | Concepts',
          },

          {
            type: 'docSidebar',
            sidebarId: 'tabular',
            position: 'left',
            label: '📒 | Tabular',
          },

          {
            type: 'docSidebar',
            sidebarId: 'text',
            position: 'left',
            label: '📕 | Text',
          },
          {
            type: 'docSidebar',
            sidebarId: 'vision',
            position: 'left',
            label: '📗 | Vision',
          },
          {to: '/blog', label: 'Blog', position: 'right'},

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
