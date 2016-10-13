var express = require('express');
var router = express.Router();

var Sensehat = require('../models/Sensehat.js');

/* GET /sensehat listing. */
router.get('/', function(req, res, next) {
  Sensehat.find(function (err, sensehat) {
    if (err) return next(err);
    res.json(sensehat);
  });
});

/* POST /sensehat */
router.post('/', function(req, res, next) {
  Sensehat.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /sensehat/sensor_name */
router.get('/:sensor', function(req, res, next) {
  Sensehat.find({"sensor" : req.params.sensor}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// /* PUT /todos/:id */
// router.put('/:id', function(req, res, next) {
//   Sensehat.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* DELETE ALL /sensehat/deleteall */
router.delete('/deleteall', function(req, res, next) {
  Sensehat.remove({ }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE an Item /sensehat/:id */
router.delete('/:id', function(req, res, next) {
  Sensehat.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
