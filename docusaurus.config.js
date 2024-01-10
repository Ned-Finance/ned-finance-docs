// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ned Finance Docs",
  tagline: "All things finance, for DeFi",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.ned.finance",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/og.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "Ned Finance Logo",
          src: "img/logo.svg",
        },
        items: [],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/Z376CvhUqY",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/NedFinance",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                href: "http://ned.finance",
              },
              {
                label: "Blog",
                href: "http://blog.ned.finance",
              },
              {
                label: "GitHub",
                href: "https://github.com/Ned-Finance",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ned Finance.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      enableUpdateTime: true,
    }),
};

module.exports = config;
