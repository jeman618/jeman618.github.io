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
    console.log("test")
    console.log(`GOT LOCATION:\n IP: ${userIP}\n Latitude: ${latitude}\n Longitude: ${longitude}`);
    res.send("Successful.");

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});