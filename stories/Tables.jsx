import React from 'react';
import { uniqueId } from 'lodash';
import { object } from '@storybook/addon-knobs';
import { Group, Table } from '../src';

const DEFAULTS = {
  bordered: true,
  horizontal: false,
  striped: false,
};

const TABLE_DATA = {
  heading: ['Name', 'Real Name', 'Team'],
  data: [
    { name: 'Batman', realName: 'Bruce Wayne', team: 'Justice League' },
    { name: 'Ironman', realName: 'Tony Stark', team: 'Avengers' },
    {
      name: 'Superman',
      realName: 'Clark Kent (Kal-El)',
      team: 'Justice League',
    },
    { name: 'Thor', realName: 'Thor Odinson', team: 'Avengers' },
    { name: 'Flash', realName: 'Barry Allen', team: 'Justice League' },
    { name: 'Hulk', realName: 'Bruce Banner', team: 'Avengers' },
    { name: 'Wonder Woman', realName: 'Diana Prince', team: 'Justice League' },
    { name: 'Captain America', realName: 'Steve Rogers', team: 'Avengers' },
  ],
};

const Grid = () => (
  <Group container fullHeight style={{ padding: '.5rem 1rem' }}>
    <Table {...object('Table', DEFAULTS)}>
      <thead>
        <tr>
          {TABLE_DATA.heading.map(title => (
            <th key={uniqueId('heading_')}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {TABLE_DATA.data.map(record => (
          <tr>
            <td>{record.name}</td>
            <td>{record.realName}</td>
            <td>{record.team}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Group>
);

export default Grid;
