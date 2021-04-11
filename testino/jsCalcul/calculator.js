var inputArea = document.getElementById('input');
var calc = document.getElementById('calc');

var buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '/',
    '0', '=', '.', '*',
    '<=', 'C','(',')'];

buttons.forEach((button) => {
    var btn = document.createElement('div');
    btn.className = 'btn';
    btn.innerHTML = button;
    calc.appendChild(btn);
});

const onClickFunc = (e) => {
    let innerText=e.target.innerText;
    switch (innerText) {
        case 'C': {
            inputArea.value='';
            break;
        }
        case '<=': {
            if (inputArea.value.length >= 1) {
                inputArea.value=(inputArea.value.slice(0, inputArea.value.length - 1));
            }
            break;
        }
        case '=': {
            try {
                let res=eval(inputArea.value);
                if (!isNaN(res) && res !== Infinity) {
                    inputArea.value=(res).toString());
                }else{
                    alert('Бесконечность или делишь на 0');
                }
            } catch {
                alert('Что-то не то ввели');
            }
            break;
        }
        default:
            inputArea.value += innerText;
    }
}

document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', onClickFunc)
});

