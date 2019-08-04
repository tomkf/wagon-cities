import React, { Component } from 'react';
import City from './city.jsx';

//  const cities = [
//     { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
//     { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
//     { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
//   ];

class CityList extends Component {

    render() {
        const displayCities = this.props.cities.map(cityItem => (  <City id={cityItem.id} key={cityItem.id} city={cityItem} />))
               return (
                  <div className="cities">
                  {displayCities}
                  </div>
              )
          }
        }

export default CityList