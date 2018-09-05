This project was bootstrapped with [Hyperapp Starter](https://github.com/kriasoft/hyperapp-starter)
([support](https://hyperappjs.herokuapp.com)).

## Prerequisites

- MacOS, Windows, or Linux
- [Node.js](https://nodejs.org/) v8.9.0 or newer
- Text editor or [IDE](https://en.wikipedia.org/wiki/IDE)
  (e.g. [VS Code](https://code.visualstudio.com/) +
  [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  plugin)

## Getting Started

To start a development server with "live reload", run a single command in the project directory:

```bash
npm start
```

## Basic structure

```bash
.
├── build/              # Compiled output
├── coverage/           # Test coverage reports
├── node_modules/       # 3rd-party libraries and utilities
├── public/             # Static files such as favicon.ico etc.
├── src/                # Application source code
│   ├── app.js          # Universal (Isomorphic) application entry point
│   ├── index.js        # Client-side rendering, e.g. app(state, actions, view, container)
│   └── server.js       # Server-side rendering, e.g. renderToString(view, state, actions)
├── .env                # Environment variables (optional)
├── package.json        # The list of project dependencies + NPM scripts
└── README.md           # Getting started guide
```
