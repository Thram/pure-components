import React from 'react';
import { times } from 'lodash';
import { object, text } from '@storybook/addon-knobs';
import { Group, Cell } from '../src';

const COLORS = {
  default: '#E6E6E6',
  primary: 'rgb(0, 120, 231)',
  secondary: 'rgb(66, 184, 221)',
  success: 'rgb(66, 184, 221);',
  error: 'rgb(202, 60, 60)',
  warning: 'rgb(223, 117, 20)',
};

const DEFAULTS = {
  fullHeight: false,
  size: '1',
  mediaQueries: {
    small: '1/2',
    medium: '1/3',
    large: '1/4',
    extraLarge: '1/5',
  },
};

const cellStyle = {
  minHeight: '50px',
  backgroundColor: COLORS.secondary,
  border: '1px solid #838689',
};
const Grid = () => (
  <Group container fullHeight style={{ padding: '.5rem 1rem' }}>
    <Group
      container
      style={{
        padding: '1rem',
        margin: '1rem 0',
        backgroundColor: COLORS.primary,
      }}
    >
      <h2>Group Container</h2>
    </Group>
    <h2>Grid System</h2>
    <h3>Bases: 2,3,4,5,6,8,12,24</h3>
    <h4>Separators: - / |</h4>
    <Group fullHeight>
      {times(5, () => (
        <Cell {...object('Cells', DEFAULTS)} style={cellStyle} />
      ))}
    </Group>
  </Group>
);

export default Grid;
