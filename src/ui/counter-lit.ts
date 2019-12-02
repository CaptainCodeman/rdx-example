import { LitElement, customElement, property, html } from 'lit-element'
import { connect } from '@captaincodeman/rdx'
import { store, State } from '../store'

@customElement("counter-view")
export class CounterElement extends connect(store, LitElement) {
  @property({ type: Number }) count = 0

  mapState(state: State) {
    return {
      count: state.counter
    }
  }

  render() {
    return html`
      <button @click=${store.models.counter.dec}>-</button>
      <span>${this.count}</span>
      <button @click=${store.models.counter.inc}>+</button>`
  }
}