import React , { useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";



const Singleproducts = () => {

 const {userId} = useParams()

const [data , setData] = useState({});

useEffect(()=>{
    fetch(`http://localhost:3005/posts/${userId}`)
    .then(res => res.json())
    .then(data => {
        setData(data)
    })
}, [])

    return (
        <>
          <div className="results">
                <div className="imges__box">
                 <NavLink to="/"><i class="bi bi-arrow-left"></i></NavLink>
                 <NavLink to="#"> <i className='bi bi-heart results__bi'></i></NavLink>
                      <img src={data?.thumbnail} alt="img" />
                      <img src={data?.thumbnailUrl} alt="img" />
                    <div className="title__box">
                      <p>{data?.title}</p>
                       <p className='sum__desc'>{data?.sum}</p>
                    </div>
                </div>
            <div className="desc__box">
                <div className="desc__boxDesc">
                   <h2 className='desc__box-heading'>Additional Information</h2>
                   <p className='desc__box-desc description'>{data?.description}</p>
                </div>
                <div className="button__group">
                    <button className='buy'>Buy !</button>
                    <button className='card'> <i className='bi bi-cart3'></i>Add to Cart</button>
                </div>
            </div>
          </div>
        </>
    );
}

export default Singleproducts;
