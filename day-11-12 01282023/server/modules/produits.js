const { ObjectId } = require("mongodb");

exports.createNewProduct = function(req,res){

    const body = req.body;

    
    // CONNECT TO DB SERVER

    const clientMongo = require("mongodb").MongoClient;

    clientMongo.connect("mongodb://localhost:27017").then(
        (server)=>{
            const db = server.db("apiproducttest");

            db.collection("products").insertOne( body ).then(()=>{
                res.send({ success:true, message:"product inserted sucessfully." })
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



// LIST 
exports.getAllProducts = function(req,res){
    const client = require("mongodb").MongoClient;

    client.connect("mongodb://localhost:27017").then((server)=>{
        const db = server.db("apiproducttest");

        db.collection("products").find().toArray().then((products)=>{

            res.send( products );

        }).catch((err)=>{
            ()=>{
                res.send({ success:false, message:"err con db 2" });
            } 
        })



    }).catch(
        ()=>{
            res.send({ success:false, message:"err con db" });
        }
    )
}




// UPDATE
exports.updateProductByID = function(req,res){
    const client = require("mongodb").MongoClient;

    client.connect("mongodb://localhost:27017").then((server)=>{
        const db = server.db("apiproducttest");


        const body = req.body;


        db.collection("products").updateOne( { _id: ObjectId(body.id) } , 
        
        {
            $set : {
                updatedAt: new Date(),
                quantity: body.quantity,
                price:body.price,
                product: body.product
            } 
        }
        
        ).then(
            (updateResult)=>{

                res.send({ success:true, message:"product updated successfully." });
            }
        ).catch(
            ()=>{
                res.send({ success:false, message:"err updating product" });
            }
        );


    }).catch(
        (err)=>{
            console.log(err);
            res.send({ success:false, message:"err con db" });
        }
    )
}





// DELETE
exports.deleteProductByID = function(req,res){
    const client = require("mongodb").MongoClient;

    client.connect("mongodb://localhost:27017").then((server)=>{
        const db = server.db("apiproducttest");


        const body = req.body;

        console.log(body);

        

        db.collection("products").deleteOne( { _id : ObjectId(body.id) } ).then(
            (deleteResult)=>{
                console.log(deleteResult.deletedCount);

                res.send({ success:true, message:"product deleted successfully." });
            }
        ).catch(
            ()=>{
                res.send({ success:false, message:"err deleting product" });
            }
        );



    }).catch(
        ()=>{
            res.send({ success:false, message:"err con db" });
        }
    )
}





// SEARCH 
exports.searchProducts = function(req,res){
    const client = require("mongodb").MongoClient;

    client.connect("mongodb://localhost:27017").then((server)=>{
        const db = server.db("apiproducttest");

        console.log(req.query);

        let filter = {};

        if (req.query.quantity != null) {
            filter.quantity =  Number(req.query.quantity)
        }
        
        if (req.query.price != null) {
            filter.price = { $lte : Number(req.query.price) }  
        }
        
        /**
         * lessthan          $lt
         * lessthanequal     $lte
         * graterthan        $gt
         * greaterthaequanl  $gte
         * ==                : value
         */



        db.collection("products").find( filter ).toArray().then((products)=>{

            res.send( products );

        }).catch((err)=>{
            ()=>{
                res.send({ success:false, message:"err con db 2" });
            } 
        })



    }).catch(
        ()=>{
            res.send({ success:false, message:"err con db" });
        }
    )
}





exports.outOfStockProcutsUpdate = function(req,res){
    
        const client = require("mongodb").MongoClient;
    
        client.connect("mongodb://localhost:27017").then((server)=>{
            const db = server.db("apiproducttest");
    
    
            
            db.collection("products").updateMany( { quantity: 0 } , 
            
            {
                $set : {
                    updatedAt: new Date(),
                    quantity: 10
                } 
            }
            
            ).then(
                (updateResult)=>{
    
                    res.send({ success:true, message:"product updated successfully." });
                }
            ).catch(
                ()=>{
                    res.send({ success:false, message:"err updating product" });
                }
            );
    
    
        }).catch(
            (err)=>{
                console.log(err);
                res.send({ success:false, message:"err con db" });
            }
        ) 
    
}