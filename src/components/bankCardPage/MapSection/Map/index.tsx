// import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import React from 'react';

import { IBankBranch } from '@/api/bankBranches/types';

import { MapContainer } from './styled';

mapboxgl.accessToken = 'pk.eyJ1IjoicXJ2Y2siLCJhIjoiY2xzczVidmJvMGQzZjJscXNmaTRnMHJzNSJ9.N9_Hl8i3QgNrDcABFZQb5g';

interface IMapProps {
  bankBranches: IBankBranch[];
}

class Map extends React.PureComponent<IMapProps> {
  mapContainer = React.createRef<HTMLDivElement>();
  map: mapboxgl.Map | null = null;
  mapboxMarkers: mapboxgl.Marker[] = [];

  componentDidMount() {
    const mapContainer = this.mapContainer.current;

    if (mapContainer && !mapContainer.childNodes.length) {
      const map = new mapboxgl.Map({
        container: mapContainer,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [27.561831, 53.902284],
        zoom: 5,
      });

      this.map = map;

      map.on('load', () => {
        this.addMarkers();
      });
    }
  }

  componentDidUpdate() {
    const map = this.map;
    const { mapboxMarkers } = this;

    if (map && map.loaded()) {
      for (const marker of mapboxMarkers) {
        marker.remove();
      }

      mapboxMarkers.length = 0;

      this.addMarkers();
    }
  }

  addMarkers = () => {
    const map = this.map!;
    const { bankBranches } = this.props;

    for (const branch of bankBranches) {
      const {
        postalAddress: { buildingNumber, streetName, townName, geolocation },
      } = branch;

      const marker = new mapboxgl.Marker()
        .setLngLat([geolocation.longitude, geolocation.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${streetName} ${buildingNumber}</h3><p>${townName}</p>`)
        )
        .addTo(map);

      this.mapboxMarkers.push(marker);
    }
  };

  render() {
    return (
      <div>
        <MapContainer ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}

export { Map };
