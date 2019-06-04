var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('template', { 
    locals:{
      title: 'Yelp Copy'
    },
    partials:{
      partial: 'partial-yelp'
    }
  });
});

module.exports = router;
