/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { omit } from 'lodash';
import { Button as pButton } from './Pure';
import Element from './Element';

class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    hover: PropTypes.bool,
    selected: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    type: undefined,
    active: false,
    disabled: false,
    hidden: false,
    hover: false,
    selected: false,
  };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => {
    const { type, active, disabled, hidden, hover, selected, className } = this.props;
    const baseClass = pButton({ type, active, disabled, hidden, hover, selected });
    return (<Element
      tag="button"
      ref={this.setRef}
      {...omit(this.props, ['className', 'type', 'active', 'disabled', 'hidden', 'hover', 'selected'])}
      type="button"
      className={`${baseClass} ${className}`}
    />);
  }
}


export default Input;
