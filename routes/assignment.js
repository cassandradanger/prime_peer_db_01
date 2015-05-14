var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Assignment = require('../models/assignment');


router.get('/', function(request, response, next){
    Assignment.find(function(err, data){
        if(err) return next(err);
        response.json(data);
    });
});

router.post('/', function(request, response, next){
    Assignment.create(request.body, function(err, post){
        if(err) return next(err);
        response.json(post);
    });
});

router.put('/:id', function(request, response, next){
    Assignment.findByIdAndUpdate(request.params.id, request.body, function(err, post){
        if(err) return next(err);
        response.json(post);
    });
});

router.delete('/:id', function(request, response, next){
    Assignment.findByIdAndRemove(request.params.id, request.body, function(err, post){
        if(err) return next(err);
        response.json(post);
    });
});


console.log("assignment route loaded");
module.exports = router;
