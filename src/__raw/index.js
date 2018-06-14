import fs from 'fs';

export const files = {
  'less-mixins-baseline': fs.readFileSync(__dirname + '/less-mixins/baseline.txt').toString(),
  'less-mixins-component': fs.readFileSync(__dirname + '/less-mixins/component.txt').toString(),
  'less-mixins-usage': fs.readFileSync(__dirname + '/less-mixins/usage.txt').toString(),
  'pure-css-baseline': fs.readFileSync(__dirname + '/pure-css/baseline.txt').toString(),
  'pure-css-component': fs.readFileSync(__dirname + '/pure-css/component.txt').toString(),
  'pure-css-usage': fs.readFileSync(__dirname + '/pure-css/usage.txt').toString(),
  'sass-hoc-baseline': fs.readFileSync(__dirname + '/sass-hoc/baseline.txt').toString(),
  'sass-hoc-component': fs.readFileSync(__dirname + '/sass-hoc/component.txt').toString(),
  'sass-hoc-usage': fs.readFileSync(__dirname + '/sass-hoc/usage.txt').toString(),
  'sass-mixins-baseline': fs.readFileSync(__dirname + '/sass-mixins/baseline.txt').toString(),
  'sass-mixins-component': fs.readFileSync(__dirname + '/sass-mixins/component.txt').toString(),
  'sass-mixins-usage': fs.readFileSync(__dirname + '/sass-mixins/usage.txt').toString()
};