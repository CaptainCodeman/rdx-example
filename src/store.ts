import { createStore, routingPluginFactory, ModelsState, ModelsDispatch, RoutingState, RoutingDispatch } from '@captaincodeman/rdx-model'
import { devtools, persist} from '@captaincodeman/rdx'
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
// the bundle size becomes 7.22 Kb minified, 2.8 Kb gzipped

store = devtools(store)
store = persist(store)

export { store }

export type Store = typeof store;

export interface State extends ModelsState<typeof models> { routing: RoutingState }
export interface Dispatch extends ModelsDispatch<typeof models> { routing: RoutingDispatch }

