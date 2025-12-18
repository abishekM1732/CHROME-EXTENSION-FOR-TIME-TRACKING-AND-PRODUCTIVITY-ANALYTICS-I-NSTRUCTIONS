const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/timetracker")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  const categories = {
  "leetcode.com": "productive",
  "github.com": "productive",
  "stackoverflow.com": "productive",
  "geeksforgeeks.org": "productive",

  "www.youtube.com": "unproductive",
  "instagram.com": "unproductive",
  "www.facebook.com": "unproductive",
  "twitter.com": "unproductive"
};

// Schema
const TimeSchema = new mongoose.Schema({
  site: String,
  timeSpent: Number,
  category: String,
  date: {
    type: Date,
    default: Date.now
  }
});


const TimeModel = mongoose.model("Time", TimeSchema);

// API to store data
app.post("/track", async (req, res) => {
  const { site, timeSpent } = req.body;

  const category = categories[site] || "neutral";

  await TimeModel.create({
    site,
    timeSpent,
    category
  });

  res.json({ message: "Data saved", category });
});


// API to get all data
app.get("/data", async (req, res) => {
  const data = await TimeModel.find();
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/analytics", async (req, res) => {
  const data = await TimeModel.aggregate([
    {
      $group: {
        _id: "$category",
        totalTime: { $sum: "$timeSpent" }
      }
    }
  ]);
  res.json(data);
});

app.get("/weekly", async (req, res) => {
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);

  const data = await TimeModel.aggregate([
    { $match: { date: { $gte: lastWeek } } },
    {
      $group: {
        _id: "$category",
        totalTime: { $sum: "$timeSpent" }
      }
    }
  ]);

  res.json(data);
});

app.get("/sites-by-category", async (req, res) => {
  const data = await TimeModel.aggregate([
    {
      $group: {
        _id: "$category",
        sites: { $addToSet: "$site" }
      }
    }
  ]);

  res.json(data);
});

app.get("/weekly-report", async (req, res) => {
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);

  const data = await TimeModel.aggregate([
    { $match: { date: { $gte: lastWeek } } },
    {
      $group: {
        _id: {
          site: "$site",
          category: "$category"
        },
        totalTime: { $sum: "$timeSpent" }
      }
    },
    {
      $sort: { totalTime: -1 }
    }
  ]);

  res.json(data);
});
