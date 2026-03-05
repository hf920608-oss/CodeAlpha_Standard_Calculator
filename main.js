let buttons = document.querySelectorAll(".btns");
let result = document.getElementById("result");
let cancleAll = document.getElementById("cancleAll");
let cancleOne = document.getElementById("cancleOne");
let result_show = document.querySelector(".result_show");
let operation = document.querySelectorAll(".operation");
let equalto = document.getElementById("equalto");
let show_first_number = document.getElementById("first_number");
let show_operation = document.getElementById("operation");
let show_second_number = document.getElementById("second_number");
let buttons_one = "";
let operations = "";
let results = 0;
let first_number = 0;
let second_number = 0;
let isCalculated = false;


buttons.forEach((element, index) => {

  element.addEventListener("click", () => {

    if (buttons_one.length > 15) {
    } else {
      if(isCalculated){
     buttons_one = element.innerHTML;
     result.innerText = buttons_one;
     show_first_number.innerHTML = "";
     show_operation.innerHTML = "";
     show_second_number.innerHTML = "";
     isCalculated = false;
      }else{
      buttons_one += element.innerHTML;

      result.innerText = buttons_one;
      }

    }
  });
});

cancleOne.addEventListener("click", () => {
  if (cancleOne.innerText == "X") {
    new_buttons = buttons_one.slice(0, -1);

    if (new_buttons < 1) {
      buttons_one = "";
      result.innerText = "0";
    } else {
      buttons_one = new_buttons;
      result.innerText = new_buttons;
    }
  }
});

operation.forEach((element) => {
  element.addEventListener("click", () => {
    operations = element.innerHTML;
    if (operations == "+/-") {
      if (buttons_one != "") {
        buttons_one = (parseFloat(buttons_one) * -1).toString();
        result.innerText = buttons_one;
      }
      return;
    } 
    if (operations == "%") {
      if (buttons_one != "") {
        results = parseFloat(buttons_one) / 100;
        result.innerText = results;
        buttons_one = results.toString();
      }
      return;
    }
    console.log("Operartion me masla arha ha" + operations);

if (buttons_one !== "") {
      first_number = parseFloat(buttons_one);
    }

    show_first_number.innerHTML = first_number;
    show_operation.innerHTML = operations;
    show_second_number.innerHTML = "";
    buttons_one = ""; 
    isCalculated = false;

    // if (first_number == 0) {

    //   first_number = first_number + parseFloat(buttons_one);
    //   console.log("dimagh krabb first number ne"+first_number);
    //   show_first_number.innerHTML = first_number;
    //   show_operation.innerHTML = operations;
    //   buttons_one = "";
    //        second_number = 0;
    //         show_second_number.innerHTML = "";
    //         isCalculated = false;
    // } else {
    //   isCalculated = false;

    //   show_first_number.innerHTML = first_number;
    //   show_operation.innerHTML = operations;
    //   show_second_number.innerHTML = "";
    //   buttons_one = "";

    // }
    
  });
});

equalto.addEventListener("click", () => {
  second_number = parseFloat(buttons_one);
  console.log("dimagh krabb second number ne"+second_number);

  show_second_number.innerHTML = second_number + " =";

  console.log("this is second number" + second_number);
  if (operations == "+") {
    results = first_number + second_number;
  result.innerText = results;
   first_number = parseFloat(results);
     second_number = 0;
        buttons_one = "";
        operations = "";
        isCalculated = true;
    }
      if (operations == "-") {
    results = first_number - second_number;
  result.innerText = results;
   first_number = parseFloat(results);
     second_number = 0;
        buttons_one = "";
        operations = "";
        isCalculated = true;
    }
      if (operations == "*") {
    results = first_number * second_number;
  result.innerText = results;
   first_number = parseFloat(results);
     second_number = 0;
        buttons_one = "";
        operations = "";
        isCalculated = true;
    }
      if (operations == "/") {
    results = first_number / second_number;
  result.innerText = results;
   first_number = parseFloat(results);
     second_number = 0;
        buttons_one = "";
        operations = "";
        isCalculated = true;
    }
});

    
cancleAll.addEventListener("click", () => {
  if (cancleAll.innerHTML == "C") {
    result.innerText = "0";
    buttons_one = "";
    operations = "";
    first_number = 0;
    second_number = 0;
    show_first_number.innerHTML = "";
    show_operation.innerHTML = "";
    show_second_number.innerHTML = "";
    isCalculated = false;
  }
});
