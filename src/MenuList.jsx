/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { MenuList as pMenuList } from './Helpers';
import Element from './Element';

class MenuList extends Component {
  static propTypes = { className: PropTypes.string };
  static defaultProps = { className: '' };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => <Element
    tag="ul"
    ref={this.setRef}
    {...this.props}
    className={`${pMenuList} ${this.props.className}`}
  />;
}


export default MenuList;
