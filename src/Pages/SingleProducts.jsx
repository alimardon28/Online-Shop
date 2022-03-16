import React , { useEffect, useState, useContext } from 'react';
import { Context } from '../Context/langContext';
import { NavLink, useParams } from "react-router-dom";
import results from '../localization/Content';




const Singleproducts = () => {
const {lang} = useContext(Context);
const {userId} = useParams()

const [data , setData] = useState({});
const {korzinka} = useContext(Context)
const {products} = useContext(Context)

const addKorzinka = (id) => {
    products?.map(item => {
        if (item.id == id) {
            korzinka.push(item)
        }
    })
}

useEffect(()=>{
    fetch(`https://authentiication.herokuapp.com/posts/${userId}`)
    .then(res => res.json())
    .then(data => {
        setData(data)
    })
}, [])

    return (
        <>
          <div className="results">
                <div className="imges__box">
                 <NavLink to="/"><i className="bi bi-arrow-left"></i></NavLink>
                 <NavLink to="#"> <i className='bi bi-heart results__bi'></i></NavLink>
                      <img src={data?.thumbnail} alt="img" />
                      <img src={data?.thumbnailUrl} alt="img" />
                    <div className="title__box">
                      <p>{data.title}</p>
                       <p className='sum__desc'>{data?.sum}</p>
                    </div>
                </div>
            <div className="desc__box">
                <div className="desc__boxDesc">
                   <h2 className='desc__box-heading'>{results[lang].content.p10}</h2>
                   <p className='desc__box-desc description'>{data?.description}</p>
                </div>
                <div className="button__group">
                    <NavLink to={`/card`} className='buy'>{results[lang].content.p12}!</NavLink>
                    <button id={data.id} onClick={(e) => addKorzinka(e.target.id)} className='card'> <i className='bi bi-cart3'></i>{results[lang].content.p11}</button>
                </div>
            </div>
          </div>
        </>
    );
}

export default Singleproducts;
