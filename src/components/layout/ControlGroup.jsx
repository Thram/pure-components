/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { ControlGroup as pControlGroup } from './Pure';
import Element from './Element';

class ControlGroup extends Component {
  static propTypes = { className: PropTypes.string };
  static defaultProps = { className: '' };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => <Element
    ref={this.setRef}
    {...this.props}
    className={`${pControlGroup} ${this.props.className}`}
  />;
}


export default ControlGroup;
