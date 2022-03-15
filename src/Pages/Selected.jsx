import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context/langContext';

const Selected = () => {
    const  {product} = useContext(Context);

    return (
        <div>

    <ul className='products__list'>
          {
            product?.map(i =>{
                return(
                    <li className='products__item'  key={i.id}>
                        <button id='heartsbtn'><i id={i.id} className='bi bi-heart hearts yurak'></i></button>
                        <img className='products__img' src={i.url} alt="img" />
                        <div className="products__box">
                            <div className="products__element">
                              <p className='products__title title'>{i.title}</p>
                              <p className='products__sum'>{i.sum}</p>
                            </div>
                           <p className='products__star'><i className='bi bi-star'></i>{i.star}</p>
                        </div>
                    </li>
                )
            })
          }
        </ul>

        </div>
    );
}

export default Selected;
