const express = require("express");
const bodyParser = require("body-parser");
const galaxiesRoute = require("./api/galaxies");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public")); 

app.use("/api/galaxies", galaxiesRoute);

app.listen(PORT, () => {
  console.log(`Galaxy API server is running on http://localhost:${PORT}`);
});
