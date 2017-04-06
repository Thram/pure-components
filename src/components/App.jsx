/**
 * Created by thram on 21/01/17.
 */
import React from 'react';
import { Unit } from './layout/Pure';
import Group from './layout/Group';
import Cell from './layout/Cell';
import Form from './layout/Form';
import FormMessage from './layout/FormMessage';
import FormMessageInline from './layout/FormMessageInline';
import Button from './layout/Button';
import Input from './layout/Input';
import Checkbox from './layout/Checkbox';
import Radio from './layout/Radio';
import ControlGroup from './layout/ControlGroup';
import Controls from './layout/Controls';
import HelpInline from './layout/HelpInline';
import Image from './layout/Image';
import Menu from './layout/Menu';
import MenuChildren from './layout/MenuChildren';
import MenuHeading from './layout/MenuHeading';
import MenuList from './layout/MenuList';
import MenuItem from './layout/MenuItem';
import MenuLink from './layout/MenuLink';
import MenuSeparator from './layout/MenuSeparator';

const getRef = ref => console.log(ref.element);
const App = () => (
  <Group>
    <Cell ref={getRef} size="1/2">
      <h1 className={`${Unit({ fraction: '1/2' })}`}>Hola</h1>
      <Menu>
        <MenuHeading>heading</MenuHeading>
        <MenuList>
          <MenuItem>
            <MenuLink href="#">Menu 1</MenuLink>
          </MenuItem>
          <MenuSeparator></MenuSeparator>
          <MenuItem>
            <MenuLink href="#">Menu 2</MenuLink>
          </MenuItem>
          <MenuItem hasChildren active>
            <MenuLink href="#">Menu 3</MenuLink>
            <MenuChildren>
              <MenuItem>
                <MenuLink href="#">SubMenu 1</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#">SubMenu 2</MenuLink>
              </MenuItem>
            </MenuChildren>
          </MenuItem>

        </MenuList>
      </Menu>
      <Form>
        <Input rounded size="1/2" />
        <FormMessage>This is a required field.</FormMessage>
        <Checkbox > TEst</Checkbox>
        <Radio name="optionsRadios">TEst</Radio>
        <Radio name="optionsRadios">TEst</Radio>
      </Form>
      <Form aligned>
        <ControlGroup>
          <label htmlFor="name">Username</label>
          <input id="name" type="text" placeholder="Username" />
          <FormMessageInline>This is a required field.</FormMessageInline>
        </ControlGroup>
        <ControlGroup>
          <label htmlFor="name">Username</label>
          <input id="name" type="text" placeholder="Username" />
          <HelpInline>This is a required field.</HelpInline>
        </ControlGroup>
        <Controls>
          <Button type="primary">Test</Button>
          <Checkbox > TEst</Checkbox>
        </Controls>
        <Input rounded size="1/2" />
        <Radio name="optionsRadios">TEst</Radio>
        <Radio name="optionsRadios">TEst</Radio>
      </Form>
      <Button>Test</Button>
      <Image src="https://i.ytimg.com/vi/TraUBFIuqvk/maxresdefault.jpg" />
    </Cell>
  </Group>
);

export default App;
