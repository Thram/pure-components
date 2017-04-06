/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { HelpInline as pHelpInline } from './Pure';
import Element from './Element';

class HelpInline extends Component {
  static propTypes = { className: PropTypes.string };
  static defaultProps = { className: '' };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => <Element
    tag="aside"
    ref={this.setRef}
    {...this.props}
    className={`${pHelpInline} ${this.props.className}`}
  />;
}


export default HelpInline;
