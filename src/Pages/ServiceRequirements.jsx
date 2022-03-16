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
                   <h3>{results[lang].content.p13}</h3>
                    <p>The task of the organization, in particular the course towards a socially oriented national project, requires us to systematically analyze the development model! Thus, the constant information and technical support of our activities requires us to analyze the system of large-scale changes in a number of parameters! On the other hand, socio-economic development directly depends on comprehensively balanced innovations?</p>
                </div>
                <div className="service">
                    <h3>{results[lang].content.p13}</h3>
                    <p>The task of the organization, in particular the course towards a socially oriented national project, requires us to systematically analyze the development model! Thus, the constant information and technical support of our activities requires us to analyze the system of large-scale changes in a number of parameters! On the other hand, socio-economic development directly depends on comprehensively balanced innovations?</p>
                </div>
            </div>


        </>
    );
}

export default ServiceRequirements;
