
const back = require('androidjs').back;

const fs = require("fs")

back.on("current_path", function(){
	back.send("hello from back", __dirname);
});