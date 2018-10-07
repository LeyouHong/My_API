const express = require('express');
const Picture = require('../models/picture');
const router = express.Router();

router.get('/random-picture', (req, res) => {
  Picture.find({}).exec((err, pic) => {
      if (err) {
        return res.json({success: false, message: 'get picture failed'});
      }
      console.log(pic)
      var randomNum = Math.floor(Math.random() * pic.length)
      console.log(randomNum)
      res.json({success: true, message: pic[randomNum].url});
    });
});

module.exports = router;
