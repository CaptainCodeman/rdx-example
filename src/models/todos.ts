import { createModel, RoutingState } from '@captaincodeman/rdx-model';

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

  effects: {
    async select(payload, state) {
      if (!state.todos.entities[state.todos.selected]) {
        this.request()
        const resp = await fetch(`${endpoint}todos/${payload}`)
        const json = await resp.json()
        this.received(json)
      }
    },

    async load(_, state) {
      if (!state.todos.ids.length) {
        this.request()
        const resp = await fetch(`${endpoint}todos`)
        const json = await resp.json()
        this.receivedList(json)
      }
    },

    'routing/change': async function(payload: RoutingState) {
      switch (payload.page) {
        case 'todos-view':
          this.load()
          break
        case 'todo-view':
          this.select(parseInt(payload.params.id))
          break
      }
    }
  }
})
