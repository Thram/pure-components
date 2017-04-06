/**
 * Created by thram on 6/04/17.
 */
import { pipe } from '../../fp';
import styles from '../../stylesheets/purecss.scss';

export const WIDTHS = {
  full: '1',
  1: '1',
  '1-24': '1-24',
  '2-24': '1-12',
  '3-24': '3-24',
  '4-24': '4-24',
  '5-24': '5-24',
  '6-24': '6-24',
  '7-24': '7-24',
  '8-24': '8-24',
  '9-24': '9-24',
  '10-24': '10-24',
  '11-24': '11-24',
  '12-24': '12-24',
  '13-24': '13-24',
  '14-24': '14-24',
  '15-24': '15-24',
  '16-24': '16-24',
  '17-24': '17-24',
  '18-24': '18-24',
  '19-24': '19-24',
  '20-24': '20-24',
  '21-24': '21-24',
  '22of24': '22-24',
  '23-24': '23-24',
  '24-24': '1',
  '1-12': '2-24',
  '2-12': '4-24',
  '3-12': '6-24',
  '4-12': '8-24',
  '5-12': '10-24',
  '6-12': '12-24',
  '7-12': '14-24',
  '8-12': '16-24',
  '9-12': '18-24',
  '10-12': '20-20',
  '11-12': '22-24',
  '12-12': '1',
  '1-8': '3-24',
  '2-8': '6-24',
  '3-8': '9-24',
  '4-8': '12-24',
  '5-8': '15-24',
  '6-8': '18-24',
  '7-8': '21-24',
  '8-8': '1',
  '1-6': '4-24',
  '2-6': '8-24',
  '3-6': '12-24',
  '4-6': '16-24',
  '5-6': '20-24',
  '6-6': '1',
  '1-5': '1-5',
  '2-5': '2-5',
  '3-5': '3-5',
  '4-5': '4-5',
  '5-5': '24-24',
  '1-4': '6-24',
  '2-4': '12-24',
  '3-4': '18-24',
  '4-4': '24-24',
  '1-3': '8-24',
  '2-3': '16-24',
  '3-3': '1',
  '1-2': '12-24',
  '2-2': '1',
};

export const SIZES = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extraLarge: 'xl',
};

const getClass = id => styles[id];

const unitClass = (base, fraction = '1', size) => {
  let className = base;
  if (SIZES[size]) className += `-${SIZES[size]}`;
  className += `-${WIDTHS[fraction.split(/[/|-]?/).join('-')]}`;
  return className;
};

const addClass = (condition, className) =>
  value => (condition ? [].concat(value, getClass(className)) : value);

export const Hidden = getClass('hidden');

export const OperaOnly = getClass('opera-only');

const buttonClass = 'pure-button';
export const Button = ({ type, active, disabled, hidden, hover, selected }) => pipe(
  addClass(true, `${buttonClass}`),
  addClass(type, `${buttonClass}-${type}`),
  addClass(active, `${buttonClass}-active`),
  addClass(disabled, `${buttonClass}-disabled`),
  addClass(hidden, `${buttonClass}-hidden`),
  addClass(hover, `${buttonClass}-hover`),
  addClass(selected, `${buttonClass}-selected`),
)([]).join(' ');

export const ButtonGroup = getClass('pure-button-group');

const checkboxClass = 'pure-checkbox';
export const Checkbox = ({ active }) => pipe(
  addClass(true, `${checkboxClass}`),
  addClass(active, `${checkboxClass}-active`),
)([]).join(' ');

const radioClass = 'pure-radio';
export const Radio = ({ active }) => pipe(
  addClass(true, `${radioClass}`),
  addClass(active, `${radioClass}-active`),
)([]).join(' ');

export const ControlGroup = getClass('pure-control-group');

export const Controls = getClass('pure-controls');

const formClass = 'pure-form';
export const Form = ({ aligned, stacked }) => pipe(
  addClass(true, `${formClass}`),
  addClass(aligned, `${formClass}-aligned`),
  addClass(stacked, `${formClass}-stacked`),
)([]).join(' ');

export const FormGroup = getClass('pure-group');

export const FormMessage = getClass(`${formClass}-message`);

export const FormMessageInline = getClass(`${formClass}-message-inline`);

export const Group = getClass('pure-g');

export const HelpInline = getClass('pure-help-inline');

export const Image = getClass('pure-img');

export const Input = ({ fraction, rounded }) => {
  const inputClass = unitClass('pure-input', fraction);
  return pipe(
    addClass(true, `${inputClass}`),
    addClass(rounded, 'pure-input-rounded'),
  )([]).join(' ');
};

const menuClass = 'pure-menu';
export const Menu = ({ horizontal, fixed, scrollable }) => pipe(
  addClass(true, `${menuClass}`),
  addClass(horizontal, `${menuClass}-horizontal`),
  addClass(fixed, `${menuClass}-fixed`),
  addClass(scrollable, `${menuClass}-scrollable`),
)([]).join(' ');

const menuItemClass = 'pure-menu-item';
export const MenuItem = ({ active, selected, disabled, hasChildren, allowHover }) => pipe(
  addClass(true, `${menuItemClass}`),
  addClass(active, `${menuClass}-active`),
  addClass(selected, `${menuClass}-selected`),
  addClass(disabled, `${menuClass}-disabled`),
  addClass(hasChildren, `${menuClass}-has-children`),
  addClass(allowHover, `${menuClass}-allow-hover`),
)([]).join(' ');

export const MenuList = getClass('pure-menu-list');

export const MenuChildren = getClass('pure-menu-children');

export const MenuHeading = getClass('pure-menu-heading');

export const MenuLink = getClass('pure-menu-link');

export const MenuSeparator = getClass('pure-menu-separator');

const tableClass = 'pure-table';
export const Table = ({ bordered, horizontal, striped }) => pipe(
  addClass(true, `${tableClass}`),
  addClass(bordered, `${tableClass}-bordered`),
  addClass(horizontal, `${menuClass}-horizontal`),
  addClass(striped, `${menuClass}-striped`),
)([]).join(' ');

export const TableRowOdd = getClass('pure-table-odd');

export const Unit = (options = {}) => getClass(unitClass('pure-u', options.fraction || WIDTHS.full, options.size));

export default {
  Hidden,
  OperaOnly,
  Button,
  ButtonGroup,
  Checkbox,
  Radio,
  ControlGroup,
  Controls,
  Form,
  FormGroup,
  FormMessage,
  FormMessageInline,
  Group,
  HelpInline,
  Image,
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuChildren,
  MenuHeading,
  MenuLink,
  MenuSeparator,
  Table,
  TableRowOdd,
  Unit,
};
