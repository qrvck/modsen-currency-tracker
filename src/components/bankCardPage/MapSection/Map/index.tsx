import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import React, { createRef, PureComponent } from 'react';

import {
  INITIAL_ZOOM_OF_MAP,
  LATITUDE_OF_INITIAL_MAP_CENTER,
  LONGITUDE_OF_INITIAL_MAP_CENTER,
  MAP_STYLE_LINK,
} from './constants';
import { MapContainer } from './styled';

mapboxgl.accessToken = process.env.MAP_API_TOKEN || '';

import { IMapProps } from './types';

class Map extends PureComponent<IMapProps> {
  mapContainer = createRef<HTMLDivElement>();
  map: mapboxgl.Map | null = null;
  mapboxMarkers: mapboxgl.Marker[] = [];

  componentDidMount() {
    const mapContainer = this.mapContainer.current;

    if (mapContainer && !mapContainer.childNodes.length) {
      const map = new mapboxgl.Map({
        container: mapContainer,
        style: MAP_STYLE_LINK,
        center: [LONGITUDE_OF_INITIAL_MAP_CENTER, LATITUDE_OF_INITIAL_MAP_CENTER],
        zoom: INITIAL_ZOOM_OF_MAP,
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
        <MapContainer ref={this.mapContainer} />
      </div>
    );
  }
}

export { Map };
