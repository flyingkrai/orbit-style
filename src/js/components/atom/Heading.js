import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.heading.scss';

const Heading = (props) => {
  const {
    children,
    className,
    level,
    title,
    primary,
    success,
    danger,
    warning,
    ...otherProps
  } = props;

  const tmpClasses = classNames({
    [css['c-heading']]: true,
    [css['c-heading__1']]: level === 1,
    [css['c-heading__2']]: level === 2,
    [css['c-heading__3']]: level === 3,
    [css['c-heading__4']]: level === 4,
    [css['c-heading__5']]: level === 5,
    [css['c-heading__6']]: level === 6,
    [css['c-heading--primary']]: primary,
    [css['c-heading--success']]: success,
    [css['c-heading--danger']]: danger,
    [css['c-heading--warning']]: warning,
  });

  const classes = `${tmpClasses} ${className}`;

  switch (level) {
    case 1:
      return <h1 className={classes} title={title} {...otherProps}>{children}</h1>;
    case 2:
      return <h2 className={classes} title={title} {...otherProps}>{children}</h2>;
    case 3:
      return <h3 className={classes} title={title} {...otherProps}>{children}</h3>;
    case 4:
      return <h4 className={classes} title={title} {...otherProps}>{children}</h4>;
    case 5:
      return <h5 className={classes} title={title} {...otherProps}>{children}</h5>;
    case 6:
      return <h6 className={classes} title={title} {...otherProps}>{children}</h6>;
    default:
      return null;
  }
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  level: PropTypes.number.isRequired,

  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
};

Heading.defaultProps = {
  className: '',
  title: '',
  primary: false,
  success: false,
  danger: false,
  warning: false,
};

export default Heading;