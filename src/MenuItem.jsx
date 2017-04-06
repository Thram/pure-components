/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { omit } from 'lodash';
import { MenuItem as pMenuItem } from './Helpers';
import Element from './Element';

class MenuItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    hasChildren: PropTypes.bool,
    allowHover: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    active: false,
    selected: false,
    disabled: false,
    hasChildren: false,
    allowHover: false,
  };

  setRef = (ref) => {
    this.element = ref && ref.element;
  };

  render = () => {
    const { active, selected, disabled, hasChildren, allowHover, className } = this.props;
    const baseClass = pMenuItem({ active, selected, disabled, hasChildren, allowHover });
    return (<Element
      tag="li"
      ref={this.setRef}
      {...omit(this.props, ['className', 'active', 'selected', 'disabled', 'hasChildren', 'allowHover'])}
      className={`${baseClass} ${className}`}
    />);
  }
}


export default MenuItem;
