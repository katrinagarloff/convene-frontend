import React, { Fragment } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { makeQuery, saveLocation } from '../adapter/index'
import { connect } from 'react-redux'

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      address: '',
      lat: null,
      lon: null
   };
  }

  handleChange = address => {
    this.setState({ address });
  };

  getLocationName = (name) => {
    this.setState({ locationName: name})
  }

  updateLonLat(lon, lat){
    this.setState({lon: lon, lat: lat})
  }

  handleSelect = address => {
    this.handleChange(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng)
        this.updateLonLat(latLng.lng, latLng.lat)
        this.props.makeQuery({lat: latLng.lat, lon: latLng.lng})
        return 'hello'
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    const { locationName, address, lat, lon } = this.state
    const popupText = "Give your new location a name:"
    return (
      <React.Fragment>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
            <div className="meetup-box">
              <input id='places-input'
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              </div>
              <div className="autocomplete-dropdown-container" id="suggestions">

                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#FFCCDC', cursor: 'pointer' }
                    : { backgroundColor: '#FFDDE8', cursor: 'pointer' };
                  return (
                    <div id="suggestion-dropdown"
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >

                      <span>{suggestion.description}</span>
                      <br/>
                      . . .
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
          { this.props.user.id && this.state.lat ?
            <div>
              <a href="#popup1">
              Save location
              </a>
              <div id="popup1" className="overlay">
	<div className="popup">
		<h2>{popupText}</h2>
		<a className="close" href="#">&times;</a>
		<div className="content">
			<input type="text" placeholder="home" onChange={(e) => this.getLocationName(e.target.value)}></input>
      <a href="#" onClick={() => this.props.saveLocation(
        {name: locationName,
        address: address,
        lon: lon,
        lat: lat,
        user_id: this.props.user.id})
      }>save</a>
		</div>
	</div>
</div>
            </div>
            :
            null
          }
      </React.Fragment>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { makeQuery, saveLocation })(AutoComplete)
