const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const galaxiesRoute = require("./routes/galaxies");

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable for Vercel

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the public directory

// Set up your routes
app.use("/api/galaxies", galaxiesRoute);

// Fallback route to serve index.html for all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Galaxy API server is running on http://localhost:${PORT}`);
});
