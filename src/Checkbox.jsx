/**
 * Created by thram on 6/04/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { omit, uniqueId } from 'lodash';
import { Checkbox as pCheckbox } from './Helpers';

class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    className: '',
    active: false,
    children: undefined,
  };

  setRef = (ref) => {
    this.element = ref && ref.element;
  };

  render = () => {
    const { active, className } = this.props;
    const baseClass = pCheckbox({ active });
    const checkBoxId = uniqueId('checkbox_');
    return (
      <label
        htmlFor={checkBoxId}
        ref={this.setRef}
        className={`${baseClass} ${className}`}
      >
        <input
          name={checkBoxId}
          type="checkbox"
          {...omit(this.props, ['className', 'active', 'children'])}
          checked={active}
        />
        {this.props.children}
      </label>
    );
  };
}

export default Checkbox;
