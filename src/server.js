const express = require("express");
const app = express();
// const fs = require("fs");
const port = process.env.PORT || 5000;
import jsonGhana from "../../factsheets_Ghana.json";

//console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.get("/", (req, res) => {
  // fs.readFile(
  //     __dirname,
  //     '..',
  //     'factsheets_Ghana.json',
  //     'utf8',
  //     (err, data) => {
  //         let jsonGhana = JSON.parse(data);
  //         res.writeHead(200, { 'Content-Type': 'application/JSON' });
  //         // for (var i = 0; i < jsonGhana.length; i++) {
  //         //     var panGhana = jsonGhana.Factsheets[i].PAN;
  //         //     res.write(JSON.stringify(panGhana));
  //         // }
  res.json(jsonGhana);
});
// });

app.get("*", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});
