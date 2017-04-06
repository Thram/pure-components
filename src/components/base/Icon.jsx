/**
 * Created by thram on 4/04/17.
 */
import styled from 'styled-components';

const getFont = props => (props.font ? props.font : 'Material Icons');
const getType = props => (props.type ? props.type : '');
const getSize = props => (props.size ? props.size : 24);

const Icon = styled.i`
    font-family: ${getFont}, serif;
    font-weight: normal;
    font-style: normal;
    font-size: ${getSize}px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
    &:after {
      content: "${getType}";
    }
`;

export default Icon;
