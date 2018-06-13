import Prism from 'prismjs';
import React from 'react';
import fs from 'fs';

const strategies = {
  'less-mixins': fs.readFileSync(__dirname + '/__raw/less-mixins.txt').toString(),
  'pure-css': fs.readFileSync(__dirname + '/__raw/pure-css.txt').toString(),
  'sass-hoc': fs.readFileSync(__dirname + '/__raw/sass-hoc.txt').toString(),
  'sass-mixins': fs.readFileSync(__dirname + '/__raw/sass-mixins.txt').toString()
};

const component = {__html: Prism.highlight(fs.readFileSync(__dirname + '/__raw/react-component.txt').toString(), Prism.languages.javascript, 'javascript')};
const styleUsage = {__html: Prism.highlight(fs.readFileSync(__dirname + '/__raw/style-usage.txt').toString(), Prism.languages.css, 'css')};

export const StrategyPrinter = props =>
  <table>
    <thead>
      <tr>
        <th>Strategy baseline</th>
        <th>Usage</th>
        <th>Component</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <pre>
            <code dangerouslySetInnerHTML={{__html: Prism.highlight(strategies[props.strategy], Prism.languages.css, 'css')}}/>
          </pre>
        </td>
        <td>
          <pre>
            <code dangerouslySetInnerHTML={styleUsage}/>
          </pre>
        </td>
        <td>
          <pre>
            <code dangerouslySetInnerHTML={component}/>
          </pre>
        </td>
      </tr>
    </tbody>
  </table>;
