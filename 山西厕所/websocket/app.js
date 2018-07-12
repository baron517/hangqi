var app = require('http').createServer(handler)  , io = require('socket.io').listen(app) , fs = require('fs');

var url = require("url");
var querystring = require("querystring");
app.listen(9001);

var uidList=["BCC69995500104E0","0BB49995500104E0","84B49995500104E0","43B69995500104E0","BCB39995500104E0","20F89895500104E0","CEC99995500104E0","2C499995500104E0","E2FA9895500104E0","C4499995500104E0","014C9995500104E0","6BF89895500104E0","76499995500104E0","B54B9995500104E0","514C9995500104E0","134A9995500104E0","94C79995500104E0","44C99995500104E0","44C79995500104E0","71C99995500104E0"];

console.log(uidList.length);

var socketObj;

io.sockets.on('connection', function (socket) {

				console.log(123);

				socketObj=socket;
				
				
				
				//socket.broadcast.emit('start',"123");

	});

function handler (req, res) {


    console.log(req.url);
    
	res.writeHead(200, { 'Content-Type': 'text/plain' }); 

    if(req.url.indexOf("uid")>-1)
    {
		
		
        var arg = url.parse(req.url).query;          
        var uid = querystring.parse(arg).uid;        
        
		var index=uidList.indexOf(uid)+1;
		
		console.log("index:"+index);
		
		if(index>0)
		{
			socketObj.emit('start', index);
		}
			
			res.end('1'); 
		
       
    }
	else{
		res.end('0'); 
	}
	


}




