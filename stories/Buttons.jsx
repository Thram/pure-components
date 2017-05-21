import React from 'react';
import { object, text } from '@storybook/addon-knobs';
import { Button, ButtonGroup, Group, Cell } from '../src';
import { action } from '@storybook/addon-actions';

const Grid = () => (
  <Group container fullHeight>
    <Group container>
      <Button onClick={action('Test')}>Test</Button>
    </Group>
    <Group container>
      <ButtonGroup>
        <Button onClick={action('One')}>One</Button>
        <Button onClick={action('Two')} type="primary">Two</Button>
        <Button onClick={action('Three')}>Three</Button>
      </ButtonGroup>
    </Group>
  </Group>
);

export default Grid;
