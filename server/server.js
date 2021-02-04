const express = require('express');
const axios = require('axios');

const app = express();

app.use('/:product_id' ,express.static('./public/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/title/:product_id', (req, res) => {
  const { product_id } = req.params;
  axios.get(`http://localhost:5003/title/${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER FOR TITLE: ', error)
  })
})

app.get('/photos/:product_id', (req, res) => {
  const { product_id } = req.params;
  axios.get(`http://localhost:5001/photos/${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER FOR PHOTOS: ', error)
  })
})

app.get('/overview', (req, res) => {
  // console.log('REQUEST: ', req.query.product_id)
  const { product_id } = req.params;
  axios.get(`http://localhost:5007/overview`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER FOR OVERVIEW: ', error)
    })
})

app.get('/overview/:product_id', (req, res) => {
  // console.log('REQUEST: ', req.query.product_id)
  const { product_id } = req.params;
  axios.get(`http://localhost:5007/overview/${product_id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER FOR OVERVIEW 2: ', error)
    })
})

app.get('/similar', (req, res) => {
  const { product_id } = req.params;
  axios.get(`http://localhost:5008/similar/${product_id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER FOR SIMILAR: ', error)
    })
})

app.get('/similar/:product_id', (req, res) => {
  const { product_id } = req.params;
  axios.get(`http://localhost:5008/similar/${product_id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER FOR SIMILAR: ', error)
    })
})

// app.get('/api/locations', (req, res) => {
//   const { product_id } = req.query;
//   axios.get(`http://localhost:5002/api/locations?product_id=${product_id}`)
//     .then((response) => {
//       console.log('RESPONSE FROM LOCATIONS: ', response.data)
//       res.send(response.data)
//     })
//     .catch((error) => {
//       console.log('ERROR IN PROXY SERVER: ', error)
//     })
// })

app.listen(5000, () => {
  console.log('listening on port 5000!');
});