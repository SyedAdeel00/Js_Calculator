const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const Operator = document.getElementById('Operator');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

calculate.addEventListener('click', () => {
    let val1 = parseFloat(num1.value);
    let val2 = parseFloat(num2.value);
    let Operation = Operator.value;

    switch(Operation){
        case '+':
            result.value = val1 + val2;
             break;
              case '-':
               result.value = val1 - val2;
                break;
                 case'*':
                  result.value = val1 * val2;
                 break;
               case '/':
             result.value = val1 / val2;
           break;
         default:
        result.value = "Invalid Operator"

    }
})