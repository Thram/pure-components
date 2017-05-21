import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs';
import Buttons from './Buttons';
import Forms from './Forms';
import Tables from './Tables';
import Menus from './Menus';
import Grid from './Grid';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Layout')} />
));

const stories = storiesOf('Layout', module);

stories.addDecorator(withKnobs);
stories
  .add('Buttons', () => <Buttons />)
  .add('Grid', () => <Grid />)
  .add('Menus', () => <Menus />)
  .add('Tables', () => <Tables />)
  .add('Forms', () => <Forms />);
