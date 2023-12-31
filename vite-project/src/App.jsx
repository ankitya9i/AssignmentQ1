import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './ProductList'
import { useEffect } from 'react'

function App() {
  const [products, setproducts] = useState({})
  const [sortedproducts, setsortedproducts] = useState([])
  //
  useEffect(() => {
    const fetchdata= async()=>{
      await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json').then(res=>res.json()).then((data)=>{
        setproducts(data.products);
       
      }).catch((error)=>{
        console.log(error);
      })
  
      const productsArray = Object.entries(products).map(([id, product]) => ({
        id,
        ...product
      }));
      const sortedProductsArray = productsArray.sort((a, b) => b.popularity - a.popularity);
      // Sort the array based on the 'popularity' property

      setsortedproducts(sortedProductsArray);
    
  
    }
    fetchdata();

  }, [sortedproducts])
  
  return (
    <>
    <h1>Displaying all Products</h1>
      <ProductList data={sortedproducts} />
    </>
  )
}

export default App


