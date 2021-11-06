import React from 'react';
import './startPage.css';

const StartPage = () => {

    //alert('Внимание! данное приложение предназначено для мобильных устройств, на остальных устройствах интерфейс может отображаться не корректно!')

    return (
        <div>
            <div className='start_message'>
                Мы рады приветствовать Вас в нашем приложении, вы готовы начать?
            </div>
            <div className="container">

                <div>Начать</div>
            </div>
        </div>
    );
};

export default StartPage;