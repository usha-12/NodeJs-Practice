const http = require('http');


//http.createServer((req, resp)=> {

  //  resp.write("<h1>hello this is usha ahirwar</h>");
   // resp.end();

//}).listen(3000);

function dataControl(req, resp){
    resp.write("--------------------<h1>hello this is usha ahirwar------------------</h>"); 
    resp.end();
}
http.createServer(dataControl).listen(4001);