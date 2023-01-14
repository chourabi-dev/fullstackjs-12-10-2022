 
import './App.css';
import Contact from './components/Contact';
import Product from './components/Produc';

function App() {
  /**
   * 
  const element = <div>
    <h3>Bonjour</h3>
    <p>lorem...</p>
  </div>;
  
   */


  const products = [
    { id:1,   title:"Hp pavillion", price:8000, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:2,   title:"Samsung s21", price:5000, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:3,   title:"Lg smart tv", price:2000, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:4,   title:"Sony playsttation", price:1500, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:5,   title:"Xbox serie x", price:9500, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" }

  ];




  return (


    <div>  
        {
          /**
           * <Contact fullname="chourabi taher" phone="1111" /> 
        <Contact fullname="chourabi taher2" email="tchourabi@gmail.com" phone="1111" /> 
        <Contact fullname="chourabi taher3" phone="1111" /> 

           */
        }
        

        <div className='row'>
        {
          products.map((p)=>{
            return( 
                  <div className='col-sm-4'>
                    <Product photoURL={ p.photoURL } title={ p.title } price={p.price}  />
                  </div>
               );
          })
        }

        </div>



    </div>



  );
}

export default App;
