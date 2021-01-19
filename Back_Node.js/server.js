const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const config = require("./app/config");
const albums = require("./app/albums");
const artists = require("./app/artists");
const tracks = require("./app/tracks");
const users = require("./app/users");
const trackHistory = require("./app/track_history");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));

const run = async () => {
  await mongoose.connect(`${config.db.url}/${config.db.name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongodb connected");
  app.use("/artists", artists());
  app.use("/tracks", tracks());
  app.use("/albums", albums());
  app.use("/users", users());
  app.use("/track_history", trackHistory());
  app.listen(port, () => {
    console.log("server started on port: ", port);
  });
};

run().catch(console.error);
