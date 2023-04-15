const express = require("express");
const router = express.Router();

router.get("/shelters", (req, res) => {
  res.render("shelters/index");
});

router.get("/shelters/new", (req, res) => {
    res.render("shelters/new");
    }
);

