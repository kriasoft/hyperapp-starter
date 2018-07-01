import { app, h } from 'hyperapp'
import { state, actions, view } from './app'

it('renders without crashing', (done) => {
  const container = document.createElement('div')
  const testView = () => <div oncreate={() => done()}>{view(state, actions)}</div>
  app(state, actions, testView, container)
})
