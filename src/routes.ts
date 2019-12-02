import createMatcher from '@captaincodeman/router'

// NOTE: the /:app prefix of the routes is to handle github pages

const routes = {
  '/:app/':                  'home-view',
  '/:app/blog':              'blog-view',
  '/:app/todos':             'todos-view',
  '/:app/todos/:id':         'todo-view',
  '/:app/article/:article':  'article-view',
  '/:app/counter':           'counter-view',
  '/:app/*':                 'not-found',
}

export const routeMatcher = createMatcher(routes)