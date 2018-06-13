import Prism from 'prismjs';
import React from 'react';
import fs from 'fs';

const strategies = {
  'less-mixins': fs.readFileSync(__dirname + '/__raw_strategies/less-mixins.txt').toString(),
  'pure-css': fs.readFileSync(__dirname + '/__raw_strategies/pure-css.txt').toString(),
  'sass-hoc': fs.readFileSync(__dirname + '/__raw_strategies/sass-hoc.txt').toString(),
  'sass-mixins': fs.readFileSync(__dirname + '/__raw_strategies/sass-mixins.txt').toString()
};

export const StrategyPrinter = props =>
  <pre>
    <code
      dangerouslySetInnerHTML={{__html: Prism.highlight(strategies[props.strategy], Prism.languages.css, 'css')}}
    />
  </pre>;
