/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { MenuHeading as pMenuHeading, MenuLink as pMenuLink } from './Pure';
import Element from './Element';

class MenuLink extends Component {
  static propTypes = { className: PropTypes.string, heading: PropTypes.bool };
  static defaultProps = { className: '', heading: false };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => <Element
    tag="a"
    ref={this.setRef}
    {...this.props}
    className={`${pMenuLink} ${this.props.heading ? pMenuHeading : ''} ${this.props.className}`}
  />;
}


export default MenuLink;
