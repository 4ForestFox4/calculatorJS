console.log('start');
let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p');


function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = '0';
    console.log('ac')
}


document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains(('ac'))) return;

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
            console.log(a)
        } else if (a !== '' && b !== '' && finish && sign !== '') {
            b = key;
            finish = false;
            out.textContent = b;
        } else if (a !== '' && b !== '' && sign === '' && finish) {
            a = '';
            b = '';
            a += key;
            finish = false;
            console.log(a, sign, b, finish)
        } else {
            b += key;
            out.textContent = b;
            console.log(a, sign, b);
        }

        return;

    }

    if (action.includes(key)) {
        sign = key;
        console.log(a, sign, b);
        out.textContent = sign;
        return;
    }

    if (key === '%') {
        if (b === '') {
            a = (+a) * 0.01;
            out.textContent = a;
            console.log('%');
            return
        }
        b = (+a) * ((+b) / 100);
        out.textContent = b;
        console.log('%')
    }

    if (key === '+/-') {
        if (a !== '' && b === '') {
            a = (+a) * -1;
            out.textContent = a
        }
        if (a !== '' && b !== '') {
            b = (+b) * -1;
            out.textContent = b
        }
    }

    if (key === '=') {
        if (b === '') {
            b = a
        }
        switch (sign) {
            case "+" :
                a = (+a) + (+b);
                break;
            case "-":
                a = (+a) - (+b);
                break;
            case "X":
                a = (+a) * (+b);
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'ERROR';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        sign = '';
        out.textContent = a;
        console.log(a, sign, b, finish)
    }
};
