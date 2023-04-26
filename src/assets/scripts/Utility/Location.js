export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);

  const response = await fetch(
    `https://geocode.maps.co/search?q=${urlAddress}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please try again!');
  }

  const data = await response.json();

  if (data.error_message) {
    throw new Error(data.error_message);
  }

  const coordinates = [data[0].lat, data[0].lon];

  return coordinates;
}

export async function getAddressFromCoords({ lat, lng }) {
  const response = await fetch(
    `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch address. Please try again!');
  }
  const data = await response.json();

  if (data.error_message) {
    throw new Error(data.error_message);
  }
  const address = `${data.address.house_number} ${data.address.road},${data.address.borough}, ${data.address.city} ${data.address.postcode}, ${data.address.country}`;
  return address;
}
