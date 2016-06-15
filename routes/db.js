var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var underscore = require('underscore');
var request = require('request');
var Zone = require('../models/zone');
var CrawlerPage = require('../models/crawlerPage');
var http = require("http");
var ZonePrice = require('../models/zonePrice');
var unirest = require('unirest');
var httpinvoke = require('httpinvoke');
var async = require("async");
var package = require("../package.json");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var pageSize = 10; //每页十条记录

mongoose.connect(package.dblink);
////Delete the extra zone of haidian
Zone.find({
        district: "chaoyang",
        priceRate: null,
        x: 0,
        y: 0
    })
    .exec(function (err, zones) {
        for (var i = 0; i < zones.length; ++i) {
            var zone = zones[i];
            zone.remove(function (err, obj) {
                deleteZonePrice(obj._id);
                console.log("Remove zone",obj);
            })
        }
    })


function deleteZonePrice(zoneId){
    ZonePrice.find({zone: zoneId})
        .exec(function (err, prices) {
            console.log("Delete zonePrice", prices);
        })
}

//ZonePrice.find()
//    .exec(function (err, prices) {
//        for (var i = 0; i < prices.length; ++i) {
//            var price = prices[i];
//            Zone.find({_id: price.zone}).exec(function (err, zone) {
//                if (zone == null || zone.id == null) {
//                    price.remove(function (err, obj) {
//                        console.log(obj);
//                    })
//                }
//            })
//            price.remove(function (err, obj) {
//                console.log(obj);
//            })
//        }
//    })




