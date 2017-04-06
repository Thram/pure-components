/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { Controls as pControls } from './Helpers';
import Element from './Element';

class Controls extends Component {
  static propTypes = { className: PropTypes.string };
  static defaultProps = { className: '' };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => <Element
    ref={this.setRef}
    {...this.props}
    className={`${pControls} ${this.props.className}`}
  />;
}


export default Controls;
