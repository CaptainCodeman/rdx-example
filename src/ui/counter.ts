import { connect } from '@captaincodeman/rdx'
import { store, State } from '../store'

class CounterElement extends connect(store, HTMLElement) {
  set count(val: number) {
    if (this.el) {
      this.el.textContent = `${val}`
    }
  }

  mapState(state: State) {
    return {
      count: state.counter
    }
  }

  constructor() {
    super()
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = /* html */`
      <button id="dec">-</button>
      <span id="count">${this.count}</span>
      <button id="inc">+</button>`

    this.el = <HTMLSpanElement>root.querySelector('#count')
    const dec = <HTMLButtonElement>root.querySelector('#dec')
    const inc = <HTMLButtonElement>root.querySelector('#inc')
    dec.addEventListener('click', store.models.counter.dec)
    inc.addEventListener('click', store.models.counter.inc)
  }

  private el?: HTMLSpanElement
}

customElements.define('counter-view', CounterElement)