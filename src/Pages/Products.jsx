import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Pages/All.css'
import banner from '../assets/img/banner.png'
// import results from '../localization/Content';
import { Context } from '../Context/langContext';
import { useContext } from 'react';





const Products = () => {

const [data , setData] = useState();
// const { lang } = useContext(Context);

const {product} = useContext(Context);
const {products} = useContext(Context);




useEffect(()=>{
    fetch('http://localhost:3001/posts')
    .then(res => res.json())
    .then(data => {
        setData(data);
    })
}, [])

const handleAdd = (e) => {

    products?.map(item =>{
      if(item.id === e.target.id){
         product.push(item)
      }
    })
}

    return (
        <>
          <div id="banner__box">
              <img src={banner} alt="banner img" />
          </div>
         <ul className='products__list'>
          {
            data?.map(p =>{
                return(
                    <li className='products__item' key={p.id}>
                        <button id='heartsbox' onClick={(e) => handleAdd(e)}><i id={p.id} className='bi bi-heart yurak'></i></button>
                        <NavLink className="navlink" to={`/singleproducts/${p.id}`}>
                        <img className='products__img' src={p.url} alt="img" />
                        <div className="products__box">
                            <div className="products__element">
                              <p className='products__title title'>{p.title}</p>
                              <p className='products__sum'>{p.sum}</p>
                            </div>
                           <p className='products__star'><i className='bi bi-star'></i>{p.star}</p>
                        </div>
                     </NavLink>
                    </li>
                )
            })
          }
        </ul>

        </>
    );
}

export default Products;
