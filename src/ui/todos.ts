import { connect } from '@captaincodeman/rdx'
import { store, State } from '../store'
import { Todo } from '../models/todos'

class TodoListElement extends connect(store, HTMLElement) {
  set todos(val: Todo[]) {
    if (this.el && val.length) {
      const frag = document.createDocumentFragment()
      val.forEach(todo => {
        const li = document.createElement('li')
        li.innerHTML = `<a href="/todos/${todo.id}" ${todo.completed ? 'completed' : ''}>${todo.title}</a>`
        frag.appendChild(li)
      })
      this.el.textContent = ''
      this.el.appendChild(frag)
    }
  }

  set loading(val: boolean) {
    if (this.el && val) {
      this.el.textContent = ''
      const li = document.createElement('li')
      li.textContent = 'Loading ...'
      this.el!.appendChild(li)
    }
  }

  mapState(state: State) {
    return {
      loading: state.todos.loading,
      todos: state.todos.ids.map(id => state.todos.entities[id]),
    }
  }

  constructor() {
    super()
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = /* html */`
    <style>
      a{
        text-decoration: none;
      }
      a[completed] {
        text-decoration:line-through;
      }
    </style>
    <ul id="todos"></ul>`

    this.el = <HTMLUListElement>root.querySelector('#todos')
  }

  private el?: HTMLUListElement
}

customElements.define('todos-view', TodoListElement)

class TotoItemElement extends connect(store, HTMLElement) {
  set todo(val: Todo) {
    if (this.el && val) {
      this.el.textContent = JSON.stringify(val, null, '  ')
    }
  }

  set loading(val: boolean) {
    if (this.el && val) {
      this.el.textContent = 'Loading ...'
    }
  }

  mapState(state: State) {
    return {
      loading: state.todos.loading,
      todo: state.todos.entities[state.todos.selected],
    }
  }

  constructor() {
    super()
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `<pre id="todo"></pre>`

    this.el = <HTMLPreElement>root.querySelector('#todo')
  }

  private el?: HTMLPreElement
}

customElements.define('todo-view', TotoItemElement)