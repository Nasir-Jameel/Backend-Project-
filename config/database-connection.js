const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')("development:mongoose")

const dbURI = process.env.DATABASE_URI || config.get("DATABASE_URI")
mongoose
.connect(dbURI)
.then(function(){
    dbgr("DB Connected");
})
.catch(function(err){
    dbgr("DB Connection Error",err);
});

module.exports = mongoose.connection;