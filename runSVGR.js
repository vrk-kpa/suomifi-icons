const { exec } = require('child_process');
const illustrativeConfig = require('./svgo.config-illustrative.js');
const baseConfig = require('./svgo.config-base.js');
const componentConfig = require('./svgo.config-component.js');
const defaultConfig = require('./svgo.config-default.js');

const iconTypes = ['base', 'component', 'doctype', 'illustrative', 'logo'];

const resolveSvgoConfig = (iconType) => {
  switch (iconType) {
    case 'base':
      return 'svgo.config-base.js';
    case 'illustrative':
      return 'svgo.config-illustrative.js';
    case 'component':
      return 'svgo.config-component.js';
    default:
      return 'svgo.config-default.js';
  }
};

iconTypes.forEach((type) =>
  exec(
    `node node_modules/@svgr/cli/bin/svgr --out-dir svgrComponents/${type}Icons --icon --svgo-config ${resolveSvgoConfig(
      type
    )} --typescript -- assets/${type}Icons`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`Could not create ${type}Icons`);
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`Could not create ${type}Icons`);
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  )
);
