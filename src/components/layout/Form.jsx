/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { omit } from 'lodash';
import { Form as pForm } from './Pure';
import Element from './Element';

class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    stacked: PropTypes.bool,
    aligned: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    aligned: false,
    stacked: false,
  };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => {
    const { stacked, aligned, className } = this.props;
    const baseClass = pForm({ stacked, aligned });
    return (<Element
      tag="form"
      ref={this.setRef}
      {...omit(this.props, ['className', 'stacked', 'aligned'])}
      className={`${baseClass} ${className}`}
    />);
  }
}


export default Form;
