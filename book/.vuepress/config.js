module.exports = {

  title: 'tobeprint3D',
  description: 'Learn how to 3D print for money',
  base: '/',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css' }]
  ],
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
      md.use(require('markdown-it-ins'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-abbr'))
    }
  },
  themeConfig: {
    logo: 'https://i.ibb.co/0n64ZDR/tobeprint3-D-LOGO.png',
    nav: [
      { icon: 'fas fa-book', iconClass: 'has-text-danger', text: 'The Book', link: '/introduction/' },
      { text: 'Interesting', items: [
        { text: 'Community', link: 'https://www.tobeprint3d.com' },
      ] }
    ],
    displayAllHeaders: true,
    serviceWorker: true,
    sidebar: [
      {
        title: 'Introduction',
        icon: 'fas fa-star',
        iconClass: 'has-text-warning',
        collapsable: true,
        children: [
          '/introduction/',
          '/introduction/2020-08-22-introduction-why-what-who.md'
        ]
      },
      {
        title: 'Chapter 1 - Empowering anyone',
        icon: 'fas fa-rocket',
        collapsable: true,
        children: [
          '/chapter-01/2020-08-22-getting-a-printer.md',
          '/chapter-01/2020-08-23-making-a-printer.md',
          '/chapter-01/2020-08-24-getting-the-files.md',
          '/chapter-01/202^0-08-25-getting-the-filaments.md',
        ]
      },
      {
        title: 'Chapter 2 - Skills for money',
        icon: 'fas fa-rocket',
        collapsable: true,
        children: [
          '/chapter-02/2020-08-22-getting-an-idea.md',
          '/chapter-02/2020-08-23-making-a-printer.md', 
        ]
      }
    ],
    displayAllHeaders: false,
    repo: 'tobeprint3D/tobeprint3d.com-book',
    repoLabel: 'Write with us!',
    icon: 'fab fa-lg fa-github',
    repoIcon: 'fab fa-lg fa-github',
    docsRepo: 'tobeprint3D/tobeprint3d.com-book',
    docsDir: 'book',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Write with us!',
    lastUpdated: 'Last Updated',
  },
}
