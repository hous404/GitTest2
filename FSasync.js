const {readFile, writeFile}=require("fs");
//async means we need callbacks
readFile('./content/first.txt','utf-8' ,(err,result)=> {
    if(err) {
        return err;
    }
    const first= result;
    readFile('./content/second.txt','utf-8', (err,result)=>{;
    if(err) {
        console.log(err);
        return;
    }
    const second= result;
    writeFile('./content/resultasync.txt',`heres the result : ${first}, ${second}`, (err,result) => {
        if(err) {
            console.log(err);
            return 
        }
        console.log(result);
    })
})
})
