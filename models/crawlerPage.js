var mongoose = require('mongoose');
var CrawlerPageSchema = require('../schemas/crawlerPage');
var CrawlerPage = mongoose.model('CrawlerPage', CrawlerPageSchema);

module.exports = CrawlerPage;

