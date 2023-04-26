import Map from 'ol/Map.js';
import { Feature } from 'ol';
import OSM from 'ol/source/OSM.js';
import VectorSource from 'ol/source/Vector';
import { Point } from 'ol/geom.js';
import { Icon, Style } from 'ol/style.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector';
import View from 'ol/View.js';
import { fromLonLat } from 'ol/proj';

export class RenderMap {
  constructor(coords) {
    this.render(coords);
  }

  render({ lat, lng }) {
    document.getElementById('map').innerHTML = '';
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([lng, lat])),
      name: 'Current Location',
    });
    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://openlayers.org/en/latest/examples/data/icon.png',
      }),
    });
    iconFeature.setStyle(iconStyle);

    const map = new Map({
      target: 'map',
      view: new View({
        center: fromLonLat([lng, lat]),
        zoom: 12,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [iconFeature],
          }),
        }),
      ],
    });
  }
}
