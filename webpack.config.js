const colors = require('colors');

const helpers = require('./config/helpers');

const buildTarget = helpers.getBuildTarget();

console.log(`Building the ${buildTarget}...`.green);

module.exports = require(`./webpack/${helpers.getBuildTarget()}.config`)({});