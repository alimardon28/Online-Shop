import React from 'react';
import { NavLink } from 'react-router-dom';
import victor from '../assets/img/Vector.svg'
import victor1 from '../assets/img/Vector1.svg'
import { Context } from '../Context/langContext';
import { useContext } from 'react';

const Ordering = () => {
    const {korzinka} = useContext(Context);

    let myProduct = []

    korzinka?.map(item => {
        let moneyProduct = item.sum
        myProduct.push(Number(moneyProduct))
    })

    let counterMoney = ""

    if(korzinka.length > 0) {
        counterMoney = myProduct?.reduce(function(item, index) {
            return item + index
        })
    }

    return (
        <div id='Checkout'>
            <h2 id='checkout-heading'>Checkout</h2>
            <div id="Checkout__box">
                <div id="Checkout__left">
                   <div className="checkout__top">
                   <h3>Courier delivery</h3>
                    <p>499 ₸</p>
                   </div>
                  <div id="location">
                     <p id='lokation'>
                       <iframe
                         className='ordering-location-iframe'
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.2529861742!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YI!5e0!3m2!1sru!2s!4v1647259376526!5m2!1sru!2s"
                                       width="595"
                                        height="246"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        aria-hidden="false"
                                        tabIndex="0"
                        />
                     </p>
                  </div>
                  <div id="Deliveryaddress">
                      <p><i className="bi bi-geo-alt"></i>Delivery address</p>
                  </div>
                  <div id="address">
                      <select id='select'>
                          <option >City</option>
                          <option >Tashkent (viloyati)</option>
                          <option >Tashkent (shahri)</option>
                          <option >Xonabod </option>
                          <option >Yunusobod </option>
                          <option >Chilonzor</option>
                          <option >Mirzo Ulug'bek </option>
                          <option >Qora qamish </option>
                      </select>
                         <input id='rayon' required type="text" placeholder='Street / Area '/>
                         <div id="home-padez">
                         <input id='home' required type="number" placeholder='House'/>
                         <input id='padez' required type="number"placeholder='Entrance' />
                         </div>
                         <input id='kvartera' required type="number" placeholder='Flat'/>
                  </div>
                </div>
                        <div id="Checkout__right">
                        <div id="zakaz">
                            <h2 id='zakaz-heading'>Your order</h2>
                            {
                                korzinka?.map(i =>{
                                    return(
                                       <div>
                                            <p id='zakaz-desc'><span>1х</span><span>{i.title}</span><span>{i.sum}</span></p>
                                       </div>
                                    )
                                })
                            }
                            <p id='zakaz-desc'><span>Delivery</span><span>0</span></p>
                            <p id='zakaz-desc'><span>To pay</span><span>{counterMoney}</span></p>
                        </div>
                        <div id="oplate">
                            <h2>Payment method</h2>
                            <div id="selected-bar">
                                <img src={victor} alt="vector img" />
                                <select id="selected">
                                   <option value="">Account on kaspi.kz</option>
                                   <option value="">hr@nmpc.uz</option>
                                </select>
                            </div>
                            <div className="selected-barr">
                                <img src={victor1} alt="vector img " />
                                  <input required type="number" placeholder='card number' />
                                </div>

                        </div>
                        <div id="nomer">
                             <h2>Recipient number</h2>
                             <input type="number" required placeholder='+ 1 __ __ __' />
                        </div>

                        <div id="button-div">
                             <NavLink id='btn' to="/ordered">Finish cleaning</NavLink>
                        </div>
                    </div>
            </div>



        </div>
    );
}

export default Ordering;
