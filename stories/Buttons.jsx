import React from 'react';
import { uniqueId, capitalize } from 'lodash';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button, ButtonGroup, Group } from '../src';

const DEFAULTS = {
  types: ['default', 'primary', 'secondary', 'success', 'error', 'warning'],
  props: {
    active: false,
    disabled: false,
    hidden: false,
    hover: false,
    selected: false,
    className: '',
    submit: false,
  },
};

const Buttons = () => (
  <Group container fullHeight style={{ padding: '.5rem 1rem' }}>
    <h2>Button Types:</h2>
    {DEFAULTS.types.map(type => (
      <Button
        key={uniqueId('button_')}
        {...object('Buttons', DEFAULTS.props)}
        type={type}
        style={{ margin: '.5rem' }}
        onClick={action(`Button ${type}`)}
      >
        {capitalize(type)}
      </Button>
    ))}

    <Group container>
      <h2>Button Group:</h2>
      <ButtonGroup style={{ margin: '.5rem' }}>
        {DEFAULTS.types.map(type => (
          <Button
            key={uniqueId('button_')}
            {...object('Buttons', DEFAULTS.props)}
            type={type}
            onClick={action(`Button ${type}`)}
          >
            {capitalize(type)}
          </Button>
        ))}
      </ButtonGroup>
    </Group>
  </Group>
);

export default Buttons;
