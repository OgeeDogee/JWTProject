function TokensController(){
  var uuid = require('uuid'),
      jwt = require('jsonwebtoken'),
      header = { "typ": "JWT",
                 "alg": "HS256"
               }
      secretKey = "kevin",
      that = this;

    that.post = function(req,res,next){
                token: jwt.sign({
                          iss: 'PLDT',
                          sub: 'sample-jwt'
                          }, secretKey)

            var token = jwt.sign({
                              iss: 'PLDT',
                              sub: 'sample-jwt'
                            }, secretKey);

          res.send(201,{token: token});
        return next();
      };

    that.verifyToken = function(req,res,next){

        if(!req.body.hasOwnProperty('token')){
          res.send(400,{error : "Bad Request"});
          return next();
        }else{
            var token = req.body.token;
            jwt.verify(token,secretKey,function(err,token){
                if(err){
                  res.send(401,"Token Invalid");
                }else{
                  res.send(202, "Token Valid");
                }
            });
         }
        return next();
      };

};

module.exports = new TokensController();
