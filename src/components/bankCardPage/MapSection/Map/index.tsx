// import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import React from 'react';

import { MapContainer } from './styled';

mapboxgl.accessToken = 'pk.eyJ1IjoicXJ2Y2siLCJhIjoiY2xzczVidmJvMGQzZjJscXNmaTRnMHJzNSJ9.N9_Hl8i3QgNrDcABFZQb5g';

const data = [
  {
    addressLine: 'ул. Соломовой, 82',
    description: 'Магазин "Фламинго"',
    geolocation: { latitude: 53.663425, longitude: 23.784927 },
  },
  {
    addressLine: 'переулок Пожарный, 17-1',
    description: 'ОАО "Банк БелВЭБ"',
    geolocation: { latitude: 53.89827, longitude: 30.337175 },
  },
  {
    addressLine: 'ул. Перспективная, 12',
    description: 'Универсам "Славянский"',
    geolocation: { latitude: 53.931282, longitude: 27.357094 },
  },
];

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
        for (const item of data) {
          new mapboxgl.Marker()
            .setLngLat([item.geolocation.longitude, item.geolocation.latitude])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${item.addressLine}</h3><p>${item.description}</p>`)
            )
            .addTo(map);
        }
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
