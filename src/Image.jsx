/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { omit } from 'lodash';
import { Image as pImage } from './Helpers';

class Image extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    src: '',
    alt: 'Image',
  };

  setRef = (ref) => {
    this.element = ref && ref.element;
  };

  render = () => {
    const { src, alt, className } = this.props;
    return (<img
      ref={this.setRef}
      src={src}
      alt={alt}
      {...omit(this.props, ['className', 'src', 'alt'])}
      className={`${pImage} ${className}`}
    />);
  }
}


export default Image;
