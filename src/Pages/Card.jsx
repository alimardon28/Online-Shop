import { NavLink  } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context/langContext';
import results from '../localization/Content';


const Card = () => {
    const {lang} = useContext(Context);


    const {products, setProducts} = useContext(Context);
    const {korzinka, setKorzinka} = useContext(Context)


let myProduct = []
   korzinka?.map(item => {
    let moneyProduct = item.sum
    myProduct.push(Number(moneyProduct))})

let counterMoney = ""
if(korzinka.length > 0) {
     counterMoney = myProduct?.reduce(function(item, index) {
            return item + index
    })
}


const handleDelete = (id) =>{
    setKorzinka(state => state.filter(item => item.id !== id))
}


const hanlePlus = (e) => {
    let id = e.target.id
    korzinka?.map(item => {
        if(item.id == id){
            item.didmount = item.didmount +1
            window.localStorage.setItem("products" , JSON.stringify(products))
            if(item.addSaved){
                setProducts(state => [...state , item])
                window.localStorage.setItem('products' , JSON.stringify(products))
            }

        }else{
            setKorzinka(state => state.filter(item => item.id !== item.id))
        }
    })
}

const hanleMinus = (e) => {
    let id = e.target.id
    korzinka?.map(element => {
        if(element.id == id){
            element.didmount = element.didmount -1
            window.localStorage.setItem("products" , JSON.stringify(products))
            if(element.products){
                setProducts(state => [...state , element])
                window.localStorage.setItem('products' , JSON.stringify(products))
            }

        }else{
            setKorzinka(state => state.filter(item => item.id !== element.id))
        }
    })
}
    return (
        <div id='card'>
           <h1 className='card__heading'>{results[lang].content.p8}</h1>

           <ul className='products__list' id='products__list'>

                        {
                            korzinka?.map(item => {
                                return (
                                    <li className='products__item' id='products__item' key={item.id}>
                                    <img className='products__img' id='products__img' src={item.url} alt="img" />
                                    <button onClick={() => handleDelete(item.id)} id='trash__box'><i className="bi bi-trash"></i></button>
                                    <div className="products__box" id='products__box'>
                                        <div className="products__element" id='products__element'>
                                          <p className='products__title title' id='products__title'>{item.title}</p>
                                          <p className='products__sum' id='products__sum'>{item.sum}</p>
                                        </div>
                                    </div>
                                    <div className="count__box">
                                        <div id="count">
                                            <button type='button' onClick={(e) => hanleMinus(e)} id='count__minus'><i className="bi bi-dash"></i></button>
                                            <p id='results'>{item.didmount}</p>
                                            <button type='button' onClick={(e) => hanlePlus(e)} id='count__plus' ><i className="bi bi-plus"></i></button>
                                        </div>
                                        <div id="sum__box">
                                           <p className='products__sums'>{item.sum}</p>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        }

                       <div id="Delivery__box">
                           <div className="Delivery">
                               <h2 id='Delivery__heading'>Yetkazib berish</h2>
                                <div className="location__box">
                                    <p id='lokation'>
                                    <iframe
                                        className='lacationIframe'
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.2529861742!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YI!5e0!3m2!1sru!2s!4v1647259376526!5m2!1sru!2s"
                                        width="585"
                                        height="183"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        aria-hidden="false"
                                        tabIndex="0"
                                    />
                                    </p>
                                </div>
                                <div id="delivery__result">
                                    <p id='tuck'><i className="bi bi-truck"></i></p>
                                    <p id='kuryer'>{results[lang].content.p2}</p>
                                    <p id='price'>499 ₸</p>
                                </div>
                           </div>
                       </div>

                </ul>
           <div id="itogo">
               <div className="itogo">
                    <p id='itogo__desc'>{results[lang].content.p4}</p>
                    <p id='itogo-price'>{counterMoney}</p>
               </div>
               <div id="itogo__btn">
                   <NavLink to="/ordering" id='btn-itogo'>{results[lang].content.p3}</NavLink>
               </div>
           </div>
    </div>
    );
}

export default Card;
