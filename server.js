var restify = require ('restify'),
  generate = require ('./generate'),
  port = process.env.PORT || 3000;



var server = restify.createServer({
  name : "restify server"
});

server.use(function(req, res, next){
  console.log(req.method + ' ' + req.url);
  return next();
});

server.use(restify.bodyParser());
 server.post('api/generate', generate.post);
 server.post('api/generate/verify', generate.verifyToken);

server.listen(port,function(){
  console.log('API is running at port : ' + port);
});
