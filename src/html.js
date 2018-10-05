import { h } from 'hyperapp'
import * as app from './app'
import assets from './assets.json'
import manifest from '../public/site.webmanifest'
import icon from '../public/icon.png'

const styles = assets['app.css']
const script = assets['app.js']
const Fragment = ''

export const { state } = app

export const { actions } = app

export const view = (state, actions) => (
  <Fragment>
    <Fragment innerHTML="<!doctype html>" />
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Hyperapp</title>
        <meta name="description" content="A modern web application" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <meta name="theme-color" content="#00b2ff" />
        <link rel="manifest" href={manifest} />
        <link rel="apple-touch-icon" href={icon} />
        {styles && <link rel="stylesheet" href={styles} />}
        {script && <script src={script} defer />}
      </head>
      <body>
        <div id="app">{app.view(state, actions)}</div>
      </body>
    </html>
  </Fragment>
)
