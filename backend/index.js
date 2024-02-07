const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mockData = require("./mock_data.json");
const userData = require("./user.json");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/api/all-products", (req, res) => {
  shuffleArray(mockData.products);
  res.json(mockData);
});

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const authenticatedUser = userData.find(
      (user) => user.username === username && user.password === password
    );

    if (authenticatedUser) {
      // Authentication successful
      res.json({ success: true, message: "Authentication successful" });
    } else {
      // Authentication failed
      res.json({ success: false, message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
