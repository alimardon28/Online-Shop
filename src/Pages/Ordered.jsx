import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context/langContext';
import results from '../localization/Content';

const Ordered = () => {
    const {lang} = useContext(Context);

    return (
        <>
            <div id="ordered">
                <h3>{results[lang].content.p5} №{Math.round(Math.random()*1000000)} {results[lang].content.p6}.</h3>
            </div>
        </>
    );
}

export default Ordered;
