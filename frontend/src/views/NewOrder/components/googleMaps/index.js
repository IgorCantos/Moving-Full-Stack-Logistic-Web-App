import React from 'react';
import GoogleMapReact from 'google-map-react';
import './styles.css'
import Marker from '../marker';
import Geocode from "react-geocode";
import { Tooltip } from '../marker/styles';
import propTypes from 'prop-types';

Geocode.setApiKey("AIzaSyBo7OKEy-HHKQh9PrP7fYB0PGz2oIRA6UQ");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

export class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultCenter: {
        lat: -23.5620284,
        lng: -46.6555644
      },
      markers: []
    }
  }

  static get propTypes() {
    return {
      parentState: propTypes.any
    }
  }

  componentDidUpdate(prevProps) {
    const { parentState } = this.props;

    let markersArray = []

    if (parentState.originAddress != '') {
      Geocode.fromAddress(parentState.originAddress).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          markersArray.push({
            key: '1',
            text: "Origem",
            latitude: lat,
            longitude: lng
          })

          if (parentState.originAddress != '' && parentState.originAddress != prevProps.parentState.originAddress) {
            this.setState({
              markers: markersArray
            })
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }

    if (parentState.destinyAddress != '') {
      Geocode.fromAddress(parentState.destinyAddress).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          markersArray.push({
            key: '2',
            text: "Destino",
            latitude: lat,
            longitude: lng
          })

          if (parentState.destinyAddress != '' && parentState.destinyAddress != prevProps.parentState.destinyAddress) {
            this.setState({
              markers: markersArray
            })
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  componentWillUnmount() {
    this.setState({
      markers: []
    })
  }

  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBo7OKEy-HHKQh9PrP7fYB0PGz2oIRA6UQ' }}
          defaultCenter={this.state.defaultCenter}
          zoom={11}
        >
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              text={marker.text}
              lat={marker.latitude}
              lng={marker.longitude}
            >
              <Tooltip>
                {marker.text}
              </Tooltip>
            </Marker>
          ))}
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMaps