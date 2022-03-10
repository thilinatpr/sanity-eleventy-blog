export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6229d055d9a4977abcb4a451',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7zyupa34',
                  apiId: '9e8e06bc-c600-4d1a-89c2-0abd683a8430'
                },
                {
                  buildHookId: '6229d05542f988715719f6e2',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-xbxum19x',
                  apiId: '12f0db3e-34ba-4ae3-9598-696d858a4ece'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thilinatpr/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-xbxum19x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
