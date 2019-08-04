import React, { Component } from 'react';
import City from './city.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index.js';

class CityList extends Component {

componentWillMount(){
this.props.setCities()
}

    render() {
        const displayCities = this.props.cities.map(cityItem => (  <City id={cityItem.id} key={cityItem.id} city={cityItem} />))
               return (
                  <div className="cities">
                  {displayCities}
                  </div>
              )
          }
        }

function mapDispatchToProps(dispatch) {
            return bindActionCreators(
              { setCities: setCities },
              dispatch
            )
          }
          
function mapStateToProps(state) {
            return {
              cities: state.cities,
            }
          }
        


export default connect(mapStateToProps)(CityList);
