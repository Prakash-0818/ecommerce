import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../components/productCard';

const products = [
  {
    productId: "lap1",
    photo: "https://m.media-amazon.com/images/I/316ArzLeJ2L._MCnd_AC_.jpg",
    name: "macbook m1",
    stock: 10,
    quantity: 2,
    price: 68124,
  },
  {
    productId: "lap2",
    photo: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY218_.jpg',
    name: "macbook m2",
    stock: 4,
    quantity: 1,
    price: 89775,
  }
]
const Home = () => {

  const addToCartHandler = ()=>{

  }

  return (
    <div className='home'>
      <section></section>

      <h1>
        Latest product
        <Link to={"/search"} className="findmore">More</Link>
      </h1>

      <main>
        {
          products.map((i)=> <ProductCard key={i.productId} products={i}/>)
        }
      </main>

    </div>
  )
}

export default Home