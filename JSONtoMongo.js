'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    listings = require('./listings.json'),
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.example')

/* Connect to your database */
mongoose.connect('mongodb://CEN3031:CEN3031TA@ds123822.mlab.com:23822/cen3031_assignment3');
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
Listing.collection.remove({});
Listing.collection.insertMany(listings.entries);

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */