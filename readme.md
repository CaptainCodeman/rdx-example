# rdx-example

An example app to test and demonstrate "rdx" - like Redux, but smaller

This app creates a **3.1 Kb** JS bundle for an SPA including:

* Redux-like store (actions + reducers + middleware)
* Redux devtools integration (load page with [chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en))
* Utils to reduce store boilerplate
* Persistence / hydration middleware (localStorage)
* Async 'thunk' middleware
* Client-side routing with params
* UI components bound to state store

See [live demo](https://captaincodeman.github.io/rdx-example/)

This is build using [rdx](https://github.com/CaptainCodeman/rdx), a tiny redux-like state store, and [rdx-model](https://github.com/CaptainCodeman/rdx-model) which helps define store models and also adds async effect handling and routing using a [tiny router](https://github.com/CaptainCodeman/js-router)