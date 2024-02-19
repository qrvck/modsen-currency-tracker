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

  componentDidMount() {
    const mapContainer = this.mapContainer.current;

    if (mapContainer && !mapContainer.childNodes.length) {
      const map = new mapboxgl.Map({
        container: mapContainer,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [27.561831, 53.902284],
        zoom: 10,
      });

      this.map = map;

      map.on('load', () => {
        const { bankBranches } = this.props;

        for (const branch of bankBranches) {
          const {
            postalAddress: { buildingNumber, streetName, townName, geolocation },
          } = branch;

          new mapboxgl.Marker()
            .setLngLat([geolocation.longitude, geolocation.latitude])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${streetName} ${buildingNumber}</h3><p>${townName}</p>`)
            )
            .addTo(map);
        }
      });
    }
  }

  // componentDidUpdate() {
  //   const map = this.map;
  //   const { bankBranches } = this.props;

  //   if (map) {
  //     for (const branch of bankBranches) {
  //       const {
  //         postalAddress: { buildingNumber, streetName, description, geolocation },
  //       } = branch;

  //       new mapboxgl.Marker()
  //         .setLngLat([geolocation.longitude, geolocation.latitude])
  //         .setPopup(
  //           new mapboxgl.Popup({ offset: 25 }).setHTML(
  //             `<h3>${streetName} ${buildingNumber}</h3>${description && <p>${description}</p>}`
  //           )
  //         )
  //         .addTo(map);
  //     }
  //   }
  // }

  render() {
    return (
      <div>
        <MapContainer ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}

export { Map };
