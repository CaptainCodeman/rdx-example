# rdx-example

An example app to test and demonstrate "rdx" - like Redux, but smaller

This app creates a **3.1Kb** JS bundle for an SPA including:

* Redux-like store (actions + reducers + middleware)
* Redux devtools integration (load page with [chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en))
* Utils to reduce store boilerplate
* Persistence / hydration middleware (localStorage)
* Async 'thunk' middleware
* Client-side routing with params
* UI components bound to state store

See [live demo](https://captaincodeman.github.io/rdx-example/)

NOTE: `rdx` and `rdx-model` packages that this app depends on are published
on npm but don't yet have the correct Typescript typings. The aim is to have
everything type-safe.

The micro-router used is available at [github.com/CaptainCodeman/js-router](https://github.com/CaptainCodeman/js-router)