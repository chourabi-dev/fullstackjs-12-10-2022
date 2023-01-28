const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser');
const { getTodaysDate, getMonth } = require('./modules/datemodules');
const { createNewProduct } = require('./modules/produits');


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

app.post("/api/product/create-product",(req,res)=>{
    createNewProduct(req,res);
})

  




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})