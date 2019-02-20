const express = require("express");
const app = express();
// const fs = require("fs");
const port = process.env.PORT || 5000;
const Api = require("./api");
const cors = require("cors");
const path = require("path");

app.use(cors());

app.get("/riskres", (req, res) => {
  Api()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
});

//console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve("public", "index.html"));
// });
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "public")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}
app.get("/crop", (req, res, next) => {
  res.send(factsheet);
});
