import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  const { action, label, cssClass } = props;
  return (
    <button type="button" onClick={action} className={cssClass}>{label}</button>
  );
};

Button.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
};

export default Button;
