import React from 'react';
import { object, text } from '@storybook/addon-knobs';
import { Group, Cell } from '../src';

const DEFAULTS = {
  mediaQueries: {
    small: '1',
    medium: '1/4',
    large: '1/2',
    xlarge: '1/3',
  },
};
const cellStyle = {
  height: '50px',
  backgroundColor: '#A8CABA',
  border: '1px solid #838689',
};
const Grid = () => (
  <Group container fullHeight>
    <Group
      container
      fullHeight
      style={{ padding: '1rem', backgroundColor: 'blue' }}
    >
      <h1>Group Container</h1>
    </Group>
    <Group>
      <Cell
        size={text('Default Size Cell 1', '1')}
        mediaQueries={object('Media Queries Cell 1', DEFAULTS.mediaQueries)}
        style={cellStyle}
      />
      <Cell
        size={text('Default Size Cell 2', '1')}
        mediaQueries={object('Media Queries Cell 2', DEFAULTS.mediaQueries)}
        style={cellStyle}
      />
      <Cell
        size={text('Default Size Cell 3', '1')}
        mediaQueries={object('Media Queries Cell 3', DEFAULTS.mediaQueries)}
        style={cellStyle}
      />
    </Group>
  </Group>
);

export default Grid;
