import Prism from 'prismjs';
import React from 'react';
import {files} from './__raw';

const getFileContent = (strategy, file) => files[`${strategy}-${file}`];
const decorate = (string, language) => Prism.highlight(string, Prism.languages[language], language);
const getHTML = (strategy, file, language) => ({__html: decorate(getFileContent(strategy, file), language)});

const strategies = ['less-mixins', 'pure-css', 'sass-hoc', 'sass-mixins']
  .reduce((object, strategy) => Object.assign(object, {
    [strategy]: {
      component: getHTML(strategy, 'component', 'javascript'),
      baseline: getHTML(strategy, 'baseline', 'css'),
      usage: getHTML(strategy, 'usage', 'css')
    }
  }), {});

const fileExtensions = {
  'less-mixins': 'less',
  'pure-css': 'css',
  'sass-hoc': 'scss',
  'sass-mixins': 'scss'
};

export const StrategyPrinter = props =>
  <table>
    <thead>
      <tr>
        <th>baseline.{fileExtensions[props.strategy]}</th>
        <th>themed-link.{fileExtensions[props.strategy]}</th>
        <th>ThemedLink.js</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <pre>
            <code dangerouslySetInnerHTML={strategies[props.strategy].baseline}/>
          </pre>
        </td>
        <td>
          <pre>
            <code dangerouslySetInnerHTML={strategies[props.strategy].usage}/>
          </pre>
        </td>
        <td>
          <pre>
            <code dangerouslySetInnerHTML={strategies[props.strategy].component}/>
          </pre>
        </td>
      </tr>
    </tbody>
  </table>;
