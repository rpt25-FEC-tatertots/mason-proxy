const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('./public/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/overview/icons', (req, res) => {
  // console.log('REQUEST: ', req.query.product_id)
  const { product_id } = req.query;
  axios.get(`http://localhost:6007/overview/icons?product_id=${product_id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log('ERROR IN PROXY SERVER: ', error)
    })
})

app.listen(3000, () => {
  console.log('listening on port 3000!');
});