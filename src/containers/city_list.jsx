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
    return (
      <div className="city-list">
      {this.props.setCities().payload.map( (city,index) => {
        return <City key={index+1}
              name={city.name}
              address={city.address}
              slug={city.slug}
              />
      })}
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
