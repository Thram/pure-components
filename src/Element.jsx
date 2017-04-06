/**
 * Created by thram on 6/04/17.
 */
import { createElement, Component, PropTypes } from 'react';
import { omit, uniqueId } from 'lodash';

class Element extends Component {
  static propTypes = {
    tag: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };
  static defaultProps = {
    tag: 'div',
    children: undefined,
  };

  setRef = (ref) => {
    this.element = ref && ref.element;
  };

  render = () => createElement(this.props.tag, {
    ...omit(this.props, ['tag', 'children']),
    ref: this.setRef,
    key: uniqueId('element_'),
  }, this.props.children)
}


export default Element;
