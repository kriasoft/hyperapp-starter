import fs from 'fs'
import path from 'path'
import { h } from 'hyperapp'
import * as app from './app'
import assets from './assets.json'
import manifest from '../public/site.webmanifest'
import icon from '../public/icon.png'
import favicon from '../public/favicon.ico'

const script = assets['app.js']
const stylesPath = path.resolve(__dirname, 'public', assets['app.css'])
const styles = fs.readFileSync(stylesPath, 'utf8').replace(/\n\/*[\s\S]+$/, '')
const Fragment = ''

export const { state } = app

export const { actions } = app

export const view = (state, actions) => (
  <Fragment>
    <Fragment innerHTML="<!doctype html>" />
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Hyperapp</title>
        <meta name="description" content="A modern web application" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <meta name="theme-color" content="#00b2ff" />
        <link rel="manifest" href={manifest} />
        <link rel="apple-touch-icon" href={icon} />
        <link rel="shortcut icon" href={favicon} />
        {script && <script src={script} defer />}
        {styles && <style innerHTML={styles} />}
      </head>
      <body>
        <div id="app">{app.view(state, actions)}</div>
      </body>
    </html>
  </Fragment>
)
