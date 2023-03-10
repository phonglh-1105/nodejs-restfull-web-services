const express = require('express');
require('dotenv').config({ path: '.env' });

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  res.send(/*html*/ `
    <form action="" method="post">
      <input type="text" placeholder="ProductName"/>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.get('/products', function (req, res) {
  res.json(products);
});
app.get('/products/:id', function (req, res) {
  const id = req.params.id;
  const product = products.find((p) => p.id == id);
  res.json(product);
});

app.post('/products', function (req, res) {
  const product = req.body;
  products.push(product);
  res.json(product);
});
app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.filter((p) => p.id == id);
  products.splice(products.indexOf(product), id);
  res.json({
    message: 'Product deleted',
    products,
  });
});
app.put('/products/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const newProducts = products.map((product) =>
    product.id == id ? body : product,
  );
  res.status(200).json({
    message: 'Product updated',
    products: newProducts,
  });
});
app.listen(port, function () {
  console.log(`Server is running http://localhost:${port}`);
});
