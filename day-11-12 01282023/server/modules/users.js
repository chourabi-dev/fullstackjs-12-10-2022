const { ObjectId } = require("mongodb");
var sha1 = require('sha1');
var jwt = require('jsonwebtoken');

exports.createAccount = function(req,res){
    const body = req.body;

    
    // CONNECT TO DB SERVER

    const clientMongo = require("mongodb").MongoClient;

    clientMongo.connect("mongodb://localhost:27017").then(
        (server)=>{
            const db = server.db("apiproducttest");

           db.collection("users").findOne({ username: body.username }).then((check)=>{
            if (check != null) {
                res.send({ success:false, message:"username already in use" })
            } else {
                db.collection("users").insertOne( 
                    {
                        username: body.username,
                        password: sha1(body.password)
                    }
                 ).then(()=>{
                    res.send({ success:true, message:"account created successfully." })
                }).catch(()=>{
                    res.send( { success:false, message:"err create account" } );
                })
            }
           }).catch()
        }
    ).catch(
        ()=>{
            res.send( { success:false, message:"err con db" } );
        }
    )
}


exports.auth = function(req,res){
    const body = req.body;

    
    // CONNECT TO DB SERVER

    const clientMongo = require("mongodb").MongoClient;

    clientMongo.connect("mongodb://localhost:27017").then(
        (server)=>{
            const db = server.db("apiproducttest");

           db.collection("users").findOne({ username: body.username, password: sha1(body.password) }).then((user)=>{
            if (user != null) {

                // generate token !!
                jwt.sign(  { username: user.username, id:user._id } , 'my-secret-key', function(err, token) {
                    
                    res.send( { token:token } )
                });
               
            } else {
                res.send({ success:false, message:"wrong username or password" })
            }
           }).catch()
        }
    ).catch(
        ()=>{
            res.send( { success:false, message:"err con db" } );
        }
    )
}
