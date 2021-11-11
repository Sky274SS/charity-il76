import React from 'react';
import './startPage.css';

const StartPage = ({onChange, state}) => {

    //alert('Внимание! данное приложение предназначено для мобильных устройств, на остальных устройствах интерфейс может отображаться не корректно!')

    return (
        <div>
            <div className='start_message'>
                Мы рады приветствовать Вас в нашем приложении, вы готовы начать?
            </div>
            <div className="container">

                <div onClick={()=> onChange(!state)} >Начать </div>
            </div>
        </div>
    );
};

export default StartPage;