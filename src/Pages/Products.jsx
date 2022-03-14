import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Pages/All.css'




const Products = () => {

const [data , setData] = useState();

useEffect(()=>{
    fetch('http://localhost:3005/posts')
    .then(res => res.json())
    .then(data => {
        setData(data);
    })
}, [])

    return (
        <>

        <ul className='products__list ' >
          {
            data?.map(p =>{
                return(
                    <li className='products__item' key={p.id}>
                        <NavLink className="navlink" to={`/singleproducts/${p.id}`}>
                        <i className='bi bi-heart yurak'></i>
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
