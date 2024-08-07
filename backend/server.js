const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
const productRoutes = require('./routes/productRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');


// Use routes
app.use('/api', [productRoutes,purchaseRoutes]);


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
