function toCel(fahrenheit) {
//   let fahrenheit = prompt("F :");
  let value = ((fahrenheit - 32) * 5) / 9;
  return value.toFixed(2) + "c";
}
function display(elementId, value) {
  document.getElementById("answer-sectionn").innerHTML = "<b>"+value+"</b>";
}
function toFah(celcius) {
//   let celcius = prompt("C :");
  let value = (celcius * 9) / 5 + 32;
  return value.toFixed(2) + "f";
}
function toCelProgram(value)
{
    alert(toCel(value))
}
function toFahProgram(value)
{
    alert(toFah(value))
}

// toFah();
// toCel();
// alert(toCel(150));
// display("toCelcius :", toCel(150));
// alert(toFah(150));
// display("toFahrenheit :", toFah(150));

// function sayHello(username, userlastname){
//     return "Hello" + username + " " + userlastname
// }
// function getAge(){
//     return 20
// }
// let userInput = prompt("Input your name :")
// alert(sayHello(userInput , "Natty"))
// alert(getAge()+10)
