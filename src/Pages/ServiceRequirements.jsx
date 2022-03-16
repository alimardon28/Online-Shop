import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context/langContext';
import results from '../localization/Content';

const ServiceRequirements = () => {
    const {lang} = useContext(Context);

    return (
        <>
            <div id="service">
                <div className="service">
                    <h3>{results[lang].content.h1}</h3>
                    <p>{results[lang].content.p13}</p>
                </div>
                <div className="service">
                   <h3>{results[lang].content.h2}</h3>
                    <p>{results[lang].content.p13}</p>
                </div>
                <div className="service">
                    <h3>{results[lang].content.h3}</h3>
                    <p>{results[lang].content.p13}</p>
                </div>
            </div>


        </>
    );
}

export default ServiceRequirements;
