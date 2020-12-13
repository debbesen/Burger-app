const connection = require("./connections.js");

function printQuestionMarks(num) {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  };

  const orm = {
      all: function(input, cb) {
          const queryString = `SELECT * FROM ${input};`;
          console.log(queryString);
          connection.query(queryString, function(err, result) {
              if (err) throw err;
              cb(result);
          });
      },
      create: function(table,col,val,cb) {
          const queryString = "INSERT INTO " + table + " (" + col.toString() + ") " + "VALUES (?, ?) ";
          console.log(queryString);
          connection.query(queryString, val, function(err, res) {
              if (err) throw err;
      
          cb(res);

          
          });

      }





  }



  module.exports = orm;
  