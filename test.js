//引入http模块
let http=require("http");

//引入cheerio模块
//let cheerio= require("cheerio");

//引入文件系统file system，目的为了之后把爬虫的数据保存成文件
let fs = require("fs");

let axios=require("axios");
let a =axios({
	method:"get",
	URL:"http://www.baidu.com"
});

console.log(a);


