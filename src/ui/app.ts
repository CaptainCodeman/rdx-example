import { connect } from '@captaincodeman/rdx'
import { RoutingState } from '@captaincodeman/rdx-model'
import { store, State } from '../store'

class AppShellElement extends connect(store, HTMLElement) {
  private _page: string = ''

  set route(val: RoutingState) {
    if (val.page !== this._page) {
      const el = document.createElement(val.page)
      this.textContent = ''
      this.appendChild(el)
      this._page = val.page
    }
  }

  mapState(state: State) {
    return {
      route: state.routing
    }
  }
}

customElements.define('app-shell', AppShellElement)