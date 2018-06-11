const express = require("express");
let friends = require("../data/friends");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    console.log("Reading API");
    res.json(friends);
  });

  app.post("/api/match", (req, res) => {
    let userData = req.body;
    let match = [];
    function compatibility (arr1, arr2, index) {
      let totalDifference = 0;
      let i = 0;
      for (i; i < arr1.length; i++) {
        totalDifference += Math.abs(arr1[i] - arr2[i]);
      }
      match.push({[index]:totalDifference});
    }
    friends.forEach((friend, index) => {
      compatibility(friend.scores.map(Number), userData.scores.map(Number), index);
    })

    let matchIndex = function (object) {
      var shortest = Number.MAX_VALUE;
      var prop;
      for (var key in object) {
        if (object[key] < shortest) {
          shortest = object[key];
          prop = key;
        }
      };
      return prop;
    };
    console.log(match);
    let flatMatch = Object.assign(...match);
    let index = matchIndex(flatMatch);
    console.log(matchIndex(flatMatch));
    console.log('Ideal Match', friends[matchIndex(flatMatch)]);

    friends.push(userData);
    res.json(friends[index])
  });
};
