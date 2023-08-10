import React, { useState } from 'react'
import {faker} from "@faker-js/faker";
import SinglePage from './SinglePage';

faker.seed(20);

const Home = () => {
    const productsArray = [...Array(20)].map(() =>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.avatar()
    }));
    const [products] = useState(productsArray);
  return (
    <div className='productContainer'>
        {products.map((prod => (
            <SinglePage prod={prod}/>
        )))}

      
    </div>
  )
}

export default Home
