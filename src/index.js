import { app } from 'hyperapp'
import { state, actions, view } from './app'

window.app = app(state, actions, view, document.getElementById('app'))

// Enable hot module replacement
// https://webpack.js.org/concepts/hot-module-replacement/
if (module.hot) {
  let prevState = state
  module.hot.accept('./app', () => {
    const prevApp = window.app
    const currState = prevApp.getState()
    prevApp.destroy()
    const prevContainer = document.getElementById('app')
    const nextContainer = prevContainer.cloneNode(false)
    prevContainer.parentNode.appendChild(nextContainer)
    prevContainer.parentNode.removeChild(prevContainer)
    const nextState = JSON.stringify(prevState) === JSON.stringify(state) ? currState : state
    window.app = app(nextState, actions, view, nextContainer)
    prevState = state
  })
}
