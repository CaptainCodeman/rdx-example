import createMatcher from '@captaincodeman/router'
import { routingPluginFactory } from '@captaincodeman/rdx-model'
import * as models from './models'

// NOTE: the /:app prefix of the routes is to handle github pages being in a subfolder
//       so is needed for this example, but is *not* required for typical applications

const routes = {
  '/:app/':                  'home-view',
  '/:app/blog':              'blog-view',
  '/:app/todos':             'todos-view',
  '/:app/todos/:id':         'todo-view',
  '/:app/article/:article':  'article-view',
  '/:app/counter':           'counter-view',
  '/:app/*':                 'not-found',
}

const matcher = createMatcher(routes)
const routing = routingPluginFactory(matcher)

export const config = { models, plugins: { routing } }
