/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { assign, map, omit } from 'lodash';
import { Unit } from './Helpers';
import Element from './Element';

class Cell extends Component {
  static propTypes = {
    mediaQueries: PropTypes.shape({}),
    className: PropTypes.string,
    size: PropTypes.string,
  };

  static defaultProps = {
    mediaQueries: {},
    className: '',
    size: undefined,
  };

  setRef = (ref) => {
    this.element = ref && ref.element;
  };

  render = () => {
    const { size, mediaQueries, className } = this.props;
    console.log(size);
    const baseClass = map({ base: size, ...mediaQueries },
      (fraction, s) => Unit({
        fraction,
        size: s,
      })).join(' ');
    console.log(`${baseClass} ${className}`);
    return (<Element
      ref={this.setRef}
      {...omit(this.props, ['mediaQueries', 'className', 'size'])}
      className={`${baseClass} ${className}`}
    />);
  }
}


export default Cell;
