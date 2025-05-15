const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = process.env.DATA_DIR || "/data";
const FILE_PATH = path.join(DATA_DIR, "location.txt");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }

app.post("/save-location", (req, res) => {
  const { latitude, longitude } = req.body;
  const data = `Latitude: ${latitude}\nLongitude: ${longitude}\n`;

  fs.appendFile(FILE_PATH, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send("Error saving location.");
    }

    console.log("Location saved to location.txt");
    res.send("Location saved successfully.");
  });
});

app.get("/location-data", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Error reading location data.");
    }

    res.type("text/plain").send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

