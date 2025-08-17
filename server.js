const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let products = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const item = req.body;
  products.unshift(item);
  res.json(item);
});

const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
