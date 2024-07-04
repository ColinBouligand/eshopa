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

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
