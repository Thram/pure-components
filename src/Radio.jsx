/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { omit } from 'lodash';
import { Radio as pRadio } from './Helpers';

class Radio extends Component {
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
    const baseClass = pRadio({ active });
    return (<label
      ref={this.setRef}
      className={`${baseClass} ${className}`}
    >
      <input type="radio" {...omit(this.props, ['className', 'active', 'children'])} />
      {this.props.children}
    </label>);
  }
}


export default Radio;
