const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://ujtdeveloper:Ujt2336@cluster0.u1kfkoy.mongodb.net/ujt"
  )
  .then(() => {
    console.log("running succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  image_url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  pubDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  source_id: {
    type: String,
    required: true,
  },
});

const sports = mongoose.model("sports", NewsSchema);
const technologies = mongoose.model("technologies", NewsSchema);

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use("/public", express.static(path.join(__dirname, "./client/Public")));
app.use((req, res, next) => {
  // If the request URL contains a ".html" extension, remove it
  if (req.url.endsWith(".html")) {
    req.url = req.url.slice(0, -5); // Remove the last 5 characters (".html")
  }
  next();
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});

app.get("/newsPage/:id", (req, res) => {
  // console.log(req.params.id);
  res.sendFile(path.join(__dirname, "./client/newsPage.html"));
});

app.get("/sports", async (req, res) => {
  const data = await sports.find();

  res.json(data);
});
app.get("/sport", async (req, res) => {
  try {
    // Use the Mongoose model to search for the document
    const id=req.query.id;
    // console.log(id);
    const doc = await mongoose.model('sports').findById(id).exec();
    if (doc) {
      console.log('Found document:');
      res.json(doc);
    } else {
      console.log('Document not found');
    }
  } catch (err) {
    console.error('Error searching for document:', err);
  }
  //  finally {
  //   mongoose.connection.close();
  // }

});
app.get("/tech", async (req, res) => {
  try {
    // Use the Mongoose model to search for the document
    const id=req.query.id;
    // console.log(id);
    const doc = await mongoose.model('technologies').findById(id).exec();
    if (doc) {
      console.log('Found document:');
      res.json(doc);
    } else {
      console.log('Document not found');
    }
  } catch (err) {
    console.error('Error searching for document:', err);
  }
  //  finally {
  //   mongoose.connection.close();
  // }

});
app.get("/technology", async (req, res) => {
  const data = await technologies.find();

  res.json(data);
});
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Server started at http://localhost:" + port);
});
