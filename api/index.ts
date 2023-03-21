import express from "express";
import bodyParser from "body-parser";

import trees from "../data/trees";

const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.get("/api", (req, res) => {
  res.send({
    routes: [
      {
        route: "/api/trees",
        description: "Get all trees",
        methods: ["GET"],
      },
    ],
  });
});

// vaccine data
app.get("/api/trees", (req, res) => {
  // Send the generated vaccine data as a JSON response
  res.send({ trees });
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`);
});
