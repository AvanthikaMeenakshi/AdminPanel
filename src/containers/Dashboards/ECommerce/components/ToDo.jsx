import React from 'react';
import CheckIcon from 'mdi-react/CheckIcon';
import PropTypes from 'prop-types';

const ToDo = ({ id, label, checked }) => (
  <div className="todo">
    <label className="checkbox-btn todo__checkbox" htmlFor={id}>
      <input
        className="checkbox-btn__checkbox"
        type="checkbox"
        name={id}
        defaultChecked={checked}
      />
      <span className="checkbox-btn__checkbox-custom">
        <CheckIcon />
      </span>
      <span className="checkbox-btn__label todo__checkbox-label">{label}</span>
    </label>
  </div>
);

ToDo.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
};

ToDo.defaultProps = {
  label: '',
  checked: false,
};

export default ToDo;
