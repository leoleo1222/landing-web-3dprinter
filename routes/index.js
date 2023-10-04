var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/* Display all Bookings */
router.get('/nick', async function (req, res) {

  // let results = await db.collection("bookings").find().toArray();
  res.render('nick', {
    title: 'NICK'
  });
});

/* Display all Bookings */
router.get('/bella', async function (req, res) {

  // let results = await db.collection("bookings").find().toArray();
  res.render('BELLA', {
    title: 'BELLA'
  });
});


module.exports = router;