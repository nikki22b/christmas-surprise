import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from "./styles.module.scss"

export default function Copy({children, variant, customClass}) {
  return (
    <p className={cn(`
        ${styles.copy}
        ${styles[`copy--${variant}`]}
        ${customClass}
      `)}>
      {children}
    </p>
  );
}

Copy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  varaint: PropTypes.oneOf(['highlight', 'small']),
}
