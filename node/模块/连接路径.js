const path=require("path");
let domain = "http://baidu.com"
let url = "doc";
let id = "2222";
let address=path.join(domain,url,id);
console.log(address);