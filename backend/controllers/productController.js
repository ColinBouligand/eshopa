const axios = require("axios");

const apiUrl = "https://www.cheapshark.com/api/1.0/deals";

// Get all products
exports.getProducts = async (_req, res) => {
  try {
    // Free API from https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
