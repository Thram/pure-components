/**
 * Created by thram on 6/04/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MenuChildren as pMenuChildren } from './Helpers';
import Element from './Element';

class MenuChildren extends Component {
  static propTypes = { className: PropTypes.string };
  static defaultProps = { className: '' };

  setRef = (ref) => {
    this.element = ref && ref.element;
  };

  render = () => (
    <Element
      tag="ul"
      ref={this.setRef}
      {...this.props}
      className={`${pMenuChildren} ${this.props.className}`}
    />
  );
}

export default MenuChildren;
