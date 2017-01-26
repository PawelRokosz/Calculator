var buttons = document.querySelectorAll("button");
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
var lastChar;

for(var i = 0; i < buttons.length; i++){
  buttons[i].onclick = function(e){
    var input = document.querySelector('#myInput');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;

    if(btnVal === "Clear"){
      input.innerHTML = '';
      decimalAdded = false;
    }else if(btnVal === "="){
      var equation = inputVal;
      lastChar = equation[equation.length - 1];

      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

      if(operators.indexOf(lastChar) > -1 || lastChar === '.'){
        equation = equation.replace(/.$/, '');
      }

      if(equation){
        input.innerHTML = eval(equation);
      }

      decimalAdded = false;
    }else if(operators.indexOf(btnVal) > -1){
      lastChar = inputVal[inputVal.length - 1];

      if(inputVal !== '' && operators.indexOf(lastChar) === -1){
        input.innerHTML += btnVal;
      }else if(inputVal === '' && btnVal === '-'){
        input.innerHTML += btnVal;
      }

      if(operators.indexOf(lastChar) > -1 && inputVal.length > 1){
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }
      decimalAdded = false;
    }else if(btnVal === '.'){
      if(!decimalAdded){
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    }else{
      input.innerHTML += btnVal;
    }

    e.preventDefault();
  };
}
