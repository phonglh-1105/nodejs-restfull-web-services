const http = require('http');

const port = 3000;
const host = 'localhost';

const server = http.createServer(function (req, res) {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ];

  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end(/*html*/ `
        <form action="/products" method="post">
            <input type="text" placeholder="Product Name" name="productName" />
            <button>Submit</button>
        </form>`);
  }

  if (req.url == '/products') {
    res.setHeader('Content-Type', 'application/json');
    products.push({ id: 3, name: 'Product 3' });
    res.end(JSON.stringify(products));
  }
});

server.listen(port, host, function () {
  console.log(`Server is running http://${host}:${port}`);
});
