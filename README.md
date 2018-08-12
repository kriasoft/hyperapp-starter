# <img height="24" src="https://cdn.rawgit.com/kriasoft/hyperapp-starter/master/logo.svg"> Hyperapp Starter

[![npm downloads](https://img.shields.io/npm/dw/create-hyperapp-starter.svg)](https://www.npmjs.com/package/create-hyperapp-starter)
[![slack chat](https://hyperappjs.herokuapp.com/badge.svg)](https://hyperappjs.herokuapp.com 'Join us')

Boilerplate and tooling for authoring modern web applications
with [Hyperapp](https://hyperapp.js.org/) and [Node.js](https://nodejs.org/).

- **Best practices** — The project is based on [HTML5 Boilerplate](https://html5boilerplate.com/)
  which is the product of years of iterative development and community knowledge.
- **No build configuration** — Hassle-free updates for the whole toolchain with a single dependency.
- **Isomorphic** — Write code once and run it on both client and server-side.

---

This project was bootstrapped with [Hyperapp Starter](https://github.com/kriasoft/hyperapp-starter)
([support](https://hyperappjs.herokuapp.com)).

## Prerequisites

- MacOS, Windows, or Linux
- [Node.js](https://nodejs.org/) v8.3 or newer
- Text editor or [IDE](https://en.wikipedia.org/wiki/IDE)
  (e.g. [VS Code](https://code.visualstudio.com/) +
  [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  plugin)

## Getting Started

To create a new app, run a single command:

```bash
npm init hyperapp-starter
```

It will generate the initial project structure inside the current directory
and install the dependencies.

Also you can directly specify the project directory if you want to:

```bash
npm init hyperapp-starter <project-directory>
```

## Basic structure

```bash
.
├── build/              # Compiled output
├── coverage/           # Test coverage reports
├── node_modules/       # 3rd-party libraries and utilities
├── public/             # Static files such as favicon.ico etc.
├── src/                # Application source code
│   ├── app.js          # Universal (Isomorphic) application
│   ├── index.js        # Client-side rendering, e.g. app(state, actions, view, container)
│   └── server.js       # Server-side rendering, e.g. renderToString(view, state, actions)
├── .env                # Environment variables (optional)
├── package.json        # The list of project dependencies + NPM scripts
└── README.md           # Getting started guide
```

## License

Hyperapp Starter is MIT licensed.
See [LICENSE](https://github.com/kriasoft/hyperapp-starter/blob/master/LICENSE.md).
