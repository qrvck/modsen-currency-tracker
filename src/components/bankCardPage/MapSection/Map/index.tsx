// import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import React from 'react';

import { MapContainer } from './styled';

mapboxgl.accessToken = 'pk.eyJ1IjoicXJ2Y2siLCJhIjoiY2xzczVidmJvMGQzZjJscXNmaTRnMHJzNSJ9.N9_Hl8i3QgNrDcABFZQb5g';

class Map extends React.PureComponent {
  mapContainer = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const mapContainer = this.mapContainer.current;

    if (mapContainer && !mapContainer.childNodes.length) {
      const map = new mapboxgl.Map({
        container: mapContainer,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [27.561831, 53.902284],
        zoom: 10,
      });

      map.on('load', () => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Construction on the Washington Monument began in 1848.'
        );

        new mapboxgl.Marker().setLngLat([27.549929, 53.870007]).setPopup(popup).addTo(map);
      });
    }
  }

  render() {
    return (
      <div>
        <MapContainer ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}

export { Map };
