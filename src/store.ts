import { createStore, routingPluginFactory, RootState, RoutingState } from '@captaincodeman/rdx-model'
import { devtools, persist } from '@captaincodeman/rdx'
import { routeMatcher } from './routes'
import * as models from './models'

const routingPlugin = routingPluginFactory(routeMatcher)

let store = createStore({ models, plugins: [routingPlugin] })

// These could be commented out if the extra functionality
// wasn't required, to create a production bundle without
// the redux devtools enabled for instance. This could be
// controlled using rollup with the replace plugin, e.g.
//
// if (process.env.NODE_ENV !== 'production') {
//   store = devtools(store)
// }
//
// the bundle size becomes 7.39 Kb minified, 2.81 Kb gzipped

store = persist(store)
store = devtools(store)

export { store }

export type Store = typeof store
export type State = RootState<typeof models> & { routing: RoutingState }