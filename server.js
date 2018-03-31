const express = require("express");
const app = express();
const path = require("path");

// Force HTTPS.
app.use(function(req, res, next) {
  if (req.headers["x-forwarded-proto"] == "http") {
    return res.redirect(301, "https://" + req.headers.host + "/");
  } else {
    return next();
  }
});

// Serve static files.
app.use(express.static(__dirname + "/dist"));

// Serve index for all requests.
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

// Start server.
app.listen(process.env.PORT || 8080);
