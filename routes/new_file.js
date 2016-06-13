var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var underscore = require('underscore');
var request = require('request');
var Zone = require('../models/zone');
var http = require("http");
var ZonePrice = require('../models/zonePrice');
var unirest = require('unirest');
var httpinvoke = require('httpinvoke');
var async = require("async");
var package = require("../package.json");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var pageSize = 10; //每页十条记录


var BJRegion = ["chaoyang", "haidian", "fengtai", "dongchenga", "xicheng", "chongwen", "xuanwu",
    "shijingshan", "changping", "tongzhou", "daxing", "shunyi", "huairou", "fangshan",
    "mentougou", "miyun", "pinggua", "yanqing", "zhoubiana"
];

async.forEachOfSeries(BJRegion,function(region, key, callback) {

    var count = 0;

    console.log("region.....", region);
 

    async.whilst(
        function() {
            return count < 2;
        },
        function(cb) {
            count++;
            // createZones(region, count);
            console.log("region:", region, "count:", count);
            setTimeout(cb, 500);
        },
        function(err, count) {

            console.log("err...........", err, count);


        }
    ); //whilst
callback();

});