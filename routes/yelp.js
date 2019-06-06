const express = require('express'),
  router = express.Router(),
  yelp = require('../models/yelpcopy');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const businesses = await yelp.getAllBusinesses();
  const reviews = await yelp.getAllBusinessReviews();

  res.render('template', { 
    locals:{
      title: 'Yelp Copy',
      businesses: businesses,
      yelpReviews: reviews
    },
    partials:{
      partial: 'partial-yelp'
    }
  });
});

router.post('/:businessID', async function(req, res) {

  const { review, stars, id } = req.body;

  await yelp.addReview(review, stars, id);
  
  const singleBusiness = await yelp.getOneBusiness(id)
  const singleBusinessReviews = await yelp.getOneBusinessReviews(id);

  res.render('template', { 
    locals:{
      title: 'Yelp Copy',
      business: singleBusiness,
      businessReviews: singleBusinessReviews
    },
    partials:{
      partial: 'partial-yelp-single-business'
    }
  });
});

router.get('/:businessID', async function(req, res, next) {
  const {businessID} = req.params;
  const singleBusiness = await yelp.getOneBusiness(businessID)
  const singleBusinessReviews = await yelp.getOneBusinessReviews(businessID);

  res.render('template', { 
    locals:{
      title: 'Yelp Copy',
      business: singleBusiness,
      businessReviews: singleBusinessReviews
    },
    partials:{
      partial: 'partial-yelp-single-business'
    }
  });
});

module.exports = router;