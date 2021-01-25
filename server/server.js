const express = require('express');

const app = express();

app.use(express.static('./public/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(6001, () => {
  console.log('listening on port 6001!');
});