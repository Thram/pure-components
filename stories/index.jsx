import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  object,
  text,
  boolean,
  number,
} from '@storybook/addon-knobs';
import { Group, Cell } from '../src';

import Button from './Button';
import Grid from './Grid';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

const stories = storiesOf('Layout', module);
const cellStyle = {
  height: '50px',
  backgroundColor: '#A8CABA',
  border: '1px solid #838689',
};
const DEFAULTS = {
  mediaQueries: {
    small: '1',
    medium: '1/4',
    large: '1/2',
    xlarge: '1/3',
  },
};
stories.addDecorator(withKnobs);
stories
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('Grid', () => (
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
          mediaQueries={object('Cell 1', DEFAULTS.mediaQueries)}
          style={cellStyle}
        />
        <Cell
          size={text('Default Size Cell 2', '1')}
          mediaQueries={object('Cell 2', DEFAULTS.mediaQueries)}
          style={cellStyle}
        />
        <Cell
          size={text('Default Size Cell 3', '1')}
          mediaQueries={object('Cell 3', DEFAULTS.mediaQueries)}
          style={cellStyle}
        />
      </Group>
    </Group>
  ));
