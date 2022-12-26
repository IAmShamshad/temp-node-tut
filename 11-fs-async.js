


//Asynchronous: here callback function is used//also called blocking code

const {readFile,writeFile}= require('fs');
console.log("start");
var first,second;
readFile('./content/first.txt','utf-8',function(err,result){
    if(err)
    {
        console.log(err)
        return
    }
    first=result;
})
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err)
        {
        console.log((err));
        return
        }
        second=result;
    })
        writeFile('./content/result-async.txt',`here is the result: ${first},${second}`,(err,result)=>{
            if(err)
            {
                console.log(err);
                return
            }
            //console.log(result);
            console.log("done with this task");
        })

        

   
console.log("starting the next task");

