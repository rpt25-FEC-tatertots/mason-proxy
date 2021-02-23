const express = require('express');
const axios = require('axios');
const cors = require('cors');
const compression = require('compression');
const app = express();

app.use(compression());
app.use('/:product_id', express.static('./public/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/product/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED PRODUCT ROUTE')
  axios.get(`http://54.241.34.87:5004/product/${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER FOR PHOTOS: ', error)
  })
});

app.get('/title/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED TITLE ROUTE')
  axios.get(`http://54.241.34.87:5005/title/${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER FOR TITLE: ', error)
  })
});

app.get('/reviews/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED REVIEWS ROUTE')
  axios.get(`http://54.241.34.87:5005/reviews/${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER FOR PHOTOS: ', error)
  })
});

app.get('/images/mainImages/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED IMAGES ROUTE')
  axios.get(`http://54.241.34.87:5003/images/mainImages/${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER FOR PHOTOS: ', error)
  })
})

app.get('/images/thumbnailImages/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED IMAGES THUMBNAIL ROUTE')
  axios.get(`http://54.241.34.87:5003/images/thumbnailImages/${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER FOR PHOTOS: ', error)
  })
})

app.get('/images/detailedImages/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED IMAGES DETAILED ROUTE')
  axios.get(`http://54.241.34.87:5003/images/detailedImages/${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER FOR PHOTOS: ', error)
  })
})

app.get('/inventory/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED INVENTORY ROUTE')
  axios.get(`http://54.241.34.87:5004/inventory/${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER FOR PHOTOS: ', error)
  })
})

app.get('/photos/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED DETAILED IMAGES ROUTE')
  axios.get(`http://3.136.32.206:5001/photos/${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER FOR PHOTOS: ', error)
  })
})

app.get('/overview/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED OVERVIEW ROUTE')
  axios.get(`http://3.16.235.27:5007/overview/${product_id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER FOR OVERVIEW 2: ', error)
    })
})

app.get('/similar/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED SIMILAR ROUTE')
  axios.get(`http://3.16.235.27:5008/similar/${product_id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER FOR SIMILAR: ', error)
    })
})

app.get('/locations/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED LOCATIONS ROUTE')
  axios.get(`http://3.136.32.206:5002/locations/${product_id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER: ', error)
    })
})

app.get('/materials/:product_id', (req, res) => {
  const { product_id } = req.params;
  console.log('PINGED MATERIALS ROUTE')
  axios.get(`http://3.136.32.206:5002/materials/${product_id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER: ', error)
    })
})

app.listen(5000, () => {
  console.log('listening on port 5000!');
});