const net=require('net')

const host='127.0.0.1'
const port='8090'

var client=new net.Socket();
client.connect(port,host,function(){
	console.log('您已经连接:'+host+' '+port);
	client.write('hello');
})
client.on('data',function(data){
	console.log(data.toString());
	//client.destroy();
})
client.on('close',function(){
	console.log('您已关闭连接');
})
