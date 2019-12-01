import createMatcher from '@captaincodeman/router'

const routes = {
  '/':                  'home-view',
  '/blog':              'blog-view',
  '/todos':             'todos-view',
  '/todos/:id':         'todo-view',
  '/article/:article':  'article-view',
  '/counter':           'counter-view',
  '/*':                 'not-found',
}

export const routeMatcher = createMatcher(routes)