// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'آیات الولایة',
  tagline: 'در فضائل امیرالمومنین علی علیه السلام',
  url: 'https://alishir.github.io/',
  baseUrl: '/ayat/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'alishir', // Usually your GitHub org/user name.
  projectName: 'ayat', // Usually your repo name.
  
  i18n: {
	defaultLocale: 'fa',
	locales: ['fa', 'ar', 'en'],
	localeConfigs: {
	  en: {
		label: 'English',
		direction: 'ltr',
		htmlLang: 'en-US',
	  },
	  fa: {
		label: 'فارسی',
		direction: 'rtl',
		htmlLang: 'fa-IR',
	  },
	},
  },
  
  presets: [
	[
	  'classic',
	  /** @type {import('@docusaurus/preset-classic').Options} */
	  ({
		docs: {
		  sidebarPath: require.resolve('./sidebars.js'),
		  // Please change this to your repo.
		  editUrl: 'https://github.com/alishir/ayat/edit/main/',
		},
		blog: {
		  showReadingTime: true,
		  // Please change this to your repo.
		  editUrl:
		  'https://github.com/alishir/ayat/edit/main/',
		},
		theme: {
		  customCss: require.resolve('./src/css/custom.css'),
		},
	  }),
	],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
	navbar: {
	  title: 'آیات الولایة',
	  logo: {
		alt: 'Amir Tile',
		src: 'img/amir.png',
	  },
	  items: [
		{
		  type: 'doc',
		  docId: '01/01',
		  position: 'left',
		  label: 'سوره‌ها',
		},
/**		{type: 'localeDropdown', position: 'right',}, */
/**		{to: '/blog', label: 'Blog', position: 'right'}, */
		{
		  href: 'https://github.com/alishir/ayat',
		  label: 'GitHub',
		  position: 'right',
		},
	  ],
	},
	footer: {
	  style: 'dark',
	  links: [ ],
/**	  copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`, */
	},
	prism: {
	  theme: lightCodeTheme,
	  darkTheme: darkCodeTheme,
	},
  }),
};

module.exports = config;
