/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { FormMessageInline as pFormMessageInline } from './Helpers';
import Element from './Element';

class FormMessageInline extends Component {
  static propTypes = { className: PropTypes.string };
  static defaultProps = { className: '' };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => <Element
    tag="span"
    ref={this.setRef}
    {...this.props}
    className={`${pFormMessageInline} ${this.props.className}`}
  />;
}


export default FormMessageInline;
