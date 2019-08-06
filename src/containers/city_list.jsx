import React, { Component } from 'react';
import City from './city.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CityList extends Component {

  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  };

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
  }
        
          
function mapStateToProps(state) {
            return {
              cities: state.cities
          }

export default connect(mapStateToProps)(CityList);
