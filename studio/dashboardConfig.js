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
                  buildHookId: '6069b99dbdb3c6cbda0487cf',
                  title: 'Sanity Studio',
                  name: 'dwkns-11-ty-sanity-studio',
                  apiId: '6f4d3a37-1056-480e-81cd-aedc1a99609a'
                },
                {
                  buildHookId: '6069b99d8b93a400bd662e4b',
                  title: 'Blog Website',
                  name: 'dwkns-11-ty-sanity',
                  apiId: 'eb6f7e4d-b433-4b55-9451-36d77e9f00d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dwkns/dwkns-11ty-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dwkns-11-ty-sanity.netlify.app', category: 'apps'}
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
