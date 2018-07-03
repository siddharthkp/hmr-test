#!/usr/bin/env node

const { execSync } = require('child_process')

execSync(`webpack-dev-server --config ${__dirname}/webpack.config.js`, {
  stdio: [0, 1, 2]
})
