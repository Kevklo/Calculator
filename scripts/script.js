let currOp = document.querySelector(`#curr_op`);
let firstOpperand = null;
let currentOperation = null;
toclean = false;

function appendDigit(a){
  if(currentOperation == '='){
    CleanDisplay();
    currentOperation = null;
  }
  if(display.textContent == '0'){
    if(a == '.'){
      display.textContent += a;
    } else {
      display.textContent = a;
    }
  } else if(a != '.' || !(display.textContent.includes('.'))){
    display.textContent += a
  }
}

function deleteLast(){
  display.textContent = display.textContent.slice(0, -1);
  if(display.textContent == ''){
    display.textContent = '0';
  }
}

function clear(){
  firstOpperand = null;
  currentOperation = null;
  display.textContent = 0;
  dispLast.textContent = 0;
  currOp.textContent = '';
}

function CleanDisplay(){
  display.textContent = 0;
}


numBtns.forEach((button) =>
  button.addEventListener('click', () => appendDigit(button.textContent))
)

addition.addEventListener(`click`, () => opperate('+'));

substraction.addEventListener(`click`, () => opperate('-'));

multiplication.addEventListener(`click`, () => opperate('x'));

division.addEventListener(`click`, () => opperate('/'));

equals.addEventListener(`click`, eqs);

cl.addEventListener(`click`, clear);

del.addEventListener(`click`, deleteLast);

coma.addEventListener(`click`, () => appendDigit('.'));


function opperate(operator){
  switch (currentOperation){
    case null : {
      currentOperation = operator;
      firstOpperand = Number(display.textContent);
      dispLast.textContent = firstOpperand;
      currOp.textContent = operator;
      CleanDisplay();
      break;
    }
    case '=' : {
      currentOperation = operator;
      firstOpperand = Number(display.textContent);
      dispLast.textContent = firstOpperand;
      currOp.textContent = operator;
      CleanDisplay();
      break;
    }
    case '+' : {
      let res = firstOpperand + Number(display.textContent);
      firstOpperand = res;
      dispLast.textContent = res;
      currentOperation = operator;
      currOp.textContent = operator;
      CleanDisplay();
      break;
    }
    case '-' : {
      let res = firstOpperand - Number(display.textContent);
      firstOpperand = res;
      dispLast.textContent = res;
      currentOperation = operator;
      currOp.textContent = operator;
      CleanDisplay();
      break;
    }
    case 'x' : {
      let res = firstOpperand * Number(display.textContent);
      firstOpperand = res;
      dispLast.textContent = res;
      currentOperation = operator;
      currOp.textContent = operator;
      CleanDisplay();
      break;
    }
    case '/' : {
      if(display.textContent == '0'){
        alert(`Can't divide by zero`);
        break;
      } else {
        let res = firstOpperand / Number(display.textContent);
        firstOpperand = res;
        dispLast.textContent = res;
        currentOperation = operator;
        currOp.textContent = operator;
        CleanDisplay();
        break;
      }      
    }
  }
}

function eqs(){
  if(currentOperation == '/' && display.textContent == '0'){
    alert(`Cant divide by zero`);
  } else {
    opperate('=');
    let res = dispLast.textContent;
    clear();
    display.textContent = res;
    currentOperation = '=';
  }
}