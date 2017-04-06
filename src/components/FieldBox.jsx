/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import Icon from './base/Icon';

const expand = minWidth => keyframes`
  from {
    width: ${minWidth}px;
  }

  to {
    width: 300px;
  }
`;

const shrink = minWidth => keyframes`
  from {
    width: 300px;
  }

  to {
    width: ${minWidth};
  }
`;


const DEFAULTS = {
  icon: 'edit',
  text: 'Text',
  time: 0.4,
  iconSize: 24,
};

const Wrapper = styled.div`
  display: flex;
  flexDirection: row;
`;

const Box = styled.div`
  display: flex;
  borderRadius: 0.5rem;
  justify-content: flex-start;
  overflow: hidden;
  animation: ${props => (props.opened ? expand(props.minSize) : shrink(props.minSize))} ${DEFAULTS.time}s linear forwards;
  border: 1px solid ${props => (props.opened ? props.activeColor : props.color)};
  color: ${props => (props.opened ? props.activeColor : props.color)};
`;

const TextInput = styled.input`
      opacity: ${props => (props.opened ? 1 : 0)};
      transition: opacity ${DEFAULTS.time}s ease;
      visibility: ${props => (props.opened ? 'visible' : 'hidden')};
      outline: none;
`;

class FieldBox extends Component {

  static propTypes = {
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    label: PropTypes.string,
    color: PropTypes.string,
    activeColor: PropTypes.string,
    time: PropTypes.number,
    style: PropTypes.shape({}),
  };

  static defaultProps = {
    icon: DEFAULTS.icon,
    iconSize: DEFAULTS.iconSize,
    label: DEFAULTS.text,
    time: DEFAULTS.time,
    color: 'black',
    activeColor: 'lightskyblue',
    style: {},
  };

  state = {
    value: '',
    isOpened: false,
  };


  onBlur = () => !this.state.value && this.close();

  onChange = ev => this.setState({ value: ev.target.value });

  open = () => {
    if (!this.state.isOpened) {
      this.setState({ isOpened: true });
      setTimeout(() => this.fieldInput.focus(), DEFAULTS.time);
    }
  };

  close = () => this.state.isOpened && this.setState({ isOpened: false });

  render = () => (
    <Wrapper style={this.props.style}>
      <Box
        innerRef={(div) => {
          this.fieldBox = div;
        }}
        minSize={`${this.props.iconSize}px`}
        activeColor={this.props.activeColor}
        color={this.props.color}
        opened={this.state.isOpened}
        onClick={this.open}
      >
        <Icon
          innerRef={(icon) => {
            this.fieldIcon = icon;
          }}
          size={this.props.iconSize}
          type={this.props.icon}
        />
        <TextInput
          innerRef={(input) => {
            this.fieldInput = input;
          }}
          opened={this.state.isOpened}
          type="text"
          placeholder={this.props.label}
          value={this.state.value}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
      </Box>
    </Wrapper>
  )
}


export default FieldBox;
