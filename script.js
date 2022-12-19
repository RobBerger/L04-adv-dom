let myBtn = document.getElementById('myBtn');

myBtn.onclick = function () {
    alert("FIRST EVENT - HANDLED BY ONCLICK -  CHANGES TEXT COLOR AND BACKGROUND COLOR OF BUTTON");
    myBtn.style.color = "white";
    myBtn.style.backgroundColor = "blue"
} 

function changeBtnText() {
    alert("SECON EVENT - HANDLED BY ADDEVENTLISTENER 1 - CHANGES BUTTON TEXT");
    myBtn.innerHTML = "I am now a blue button!"
}
myBtn.addEventListener("click", changeBtnText);

function sendMessage() {
    alert("THIRD EVENT - HANDLED BY ADDEVENTLISTENER 2 - DYNAMICALLY ADDS A <P> TAG WITH A MESSAGE");
    let pTag = document.createElement("p");
    pTag.innerHTML = "This is my message.";
    document.body.appendChild(pTag);
}

myBtn.addEventListener('click', sendMessage);