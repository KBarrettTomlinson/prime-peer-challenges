var express = require("express");
var router = express.Router();
var spaceshipParts = require('../modules/spaceship-parts');

router.get('/', function(req, res){ // parts/parts baby DONE
  res.send(spaceshipParts);
});

router.post('/new', function(req, res){ // keep me posted if you solve this oneDONE
  spaceshipParts.push(req.body);
  res.sendStatus(200);
});

router.get('/rocketCount', function(req, res){ // count your rockets or rocket your count?DONE
  var numberOfSpaceships = Math.floor(spaceshipParts[0].inStock/spaceshipParts[0].needed);
  for(var i = 1; i < spaceshipParts.length; i++){
    numberOfSpaceships = Math.min(numberOfSpaceships, Math.floor(spaceshipParts[i].inStock/spaceshipParts[i].needed));
  }

  var howMany = { count: numberOfSpaceships };
  res.send(howMany);  // numberOfSpaceships is a number, how does express like that? howMany ways to say this...DONE
});

module.exports = router;
