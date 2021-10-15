require("dotenv").config()
var mysql = require("mysql")

// var pool = mysql.createPool({
//     host:"184.168.96.123",
//     user:"sid86",
//     password:"siddharth18",
//     database:"survey_web"
// })

// var pool = mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:process.env.SQL_PASSWORD,
//     database:"quiz"
// })
// module.exports = pool;

// // CREATE table
  //   var sql = "CREATE TABLE questions (question VARCHAR(255), option_1 VARCHAR(255), option_2 VARCHAR(255), option_3 VARCHAR(255), option_4 VARCHAR(255))";
  //   pool.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table created");
  // });

// CREATE database
// pool.query("CREATE DATABASE quiz", function (err, result) {
//   if (err) throw err;
//   console.log("Database created");
// });

    // var sql = "SELECT * FROM questions";
    // pool.query(sql, function (err, result, fields){
    //     if(err) throw err;
    //     res.send(result)
    // })

        // var option_1 = JSON.stringify( {
    //   "link_1":data.option_1_image,
    //   "link_name":data.option_1_name
    // })
    // var option_2 = JSON.stringify({
    //   "link_2":data.option_2_image,
    //   "link_name":data.option_2_name
    // })
    // var option_3 = JSON.stringify({
    //   "link_3":data.option_3_image,
    //   "link_name":data.option_3_name
    // })
    // var option_4 = JSON.stringify({
    //   "link_4":data.option_4_image,
    //   "link_name":data.option_4_name
    // })
    // var question = data.question
    // var sql = "INSERT INTO questions (question, option_1, option_2, option_3, option_4) VALUES ('"+question+"','"+option_1+"','"+option_2+"','"+option_3+"','"+option_4+"')";
    // pool.query(sql, function (err, result) {
    //   if (err) throw err;
    //   res.send("Question added")
    // });

    // var sql = "DELETE FROM questions WHERE question = 'You would like to watch..'";

//     pool.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("deleted")
//     });

