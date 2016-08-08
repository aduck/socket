const net=require('net')

const host='127.0.0.1'
const port='8090'

var server=net.createServer(function(socket){
	socket.on('data',function(data){
		socket.write('我收到你说的：'+data);
	})
	socket.on('close',function(){
		console.log('已经关闭');
	})
	socket.on('error',function(err){
		throw err;
	})
});

server.listen(port,host,function(){
	var address=server.address();
	console.log('socket服务器启动成功'+address.address+' '+address.port);
});

server.on('connection',function(){
	server.getConnections(function(err,count){
		if(err) throw err;
		console.log('已连接人数:'+count)
	})
})
