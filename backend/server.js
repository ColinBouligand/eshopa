const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/products", async (_req, res) => {
  try {
    // Free API from https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
    const apiUrl = "https://www.cheapshark.com/api/1.0/deals";
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

let cart = [];

// Endpoint to get products (mock data for now)
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }
  ];
  res.json(products);
});

// Add to cart
app.post('/api/cart', (req, res) => {
  const { productId } = req.body;
  cart.push(productId);
  res.json({ message: 'Product added to cart' });
});

// Remove from cart
app.delete('/api/cart/:productId', (req, res) => {
  const { productId } = req.params;
  cart = cart.filter(id => id !== parseInt(productId));
  res.json({ message: 'Product removed from cart' });
});

// Get cart items
app.get('/api/cart', (req, res) => {
  res.json(cart);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
