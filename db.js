var mongoose = require('mongoose');
//deb db
mongoose.connect('mongodb://localhost/finalitla',{ useNewUrlParser: true});
//real url mongoose.connect('mongodb://juniorbatistard:finalitla2018@ds145093.mlab.com:45093/finalitla',{ useNewUrlParser: true});
module.exports = mongoose ;


