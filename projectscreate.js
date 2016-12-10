var mongoose=require('mongoose');
var fs = require('fs');
var Schema = require("mongoose/bin/mongoose.min.js");
var projectSchema=mongoose.Schema({
  topicname: {
      type:String,
      required:true,
      unique:true
  },
  topicdes: {
      type:String,
      required:true,
      unique:true
  },
 domain: {
      type:String,
      required:true
 },
    img: { data: Buffer, contentType: String },
    user            : {type: Schema.ObjectId, ref: 'User'}

});
var proj=mongoose.model("Proj",projectSchema);
module.exports=proj;