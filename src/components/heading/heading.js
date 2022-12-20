import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from "./styles.module.scss"

const Heading = forwardRef(({tag: CustomTag, children, variant, customClass}, ref) => {
  return (
    <CustomTag 
      className={cn(`
        ${styles.heading}
        ${styles[`heading--${variant}`]}
        ${customClass}
      `)}
      ref={ref}
    >
      {children}
    </CustomTag>
  );
})

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  varaint: PropTypes.oneOf(['primary', 'secondary']),
}

Heading.defaultProps = {
  tag: "p",
};

export default Heading;