import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import infoAddon from '@storybook/addon-info';
import Buttons from './Buttons';
import Forms from './Forms';
import Tables from './Tables';
import Menus from './Menus';
import Grid from './Grid';

setAddon(infoAddon);
const stories = storiesOf('Welcome', module);

stories.addDecorator(withKnobs);

stories
  .add('Buttons', () => <Buttons />)
  .add('Grid', () => <Grid />)
  .add('Menus', () => <Menus />)
  .add('Tables', () => <Tables />)
  .add('Forms', () => <Forms />);
