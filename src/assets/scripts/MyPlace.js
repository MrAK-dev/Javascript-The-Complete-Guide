import '../libs/normalize.css';
import '../styles/_fonts.scss';
import '../styles/_app.css';
import '../styles/_my-place.css';

import { RenderMap as Map } from './UI/Map';

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector('header h1');
    headerTitleEl.textContent = address;
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
// const coords = {
//   lat: parseFloat(queryParams.get('lat')),
//   lng: parseFloat(queryParams.get('lng')),
// };
// const address = queryParams.get('address');
const locId = queryParams.get('location');
fetch(`https://simple-backend-js-complete-guide.onrender.com/location/${locId}`)
  .then((response) => {
    if (response.status === 400) {
      throw new Error('Invalid id!');
    }
    if (response.status === 404) {
      throw new Error('Could not find location!');
    }
    return response.json();
  })
  .then((data) => {
    new LoadedPlace(data.coordinates, data.address);
  })
  .catch((error) => {
    alert(error.message);
  });
