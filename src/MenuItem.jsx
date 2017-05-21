/**
 * Created by thram on 6/04/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { omit, isArray } from 'lodash';
import { MenuItem as pMenuItem } from './Helpers';
import Element from './Element';
import MenuLink from './MenuLink';

class MenuItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    hasChildren: PropTypes.bool,
    allowHover: PropTypes.bool,
    href: PropTypes.string,
    action: PropTypes.func,
    heading: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    active: false,
    selected: false,
    disabled: false,
    hasChildren: false,
    allowHover: false,
    href: undefined,
    action: undefined,
    heading: false,
  };

  setRef = (ref) => {
    this.element = ref && ref.element;
  };

  render = () => {
    const {
      active,
      selected,
      disabled,
      hasChildren,
      allowHover,
      className,
      href,
      action,
      heading,
    } = this.props;
    const baseClass = pMenuItem({
      active,
      selected,
      disabled,
      hasChildren,
      allowHover,
    });
    console.log(this.props.children);
    return (
      <Element
        tag="li"
        ref={this.setRef}
        {...omit(this.props, [
          'className',
          'active',
          'selected',
          'disabled',
          'hasChildren',
          'allowHover',
          'children',
          'href',
          'action',
          'heading',
        ])}
        className={`${baseClass} ${className}`}
      >
        {isArray(this.props.children)
          ? this.props.children
          : <MenuLink href={href} action={action} heading={heading}>
            {this.props.children}
          </MenuLink>}
      </Element>
    );
  };
}

export default MenuItem;
