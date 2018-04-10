import React from "react";
import CarMake from "./CarMake";

const carMakesUrl = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

class CarMakes extends React.Component {
  constructor(props) {
    super(props);

    this.loadCarMakes = this.loadCarMakes.bind(this);

    this.state = {
      carMakes: []
    };
  }

  loadCarMakes () {
    fetch(carMakesUrl)
      .then(response => {
        return response.json();
      }).then(json => {
        this.setState({
          carMakes: [...this.state.carMakes, ...json]
        })
      }).catch(ex => {
        console.log(ex);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.carMakes.map(item => (
              <CarMake key={item.nome} name={item.nome} />
            ))
          }
        </ul>
        {this.state.carMakes.length < 1 ? <button type="button" onClick={this.loadCarMakes}>Press Button</button> : null}
      </div>
    );
  }
}

export default CarMakes;