const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    
    create: function(col, val, cb) {
        orm.create("burgers", col, val, function(res) {
            cb(res);
        })
    },
    
    

}

module.exports = burger;
