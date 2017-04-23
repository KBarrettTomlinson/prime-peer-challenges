var express = require('express');
var router = express.Router();

router.get('/',function spaceshipWelcome(req,res){
  res.send("Welcome to the spaceship factory!");
});

module.exports = router;
