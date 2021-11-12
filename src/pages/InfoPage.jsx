import React from 'react';
import "./infoPage.css";

const InfoPage = ({state, onExit, onMenu}) => {

    const question = {
        id: 0,
        variants: ["variantOne", "variantTwo", "variantTree", "variantFour"],
        trueVariant: "variantTwo"
    }
    return (
        <div className="container_info">
            <div>
                <h1>о программе</h1>
                <p>Далее вам будет представлена программа для помощи в изучении самолета Ил-76,а также запуска
                    двигателей данного самолёта</p>
                <p>На данный момент она находиться на стадии beta-тестирования</p>
                <p>чтобы узнать как попасть на beta-тестирование напиши <a href="https://skymirs.ru/"
                                                                           target='_blank'>мне</a></p>
                <img className="img" src="logo512.png" alt=""/>

            </div>
            <button className="button" onClick={() => onMenu(!state)}>Далее</button>
            <button className="button" onClick={() => onExit(!state)}>Назад</button>
        </div>
    );
};

export default InfoPage;