/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { ButtonGroup as pButtonGroup } from './Helpers';
import Element from './Element';

class ButtonGroup extends Component {
  static propTypes = { className: PropTypes.string };
  static defaultProps = { className: '' };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => <Element
    ref={this.setRef}
    {...this.props}
    className={`${pButtonGroup} ${this.props.className}`}
  />;
}


export default ButtonGroup;
