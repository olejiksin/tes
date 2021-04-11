import './css/calc.css';
import React from "react";

const {useState} = React;

const Calc = () => {

    const [inputArea, setInputArea] = useState('');

    const buttons = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '=', '.', '*',
        '<=', 'C', '(', ')'];

    const onClickFuncc = (innerText) => {
        switch (innerText) {
            case 'C': {
                setInputArea('');
                break;
            }
            case '<=': {
                if (inputArea.length >= 1) {
                    setInputArea(inputArea.slice(0, inputArea.length - 1));
                }
                break;
            }
            case '=': {
                try {
                    let res=eval(inputArea);
                    if (!isNaN(res) && res !== Infinity) {
                        setInputArea(res.toString());
                    }else {
                        alert('Бесконечность, или делишь на 0');
                    }
                } catch {
                    alert('Что-то не то ввели');
                }
                break;
            }
            default:
                setInputArea(inputArea + innerText);
        }
    }

    const buttonList = buttons.map((button, index) => {
        return (
            <div className="btn" onClick={(e) => onClickFuncc(e.target.innerText)}>
                {button}
            </div>)
    });

    return (
        <div id="calc">
            <input type="text" id="input" value={inputArea} maxLength={26} readOnly/>
            {buttonList}
        </div>
    );

}
export default Calc;
