import React, {Component} from 'react';
import {StrategyPrinter} from './strategy-printer';
import {ThemedLink} from './themed-link';

const setTheme = function (oldTheme, newTheme) {
  document.body.classList.remove(oldTheme);
  document.body.classList.add(newTheme);
};

const changeTheme = element => event => {
  const theme = event.target.value;

  setTheme(element.state.theme, theme);

  element.setState({theme});
};

const changeStrategy = element => event => element.setState({strategy: event.target.value});

export class StrategySelector extends Component {

  constructor() {
    super();

    this.state = {
      theme: 'theme-1',
      strategy: 'pure-css'
    };
  }

  componentDidMount() {
    setTheme(null, this.state.theme);
  }

  render() {

    return (
      <React.Fragment>
        <div>
          Click <a href="https://github.com/Gopikrishna19/app-theming">here</a> for source code!
        </div>
        <br/>Select theme:
        <select
          value={this.state.values}
          onChange={changeTheme(this)}
        >
          <option value="theme-1">Theme 1</option>
          <option value="theme-2">Theme 2</option>
          <option value="theme-3">Theme 3</option>
        </select>
        <br/>Select strategy:
        <select
          value={this.state.values}
          onChange={changeStrategy(this)}
        >
          <option value="pure-css">Using pure css</option>
          <option value="sass-hoc">SASS higher order functions</option>
          <option value="sass-mixins">SASS Mixins</option>
          <option value="less-mixins">LESS Mixins</option>
        </select>
        <ThemedLink strategy={this.state.strategy}/>
        <StrategyPrinter strategy={this.state.strategy}/>
      </React.Fragment>
    );

  }

}

StrategySelector.displayName = 'StrategySelector';
