exports.createNewProduct = function(req,res){

    const body = req.body;

    
    // CONNECT TO DB SERVER

    const clientMongo = require("mongodb").MongoClient;

    clientMongo.connect("mongodb://localhost:27017").then(
        (server)=>{
            const db = server.db("apiproducttest");

            db.collection("products").insertOne( body ).then(()=>{
                res.send({ success:true, message:"product inserted." })
            }).catch(()=>{
                res.send( { success:false, message:"err insert product" } );
            })
        }
    ).catch(
        ()=>{
            res.send( { success:false, message:"err con db" } );
        }
    )



    
}