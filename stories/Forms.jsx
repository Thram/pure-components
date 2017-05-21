import React from 'react';
import { object } from '@storybook/addon-knobs';
import {
  Form,
  ControlGroup,
  Controls,
  Input,
  FormGroup,
  Select,
  FormMessage,
  Checkbox,
  Radio,
  FormMessageInline,
  Textarea,
  Group,
  Button,
} from '../src';

const DEFAULTS = {
  checkboxes: {
    active: false,
  },
  radios: {
    active: false,
  },
  inputs: {
    readOnly: false,
    disabled: false,
    size: '',
    rounded: false,
  },
  selects: {
    size: '1/2',
  },
  textareas: {
    size: '1/2',
  },
  buttons: {
    size: '1/4',
  },
};

const Forms = () => (
  <Group
    container
    fullHeight
    style={{ padding: '.5rem 1rem', maxWidth: '30%' }}
  >
    <h2>Default Form</h2>
    <Form>
      <fieldset>
        <legend>A compact inline form</legend>
        <Input
          type="email"
          placeholder="Email"
          {...object('Inputs', DEFAULTS.inputs)}
        />
        <Input
          type="password"
          placeholder="Password"
          {...object('Inputs', DEFAULTS.inputs)}
        />
        <Checkbox {...object('Checkboxes', DEFAULTS.checkboxes)}>
          Remember me
        </Checkbox>
        <Button submit type="primary" {...object('Buttons', DEFAULTS.buttons)}>
          Sign in
        </Button>
      </fieldset>
    </Form>
    <h2>Stacked Form</h2>
    <Form stacked>
      <fieldset>
        <legend>A Stacked Form</legend>

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          {...object('Inputs', DEFAULTS.inputs)}
        />
        <FormMessage>This is a required field.</FormMessage>

        <label htmlFor="password">Password</label>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...object('Inputs', DEFAULTS.inputs)}
        />

        <label htmlFor="state">State</label>
        <Select id="state" {...object('Selects', DEFAULTS.selects)}>
          <option>AL</option>
          <option>CA</option>
          <option>IL</option>
        </Select>

        <Checkbox {...object('Checkboxes', DEFAULTS.checkboxes)}>
          Remember me
        </Checkbox>

        <Button submit type="primary" {...object('Buttons', DEFAULTS.buttons)}>
          Sign in
        </Button>
      </fieldset>
    </Form>
    <h2>Aligned Form</h2>
    <Form aligned>
      <fieldset>
        <ControlGroup>
          <label htmlFor="name">Username</label>
          <Input
            id="name"
            type="text"
            placeholder="Username"
            {...object('Inputs', DEFAULTS.inputs)}
          />
          <FormMessageInline> This is a required field. </FormMessageInline>
        </ControlGroup>

        <ControlGroup>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...object('Inputs', DEFAULTS.inputs)}
          />
        </ControlGroup>

        <ControlGroup>
          <label htmlFor="email">Email Address</label>
          <Input
            id="email"
            type="email"
            placeholder="Email Address"
            {...object('Inputs', DEFAULTS.inputs)}
          />
        </ControlGroup>

        <ControlGroup>
          <label htmlFor="foo">Supercalifragilistic Label</label>
          <Input
            id="foo"
            type="text"
            placeholder="Enter something here..."
            {...object('Inputs', DEFAULTS.inputs)}
          />
        </ControlGroup>

        <Controls>
          <Checkbox {...object('Checkboxes', DEFAULTS.checkboxes)}>
            I've read the terms and conditions
          </Checkbox>
          <Button
            submit
            type="primary"
            {...object('Buttons', DEFAULTS.buttons)}
          >
            Submit
          </Button>
        </Controls>
      </fieldset>
    </Form>
    <h2>Grouped Inputs</h2>
    <Form>
      <FormGroup>
        <Input
          type="text"
          placeholder="Username"
          {...object('Inputs', DEFAULTS.inputs)}
        />
        <Input
          type="text"
          placeholder="Password"
          {...object('Inputs', DEFAULTS.inputs)}
        />
        <Input
          type="email"
          placeholder="Email"
          {...object('Inputs', DEFAULTS.inputs)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          placeholder="A title"
          {...object('Inputs', DEFAULTS.inputs)}
        />
        <Textarea
          placeholder="Textareas work too"
          {...object('Textareas', DEFAULTS.textareas)}
        />
      </FormGroup>

      <Button submit type="primary" {...object('Buttons', DEFAULTS.buttons)}>
        Sign in
      </Button>
    </Form>
    <h2>Checkboxes and Radios</h2>
    <Form>
      <Checkbox {...object('Checkboxes', DEFAULTS.checkboxes)}>
        Here's option one.
      </Checkbox>
      <Radio name="optionsRadios" value="option1" active>
        Here's a radio button. You can choose this one..
      </Radio>
      <Radio name="optionsRadios" value="option2">
        ..Or this one!
      </Radio>
    </Form>
  </Group>
);

export default Forms;
