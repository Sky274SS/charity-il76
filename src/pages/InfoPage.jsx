import React from 'react';
import "./infoPage.css";
const InfoPage = ({state,onExit}) => {
    return (
        <div className="container">
<button className="button" onClick={()=> onExit(!state)}>exit</button>
        </div>
    );
};

export default InfoPage;