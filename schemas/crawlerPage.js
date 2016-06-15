var mongoose = require('mongoose');


var CrawlerPageSchema = new mongoose.Schema({
    city: String, //城市
    district: String, //行政区域，浦东
    pageIndex: Number,
    isMatched: {
        type: Boolean,
        default: false
    },
    meta: {
        createdAt: {
            type: Date,
            default: Date.now()
        },

        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
});


CrawlerPageSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now();
    } else {
        this.meta.updatedAt = Date.now();
    }

    console.log("save zone...........");

    next();
})

CrawlerPageSchema.statics = {
    fetch: function(callback) {
        return this.find({}).sort('meta.updatedAt').exec(callback);
    },

    findById: function(id, callback) {
        return this.findOne({ _id: id }).exec(callback);
    }
}

module.exports = CrawlerPageSchema;