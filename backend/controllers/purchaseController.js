const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

// Path to your data file
const dataFilePath = path.join(__dirname, "../data.json");

// Function to read data from the file
function readData() {
  try {
    const data = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return { purchases: [] };
  }
}

// Function to write data to the file
function writeData(data) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing data:", error);
  }
}

// Create a purchase & save it to JSON
exports.createPurchase = async (req, res) => {
  try {
    const data = readData();
    // Add the purchase to existing one and add it an Id and a timestamp

    data.purchases.push({
      ...req.body,
      purchaseId: uuidv4(),
      purchaseDate: new Date(),
    });
    writeData(data);
    res.json(data);
  } catch (error) {
    console.error("Error reading purchases:", error);
    res.status(500).json({ error: "Failed read purchases" });
  }
};

// Get all purchases
exports.getPurchases = async (_req, res) => {
  try {
    const response = readData();
    res.json(response['purchases']);
  } catch (error) {
    console.error("Error reading purchases:", error);
    res.status(500).json({ error: "Failed read purchases" });
  }
};
