import React from 'react';
import './mainMenu.css';

const MainMenu = () => {
    const question={
        id:0,
        variants:["700-750","750-800","800-850","850-900"],
        trueVariant:"750-800"
    }

    return (
        <div className="container_menu">
<div>Крейсерская скорость на Н=10 км?</div>
            <div className="answers">

                <div onClick={()=>{
                    if(question.variants[0]===question.trueVariant) {
                        console.log(true)
                    }
                    else{
                        console.log(false)
                    }
                }}>1. {question.variants[0]}
                </div>

                <div onClick={()=>{
                    if(question.variants[1]===question.trueVariant) {
                        console.log(true)
                    }
                    else{
                        console.log(false)
                    }
                }}>2. {question.variants[1]}
                </div>

                <div onClick={()=>{
                    if(question.variants[2]===question.trueVariant) {
                        console.log(true)
                    }
                    else{
                        console.log(false)
                    }
                }}>3. {question.variants[2]}
                </div>

                <div onClick={()=>{
                    if(question.variants[3]===question.trueVariant) {
                        console.log(true)
                    }
                    else{
                        console.log(false)
                    }
                }}>
                    4. {question.variants[3]}
                </div>
            </div>
        </div>
    );
};

export default MainMenu;