import { connect } from '@captaincodeman/rdx'
import { store, State } from "../store"

function createView(name: string, content: string) {
  customElements.define(name, class extends HTMLElement {
    connectedCallback() {
      this.textContent = content
    }
  })
}

createView('home-view', 'Home Page')
createView('blog-view', 'Blog Page')
createView('not-found', '404: Not Found')

class ArticleViewElement extends connect(store, HTMLElement) {
  set article(val: string) {
    if (this.el) {
      this.el.textContent = `${val}`
    }
  }

  mapState(state: State) {
    return {
      article: state.routing.params.article
    }
  }

  constructor() {
    super()
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `Article <span id="article">${this.article}</span>`

    this.el = <HTMLSpanElement>root.querySelector('#article')
  }

  private el?: HTMLSpanElement
}

customElements.define('article-view', ArticleViewElement)
