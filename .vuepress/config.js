module.exports = {
  plugins: {
    'sitemap': {
      hostname: 'https://steemsdk.com'
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/google-analytics': { ga: 'UA-154928646-2' },
    '@vuepress/back-to-top': {}
  },

  title: 'Steem SDK',
  description: 'Steem SDK is a collection of guides on Steem libraries and specifications recommended practices and standards.',
  head: [
    ['link', { rel: 'icon', href: '/img/steem sdk logo.png' }],
    ['link', { rel: 'canonical', href: 'https://steemsdk.com' }],
  ],

  host: 'localhost',
  themeConfig: {
    repo: 'steem-sdk/sdk',
    repoLabel: 'Contribute!',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',

    nav: [

      { text: 'Guide', link: '/guide/' },

      {
        text: 'Standards',
        items: [
          { 
            text: 'Content',
            items: [
              {
                text: 'Formatting', link: '/standards/content/#formatting'
              },
              {
                text: 'Quality', link: '/standards/content/#quality'
              },
              {
                text: 'DCMA', link: '/standards/content/#dcma'
              },
            ],
          },
          /*
          { 
            text: 'Culture',
            items: [
              {
                text: '#IntroduceYourself', link: '/standards/culture/#introduceyourself'
              },
              {
                text: 'Curation', link: '/standards/culture/#curation'
              },
              {
                text: 'Downvoting', link: '/standards/culture/#downvoting'
              },
            ],
          },
          { 
            text: 'Dapps',
            items: [
              {
                text: 'DCMA', link: '/standards/dapps/#dcma'
              },
              {
                text: 'GDPR', link: '/standards/dapps/#dcma' // https://steemstudios.com
              },
              {
                text: 'Canonicals', link: '/standards/dapps/#dcma'
              },
              {
                text: 'Bots', link: '/standards/dapps/#dcma'
              },
              {
                text: 'Rewards', link: '/standards/dapps/#dcma'
              },
              {
                text: 'Moderation', link: '/standards/dapps/#dcma'
              },
              {
                text: 'Witnessing', link: '/standards/dapps/#dcma'
              },
              {
                text: 'SPS Proposal', link: '/standards/dapps/#dcma'
              },
              {
                text: 'SMT issuance', link: '/standards/dapps/#dcma'
              }
            ],
          },
          */
        ]
      },

      {
        text: 'Libraries',
        items: [
          { text: 'Javascript', link: '/libraries/js/' },
          /*
          { text: 'Python', link: '/libraries/python/' },
          { text: 'PHP', link: '/libraries/php/' },
          { text: 'Golang', link: '/libraries/golang/' },
          */
        ]
      },

      {
        text: 'Resources',
        items: [
          { 
            text: 'Developers',
            items: [
              {
                text: 'API Specifications', link: '/resources/dev/#api'
              },
              /*
              {
                text: 'Steem Proposal System', link: '/resources/dev/#sps'
              },
              {
                text: 'Smart Media Tokens', link: '/resources/dev/#smt'
              },
              */
            ],
          },
          /*
          { 
            text: 'Dapps',
            items: [
              {
                text: 'Services', link: '/resources/dapps/#services' // https://steemstudios.com
              },
              {
                text: 'Content', link: '/resources/dapps/#content'
              },
              {
                text: 'Legal', link: '/resources/dapps/#legal'
              }
            ],
          },
          { 
            text: 'Witnesses',
            items: [
              {
                text: 'Node Setup', link: '/resources/witnesses/#setup/'
              },
              {
                text: 'Hardfork', link: '/resources/witnesses/#hardfork'
              },
            ],
          }
          */
        ]
      },

      { text: 'Business solutions', link: 'https://steemstudios.com/start' },

      {
        text: 'More',
        items: [
        /*
          { 
            text: 'Misc.',
            items: [
              {
                text: 'Glossary', link: '/glossary/'
              }
            ],
          },
          */
          { 
            text: 'Links',
            items: [
              {
                text: 'Slack', link: 'https://steemstudios.com/slack'
              },
              {
                text: 'Github', link: 'https://github.com/steem-sdk'
              },
              {
                text: 'Steem Institute', link: 'https://steem.institute'
              },
              {
                text: 'Steem Studios', link: 'https://steeminc.com'
              },
              {
                text: 'Community', link: 'https://steemian.net'
              }
            ],
          },
        ]
      },
    ],

    sidebar: 'auto',

    lastUpdated: 'Last Updated', // string | boolean
    smoothScroll: true,
  },
}