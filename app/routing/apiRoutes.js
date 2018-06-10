const express = require("express");
let friends = require("../data/friends");


module.exports = app => {

  app.get('/api/friends', function(req, res) {
    console.log("Reading API");
    res.json(friends);
  });

}