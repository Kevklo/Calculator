const num_btns = document.querySelectorAll(`#num_btn`);
const display = document.querySelector(`#disp_num`);
const disp_last = document.querySelector(`#disp_last`);
const addition = document.querySelector(`#add`);
const substraction = document.querySelector(`#subs`);
const multiplication = document.querySelector(`#mult`);
const division = document.querySelector(`#div`);
const equals = document.querySelector(`#equals`);
const cl = document.querySelector(`.clear`);
const del = document.querySelector(`.del`);
let curr_op = document.querySelector(`#curr_op`);
let firstOpperand = null;
let currentOperation = null;
toclean = false;

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
  disp_last.textContent = 0;
  curr_op.textContent = '';
}

function CleanDisplay(){
  display.textContent = 0;
}

num_btns.forEach((button) =>
  button.addEventListener('click', () => appendDigit(button.textContent))
)

addition.addEventListener(`click`, () => opperate('+'));

substraction.addEventListener(`click`, () => opperate('-'));

multiplication.addEventListener(`click`, () => opperate('x'));

division.addEventListener(`click`, () => opperate('/'));

equals.addEventListener(`click`, eqs);

cl.addEventListener(`click`, clear);

del.addEventListener(`click`, deleteLast);

function appendDigit(a){
  if(toclean == true){
    CleanDisplay();
    toclean = false;
  }
  if(display.textContent == '0'){
    display.textContent = a;
  } else {
    display.textContent += a
  }
}

function opperate(operator){
  if(toclean == true){
    CleanDisplay();
    toclean = false;
  }
  switch (currentOperation){
    case null : {
      currentOperation = operator;
      firstOpperand = Number(display.textContent);
      disp_last.textContent = firstOpperand;
      curr_op.textContent = operator;
      CleanDisplay();
      break;
    }
    case '+' : {
      let res = firstOpperand + Number(display.textContent);
      firstOpperand = res;
      disp_last.textContent = res;
      currentOperation = operator;
      curr_op.textContent = operator;
      CleanDisplay();
      break;
    }
    case '-' : {
      let res = firstOpperand - Number(display.textContent);
      firstOpperand = res;
      disp_last.textContent = res;
      currentOperation = operator;
      curr_op.textContent = operator;
      CleanDisplay();
      break;
    }
    case 'x' : {
      let res = firstOpperand * Number(display.textContent);
      firstOpperand = res;
      disp_last.textContent = res;
      currentOperation = operator;
      curr_op.textContent = operator;
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
        disp_last.textContent = res;
        currentOperation = operator;
        curr_op.textContent = operator;
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
    let res = disp_last.textContent;
    clear();
    display.textContent = res;
    toclean = true;
  }
}