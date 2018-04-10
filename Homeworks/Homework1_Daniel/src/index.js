import './main.scss';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import CarMakes from './js/components/CarMakes';

ReactDOM.render(
  <CarMakes />,
  document.getElementById('root')
);
