// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nawab Ahmad Reshi',
  tagline: 'Information Architect | Complex Systems & Infrastructure',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ✅ GitHub Pages settings (IMPORTANT)
  url: 'https://nawabahmadreshi.github.io',
  baseUrl: '/my-docs/',
  trailingSlash: false,


  // ✅ Your GitHub repo
  organizationName: 'nawabahmadreshi',
  projectName: 'my-docs',
  deploymentBranch: 'gh-pages',

  // ✅ Don’t fail deploys for minor link issues (you can switch back later)
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/nawabahmadreshi/my-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/nawabahmadreshi/my-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Nawab Ahmad Reshi',
      logo: {
        alt: 'Nawab Ahmad Reshi Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/nawabahmadreshi/my-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
            {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
            {label: 'X', href: 'https://x.com/docusaurus'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/nawabahmadreshi/my-docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nawab Ahmad Reshi. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
