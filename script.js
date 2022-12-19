function clickMe() {
    alert("Hello World!");
  }

  let myBtn = document.getElementById('myBtn');
myBtn.onclick = function () {
    alert("Hello World, I am using DOM properties to handle events!");
} 

function sayHelloWorld() {
    alert("Hello World, from a named function!");
}

let btn = document.getElementById('btn');
btn.onclick = sayHelloWorld;