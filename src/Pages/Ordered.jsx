import React from 'react';

const Ordered = () => {
    return (
        <>
            <div id="ordered">
                <h3>Номер вашего заказа №{Math.round(Math.random()*1000000)} с Вами свяжется наш менеджер.</h3>
            </div>
        </>
    );
}

export default Ordered;
