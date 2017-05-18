import React from 'react';
import { Group, Cell } from '../src';

const Grid = () => (
  <Group container>
    <Group container style={{ padding: '1rem', backgroundColor: 'blue' }}>
      <h1>Group Container</h1>
    </Group>
    <Group>
      <Cell
        size="1"
        mediaQueries={{ medium: '1/2', small: '1/3' }}
        style={{ height: '50px', backgroundColor: 'red' }}
      />
      <Cell
        size="1"
        mediaQueries={{ medium: '1/2', small: '1/3' }}
        style={{ height: '50px', backgroundColor: 'red' }}
      />
      <Cell
        size="1"
        mediaQueries={{ medium: '1/2', small: '1/3' }}
        style={{ height: '50px', backgroundColor: 'red' }}
      />
    </Group>
  </Group>
);

export default Grid;
