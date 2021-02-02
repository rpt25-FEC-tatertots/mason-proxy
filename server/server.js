const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('./public/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/photos', (req, res) => {
  const { product_id } = req.query;
  axios.get(`http://localhost:5001/photos?product_id=${product_id}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('ERROR IN PROXY SERVER: ', error)
  })
})

app.get('/overview/icons', (req, res) => {
  // console.log('REQUEST: ', req.query.product_id)
  const { product_id } = req.query;
  axios.get(`http://localhost:5007/overview/icons?product_id=${product_id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER: ', error)
    })
})

app.get('/similar', (req, res) => {
  res.send(200);
})

app.get('/api/locations', (req, res) => {
  const { product_id } = req.query;
  axios.get(`http://localhost:5002/api/locations?product_id=${product_id}`)
    .then((response) => {
      console.log('RESPONSE FROM LOCATIONS: ', response.data)
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER: ', error)
    })
})

app.listen(5000, () => {
  console.log('listening on port 5000!');
});