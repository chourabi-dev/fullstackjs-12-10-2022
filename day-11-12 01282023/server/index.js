const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser');
const { getTodaysDate, getMonth } = require('./modules/datemodules');
const { createNewProduct, getAllProducts, deleteProductByID, updateProductByID, searchProducts, outOfStockProcutsUpdate } = require('./modules/produits');
var jwt = require('jsonwebtoken');
const { createAccount, auth } = require('./modules/users');
var cors = require('cors')
app.use( bodyParser.json() );

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('users lists...')
})*/


// GET testing...


/**
 * 
 * app.get("/somme", ( req, res )=>{
    // console.log(req.query); query contains the queries from the user url
    const x = Number(req.query.x);
    const y = Number(req.query.y);
    
    const somme = x+y;
    res.send( "la somme de x et y = "+somme )
    
})


 */


/*
app.post("/somme",(req,res)=>{
    console.log(req.body);

    const x = req.body.x;
    const y = req.body.y;
    

    res.send("la somme de x et y = "+ ( x+y ));
})*/


/*
app.get("/date",(req,res)=>{
    const date = getTodaysDate();
    const month = getMonth();
    res.send("today is = "+date+"/"+month);
})*/


/****************************************** Api products ************************************** */



app.use(cors())




// MIDDLEWARE


app.use(function(req,res,next){
    
    if ( req.path === '/api/users/create-account' || req.path ==='/api/users/auth' ) {
        
            next();
        } else {
            const token = req.headers.authorization;
 
            // verify if token exist !!!

            if (token != null) {
                // verify if token is valid

                jwt.verify(token,'my-secret-key', function(err, decoded) {
                    
                    if (decoded != null) {
                        next();
                    } else {
                        res.send({ success:false, message:"session expired" })
                    }
                })
        
                
            }else{
                res.send({ success:false, message:"auth is required" })
            }
        }

    
})


/**
 * app.get("/api/generate-kyes",(req,res)=>{  
   
    jwt.sign(  { email: 'tchourabi@gmail.com' } , 'my-secret-key', function(err, token) {
        console.log(err);
        res.send( { token:token } )
    });
})
 */


app.post("/api/users/create-account",(req,res)=>{
    createAccount(req,res);
})


app.post("/api/users/auth",(req,res)=>{
    auth(req,res);
})




app.post("/api/product/create-product",(req,res)=>{
    createNewProduct(req,res);
})


app.get("/api/product/list",(req,res)=>{  
    getAllProducts(req,res);
})


app.post("/api/product/delete",(req,res)=>{
    deleteProductByID(req,res);
})
  
app.post("/api/product/update",(req,res)=>{
    updateProductByID(req,res);
})
  

app.get("/api/product/search",(req,res)=>{
    searchProducts(req,res);
})
  
app.post("/api/product/out-of-stock",(req,res)=>{
    outOfStockProcutsUpdate(req,res);
})
  




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})