import React from 'react';
import GoogleMapReact from 'google-map-react';

import "components/EvaMap/EvaMap.css";


export default function EvaMap() {
    console.log("here", process.env.REACT_APP_MAPS_API_KEY)
    let initialPosition = {
    center: {
      lat: 19.4978,
      lng: -99.1269,
    },
    zoom: 12,
  };

  return (
      // Important! Always set the container height explicitly
      <div id="EvaMap" className="evaMap  justify-content-md-left">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY! }}
          defaultCenter={initialPosition.center}
          defaultZoom={initialPosition.zoom}
        />
      </div>
    );
}
