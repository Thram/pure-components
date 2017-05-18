/**
 * Created by thram on 6/04/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { omit } from 'lodash';
import { Button as pButton } from './Helpers';
import Element from './Element';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    hover: PropTypes.bool,
    selected: PropTypes.bool,
    submit: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    type: undefined,
    active: false,
    disabled: false,
    hidden: false,
    hover: false,
    selected: false,
    submit: false,
  };

  setRef = (ref) => {
    this.element = ref && ref.element;
  };

  render = () => {
    const {
      type,
      active,
      disabled,
      hidden,
      hover,
      selected,
      className,
      submit,
    } = this.props;
    const baseClass = pButton({
      type,
      active,
      disabled,
      hidden,
      hover,
      selected,
    });
    return (
      <Element
        tag="button"
        type={submit ? 'submit' : 'button'}
        ref={this.setRef}
        {...omit(this.props, [
          'className',
          'type',
          'active',
          'disabled',
          'hidden',
          'hover',
          'selected',
          'submit',
        ])}
        className={`${baseClass} ${className}`}
      />
    );
  };
}

export default Button;
