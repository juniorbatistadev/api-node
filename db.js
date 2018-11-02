var mongoose = require('mongoose');
mongoose.connect('mongodb://juniorbatistard:finalitla2018@ds145093.mlab.com:45093/finalitla');

module.exports = mongoose.connection ;