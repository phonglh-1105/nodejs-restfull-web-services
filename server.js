const express = require('express');
const productRouter = require('./routes/product');

require('dotenv').config({ path: '.env' });

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use('/api/', productRouter);

app.listen(port, function () {
  console.log(`Server is running http://localhost:${port}`);
});
