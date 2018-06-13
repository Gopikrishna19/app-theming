import React from 'react';

const strategies = {
  'less-mixins': require('./strategies/mixins.less'),
  'pure-css': require('./strategies/pure-css.css'),
  'sass-hoc': require('./strategies/hoc.scss'),
  'sass-mixins': require('./strategies/mixins.scss')
};

export const ThemedLink = props => {
  const styles = strategies[props.strategy];

  return (
    <div className={`${styles.scope} global-scope`}>
      <a href="#">Link component</a>
    </div>
  );
};
