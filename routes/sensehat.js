var express = require('express');
var router = express.Router();

var Sensehat = require('../models/Sensehat.js');

/* GET /sensehat listing. */
router.get('/', function(req, res, next) {
  Sensehat.find().distinct('sensor', function(err, sensehat){
  //Sensehat.find({},'sensor',function (err, sensehat) {
    if (err) return next(err);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.json(sensehat);
  });
});

/* POST /sensehat */
router.post('/', function(req, res, next) {
  Sensehat.create(req.body, function (err, post) {
    if (err) return next(err);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* GET /sensehat/sensor_name */
router.get('/:sensor', function(req, res, next) {
  Sensehat.findOne({"sensor" : req.params.sensor}, {}, { sort: { 'timestamp' : -1 } }, function (err, post) {
    if (err) return next(err);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* GET /sensehat/sensor_name/historic */
router.get('/:sensor/historic', function(req, res, next) {
  Sensehat.find({"sensor" : req.params.sensor}, {}, { sort: { 'timestamp' : -1 } , limit : 300}, function (err, post) {
    if (err) return next(err);
    res.header('Access-Control-Allow-Origin', '*');
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
