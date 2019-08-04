import React, { Component } from 'react';

//  const cities = [
//     { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
//     { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
//     { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
//   ];

class City extends Component {

    render() {
        return (
        <div className="city">
        <h1>{this.props.city.name}</h1>
        <h3>{this.props.city.address}</h3>
        <h3>{this.props.city.slug}</h3>
        </div>
            )
   }
}

export default City;