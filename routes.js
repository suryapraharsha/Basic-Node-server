const fs = require('fs');

const  reqHandler = (req,res)=>{
    //console.log(req);
    const url = req.url;
    const method = req.method;
    if(url==='/'){

        res.write('<html><body><p> Enter User Name </p> <form action="/create-user" method ="POST"><input type = "text" name ="create-user"><button type = "submit">create user</button></from></body></html>');
       return res.end();
    }
    if(url ==='/users'){
        res.write('<html><ul><li>user 1</li><li>user 2</li><li>user 3</li></ul></html>');
        return res.end();

    }
    if(url ==='/create-user' && method ==='POST'){
        body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);


        });

        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
        
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.setHeader('Location','/');
            return res.end();

         });
    
    
    }
    

    res.setHeader('content-type','text/html');
    
    res.end();

}

module.exports = reqHandler;
