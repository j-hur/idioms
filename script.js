// EVENT LISTENERS
document.getElementById("btn1").addEventListener("click", idiom1);
document.getElementById("btn2").addEventListener("click", idiom2);
document.getElementById("btn3").addEventListener("click", idiom3);
document.getElementById("btn4").addEventListener("click", idiom4);
document.getElementById("btn5").addEventListener("click", idiom5);

// Event functions
function idiom1() {
  let phrase1 = prompt("Finish the phrase");
  let msg = `Break a ${phrase1}`;
  alert(msg);
}

function idiom2() {
  let phrase2 = prompt("Finish the phrase");
  let msg2 = `Cut somebody ${phrase2}`;
  alert(msg2);
}

function idiom3() {
  let phrase3 = prompt("Finish the phrase");
  let msg3 = `No pain ${phrase3}`;
  alert(msg3);
}

function idiom4() {
  let phrase4 = prompt("Finish the phrase");
  let msg4 = `Pull yourself ${phrase4}`;
  alert(msg4);
}

function idiom5() {
  let phrase5 = prompt("Finish the phrase");
  let msg5 = `Don't cry over ${phrase5}`;
  alert(msg5);
}
