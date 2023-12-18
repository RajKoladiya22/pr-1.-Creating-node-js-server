const http = require('http');
const fs = require('fs');

const port = 8000;

const hendalRequest = (req, res) => {
    
    let PageName = "";

    switch(req.url){
        case'/':
        PageName ='./index.html'
        break;
        case'/about':
        PageName ='./about.html'
        break;
        case'/product':
        PageName ='./product.html'
        break;
        case'/contact':
        PageName ='./contact.html'
        break;
    }

    fs.readFile(PageName,(err,recored)=>{
        if(err){
            console.log(`Page is not found ${err}`)
            return false;
        }
        res.end(recored)
    })
}
const server = http.createServer(hendalRequest);

server.listen(port, (err)=> {
    if(err){
        console.log(`Server is not Start${err}`);
        return false;
    }
    console.log(`Server is Start ${port}`);
})

// const fs = require('fs');

// fs.write FileSync('demo.html', `<h1 style="font-size: 500px, color:red">hello</h1>`);