const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')



app.get('/', (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});



mongoose.connect('mongodb+srv://mabanoub826_db_user:X1DLOdnTIxCYF373@cluster0.4vbiftl.mongodb.net/all-data?appName=Cluster0').then(() => {
 app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});