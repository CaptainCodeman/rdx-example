import { createModel, RoutingState } from '@captaincodeman/rdx-model';
import { State, Dispatch } from '../store';

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface TodosState {
  entities: { [key: number]: Todo }
  ids: number[]
  selected: number
  loading: boolean
}

const endpoint = 'https://jsonplaceholder.typicode.com/'

export default createModel({
  state: <TodosState>{
    entities: {},
    ids: [],
    selected: 0,
    loading: false,
  },
  reducers: {
    select(state, payload: number) {
      return { ...state, selected: payload }
    },

    request(state) {
      return { ...state, loading: true };
    },

    received(state, payload: Todo) {
      return { ...state,
        entities: { ...state.entities,
          [payload.id]: payload,
        },
        loading: false,
      };
    },

    receivedList(state, payload: Todo[]) {
      return { ...state,
        entities: payload.reduce((map, todo) => {
          map[todo.id] = todo
          return map
        }, {}),
        ids: payload.map(todo => todo.id),
        loading: false,
      };
    },
  },

  effects: (dispatch: Dispatch, getState) => ({
    async select(payload: number) {
      const state: State = getState()
      if (!state.todos.entities[state.todos.selected]) {
        // 'this' should be the current models reducer methods
        // dispatch should be augmented with other models methods
        // dispatch.todos.request()
        dispatch.todos.request()
        const resp = await fetch(`${endpoint}todos/${payload}`)
        const json = await resp.json()
        dispatch.todos.received(json)
      }
    },

    async load() {
      const state: State = getState()
      if (!state.todos.ids.length) {
        dispatch.todos.request()
        const resp = await fetch(`${endpoint}todos`)
        const json = await resp.json()
        dispatch.todos.receivedList(json)
      }
    },

    'routing/change': async function(payload: RoutingState) {
      switch (payload.page) {
        case 'todos-view':
          dispatch.todos.load()
          break
        case 'todo-view':
          dispatch.todos.select(parseInt(payload.params.id))
          break
      }
    }
  })
})
