const isfail=true;
const promise =new Promise((resolve,reject)=>{
    if(!isfail){
        resolve('成功')
    }else
    reject('失败')
})

promise
.then(a=>{
    console.log('结果为'+a);  
})
.catch(a=>{
    console.log('结果为'+a);
    
})
.finally(()=>{   
     console.log("结束");
}
    
)
