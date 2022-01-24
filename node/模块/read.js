const fs=require("fs");
fs.readFile("read.txt",(err,data)=>{
if(err){
    console.log(err);
}
else
console.log(data.toString());
})


