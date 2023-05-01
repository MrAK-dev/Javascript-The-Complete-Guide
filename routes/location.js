const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const router = express.Router();
const url =
  'mongodb+srv://user:hYU50Ruu7r7a1xun@cluster0.jbcie.mongodb.net/locationsJSCompleteGuide';
const client = new MongoClient(url);

// In memory storage
// const locationStorage = {
//   locations: [
//     { id: 1, address: 'Somewhere on Earth', coords: { lat: 123, lng: 321 } },
//   ],
// };

router.post('/add-location', (req, res, next) => {
  // const id = Math.random();

  async function main() {
    // Use connect method to connect to the server
    await client.connect();

    const db = client.db('locationsJSCompleteGuide');
    const collection = db.collection('user-locations');
    const result = await collection.insertOne({
      address: req.body.address,
      coords: { lat: req.body.lat, lng: req.body.lng },
    });

    res.json({
      message: 'Stored location!',
      locId: result.insertedId,
    });

    return 'done.';
  }

  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

  // locationStorage.locations.push({
  //   id,
  //   address: req.body.address,
  //   coords: { lat: req.body.lat, lng: req.body.lng },
  // });
  // console.log(locationStorage);
});

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;
  if (locationId.length < 24) {
    return res.status(400).json({ message: 'Invalid id' });
  }
  async function main() {
    await client.connect();

    const db = client.db('locationsJSCompleteGuide');
    const collection = db.collection('user-locations');
    try {
      const filteredLocationResult = await collection.findOne({
        _id: new ObjectId(locationId),
      });
      res.json({
        address: filteredLocationResult.address,
        coordinates: filteredLocationResult.coords,
      });
    } catch (error) {
      return res.status(404).json({ message: 'Not found!', error });
    }

    return 'done.';
  }

  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

  // const location = locationStorage.locations.find((loc) => {
  //   return loc.id === locationId;
  // });
});

module.exports = router;
