# VuePress-Intercom
A simple wrapper for [`vue-intercom`](https://www.npmjs.com/package/vue-intercom) that plugs into VuePress.

## Installation  
```bash
npm install vuepress-intercom
```

## Setup
Within your VuePress config (`.vuepress/config.js`), add the plugin:
```js
module.exports = {
    // ...
    plugins: [
        [require('vuepress-intercom'), { appId: 'your-app-id' }]
    ],
    // ...
}
```

## Usage
Intercom should now be available through the [`$intercom` object](https://github.com/johnnynotsolucky/vue-intercom#api)
in your Vue instance.

[View vue-intercom for more info](https://github.com/johnnynotsolucky/vue-intercom#usage).

## License
This repository is licensed under the ISC license.

Copyright (c) 2018, Jørgen Vatle.