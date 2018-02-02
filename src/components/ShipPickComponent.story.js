import React from 'react';
import { storiesOf } from '@storybook/react';
import ShipPickComponent from './ShipPickComponent';
import '../index.css';

storiesOf('ShipPickComponent', module).add('Happy path', () =>
  <ShipPickComponent
  Ships={[

	{name:'Carrier',
	id:1},

	{name:'Destroyer',
	id:2}
]}
  />
);