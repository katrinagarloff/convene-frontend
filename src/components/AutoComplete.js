import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { makeQuery } from '../adapter/index'
import { connect } from 'react-redux'

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng)
        this.props.makeQuery({lat: latLng.lat, lon: latLng.lng})
        return 'hello'
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
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
              {loading && <div>Loading...</div>}
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
    );
  }
}

export default connect(null, { makeQuery })(AutoComplete)
