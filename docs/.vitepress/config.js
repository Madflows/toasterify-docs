export default {
  title: "Toasterify",
  description: "Just playing around.",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Toasterify",

    search: true,
    searchMaxSuggestions: 10,

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Our team", link: "/team" },
      { text: "Configs", link: "/configs" },
      {
        text: "Changelog",
        items: [
          { text: "v0.0.1", link: "/release/v1" },
          { text: "v0.0.2", link: "/release/v2" },
          { text: "v0.0.3", link: "/release/v3" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Madflows" },
      { icon: "twitter", link: "https://twitter.com/madflows_" },
      { icon: "discord", link: "https://madflows.dev/guestbook" },
    ],

    sidebar: [
      {
        text: "Section A",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section B",
        collapsible: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section C",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
