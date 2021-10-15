require("dotenv").config()
const express = require("express");
const app = express();
var fs = require('fs');
var path = require('path');
const mongoose = require("mongoose");
app.use(express.static("public"));
const port = process.env.PORT || 3000
// const pool = require("./sql_connection")
app.use(express.json())
app.use(express.urlencoded());
var multer = require('multer');



const mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri);
const questions_schema = new mongoose.Schema({
  question:String,
  option_1:{
    link_1:String,
    link_name:String
  },
  option_2:{
    link_2:String,
    link_name:String
  },
  option_3:{
    link_3:String,
    link_name:String
  },
  option_4:{
    link_4:String,
    link_name:String
  },
});

const Question = new mongoose.model("Question", questions_schema);

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname)) 
  }
});

var upload = multer({ storage: storage });

var multipleUpload = upload.fields([
  {name:'option_1_image'},
  {name:'option_2_image'},
  {name:'option_3_image'},
  {name:'option_4_image'}
])


app.get("/showData", function(req,res){
  Question.find({}, function(err, data){
    if(err) throw err;
    res.send(data)
  })
})

app.get("/questions", function(req,res){
  Question.find({}, function(err, data){
    if(err) throw err;
    res.send(data)
  })
})

app.get("/addQuestion", function(req,res){
    res.sendFile(__dirname+"/public/add_question.html")
})
app.post("/addQuestion",multipleUpload, (req, res) =>{
  var newQuestion;
    if(req.files){
      if(req.body.option_3_name !== "none" || req.body.option_4_name !== "none"){
        var newQuestion = {
          "question":req.body.question,
          "option_1":{
            "link_1":'/uploads/' + req.files.option_1_image[0].filename,
            "link_name":req.body.option_1_name
          },
          "option_2":{
            "link_2":'/uploads/' + req.files.option_2_image[0].filename,
            "link_name":req.body.option_2_name
          },
          "option_3":{
            "link_3":'/uploads/' + req.files.option_3_image[0].filename,
            "link_name":req.body.option_3_name
          },
          "option_4":{
            "link_4":'/uploads/' + req.files.option_4_image[0].filename,
            "link_name":req.body.option_4_name
          },
        }
      }else{
        var newQuestion = {
          "question":req.body.question,
          "option_1":{
            "link_1":'/uploads/' + req.files.option_1_image[0].filename,
            "link_name":req.body.option_1_name
          },
          "option_2":{
            "link_2":'/uploads/' + req.files.option_2_image[0].filename,
            "link_name":req.body.option_2_name
          },
          "option_3":{
            "link_3":"none",
            "link_name":"none"
          },
          "option_4":{
            "link_4":"none",
            "link_name":"none"
          },
        }
      }
      Question.create(newQuestion, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("question added")
        }
    });
}
})



app.listen(port, ()=> console.log("Quiz App server listining on Port "+port))
