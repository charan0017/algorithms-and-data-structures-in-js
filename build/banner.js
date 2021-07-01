'use strict'

const pkg = require('../package.json');
const year = new Date().getFullYear();

function getBanner(pluginFilename) {
    return `/*!
  * Algorithms & Data Structures in JavaScript ${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright 2011-${year} ${pkg.author}
  * Licensed under MIT (https://github.com/charan0017/${pkg.name}/blob/main/LICENSE)
  */`;
}

module.exports = getBanner;
