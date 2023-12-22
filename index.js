const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001;

// Define allowedOrigin using environment variable or default value
const allowedOrigin = process.env.AccessControlAllowOrigin || "https://jobhub-jilan.web.app";

const catagories = require("./data/catagories.json");
const news = require("./data/news.json");

// Enable CORS for the specific allowedOrigin
app.use(
  cors({
    origin: allowedOrigin,
  })
);

app.get("/", (req, res) => {
  res.send("this is jlian. okay?");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get(`/news/:id`, (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/catagories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedCatagories = news.filter(
    (catagory) => parseInt(catagory.category_id) === id
  );
  res.send(selectedCatagories);
});

app.listen(port, () => {
  console.log(`port is running on : ${port}`);
});
