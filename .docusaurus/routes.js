import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gowthamk17/blog',
    component: ComponentCreator('/gowthamk17/blog', '7ad'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/archive',
    component: ComponentCreator('/gowthamk17/blog/archive', 'b3d'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/authors',
    component: ComponentCreator('/gowthamk17/blog/authors', 'fe6'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/gowthamk17/blog/authors/all-sebastien-lorber-articles', 'b9b'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/authors/yangshun',
    component: ComponentCreator('/gowthamk17/blog/authors/yangshun', 'f84'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/first-blog-post',
    component: ComponentCreator('/gowthamk17/blog/first-blog-post', 'd36'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/long-blog-post',
    component: ComponentCreator('/gowthamk17/blog/long-blog-post', '67c'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/mdx-blog-post',
    component: ComponentCreator('/gowthamk17/blog/mdx-blog-post', 'ac5'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/tags',
    component: ComponentCreator('/gowthamk17/blog/tags', 'fbf'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/tags/docusaurus',
    component: ComponentCreator('/gowthamk17/blog/tags/docusaurus', 'd4c'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/tags/facebook',
    component: ComponentCreator('/gowthamk17/blog/tags/facebook', 'c4a'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/tags/hello',
    component: ComponentCreator('/gowthamk17/blog/tags/hello', '875'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/tags/hola',
    component: ComponentCreator('/gowthamk17/blog/tags/hola', '4e6'),
    exact: true
  },
  {
    path: '/gowthamk17/blog/welcome',
    component: ComponentCreator('/gowthamk17/blog/welcome', 'c24'),
    exact: true
  },
  {
    path: '/gowthamk17/markdown-page',
    component: ComponentCreator('/gowthamk17/markdown-page', '221'),
    exact: true
  },
  {
    path: '/gowthamk17/docs',
    component: ComponentCreator('/gowthamk17/docs', 'cdb'),
    routes: [
      {
        path: '/gowthamk17/docs',
        component: ComponentCreator('/gowthamk17/docs', 'e50'),
        routes: [
          {
            path: '/gowthamk17/docs',
            component: ComponentCreator('/gowthamk17/docs', 'b86'),
            routes: [
              {
                path: '/gowthamk17/docs/category/tutorial---basics',
                component: ComponentCreator('/gowthamk17/docs/category/tutorial---basics', 'b62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gowthamk17/docs/category/tutorial---extras',
                component: ComponentCreator('/gowthamk17/docs/category/tutorial---extras', 'aba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gowthamk17/docs/intro',
                component: ComponentCreator('/gowthamk17/docs/intro', 'f42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gowthamk17/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/gowthamk17/docs/tutorial-basics/congratulations', 'ed2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gowthamk17/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/gowthamk17/docs/tutorial-basics/create-a-blog-post', '6af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gowthamk17/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/gowthamk17/docs/tutorial-basics/create-a-document', '07c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gowthamk17/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/gowthamk17/docs/tutorial-basics/create-a-page', '9b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gowthamk17/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/gowthamk17/docs/tutorial-basics/deploy-your-site', '004'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gowthamk17/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/gowthamk17/docs/tutorial-basics/markdown-features', '92c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gowthamk17/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/gowthamk17/docs/tutorial-extras/manage-docs-versions', '71d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gowthamk17/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/gowthamk17/docs/tutorial-extras/translate-your-site', '4c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/gowthamk17/',
    component: ComponentCreator('/gowthamk17/', '6fa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
