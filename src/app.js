import { h } from 'hyperapp'
import logo from './logo.svg'
import './app.css'

export const state = {
  destroyed: false,
  count: 0,
}

export const actions = {
  getState: () => (state) => state,
  destroy: () => ({ destroyed: true }),
  up: (value) => (state) => ({ count: state.count + value }),
  down: (value) => (state) => ({ count: state.count - value }),
}

export const view = (state, actions) => {
  if (state.destroyed) return null
  return (
    <div class="app">
      <header class="app-header">
        <h1>
          <a href="https://hyperapp.js.org/" target="_blank" rel="noopener noreferrer">
            <img class="app-logo" src={logo} alt="Hyperapp" />
          </a>
        </h1>
        <p>
          Edit <code>src/app.js</code> and save to reload.
        </p>
      </header>
      <main class="app-content">
        <button type="button" class="app-button" onclick={() => actions.down(1)}>
          -
        </button>
        <span class="app-count">{state.count}</span>
        <button type="button" class="app-button" onclick={() => actions.up(1)}>
          +
        </button>
      </main>
    </div>
  )
}
