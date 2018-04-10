import React from 'react';
import { string } from 'prop-types';

class CarMake extends React.Component {
  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

CarMake.propTypes = {
  name: string.isRequired
};

export default CarMake;