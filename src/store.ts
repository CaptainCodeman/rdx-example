import { createStore, routingPluginFactory, RootState, RoutingState } from '@captaincodeman/rdx-model'
import { devtools, persist } from '@captaincodeman/rdx'
import { routeMatcher } from './routes'
import * as models from './models'

const routingPlugin = routingPluginFactory(routeMatcher)

let store = createStore({ models, plugins: [routingPlugin] })

store = persist(store)
store = devtools(store)

export { store }

export type Store = typeof store
export type State = RootState<typeof models> & { routing: RoutingState }