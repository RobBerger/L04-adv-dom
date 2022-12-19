let myBtn = document.getElementById('myBtn');

myBtn.onclick = function () {
    alert("FIRST ONCLICK");
    myBtn.style.color = "blue";
}

myBtn.onclick = function () {
    alert("SECOND ONCLICK - DYNAMICALLY ADDS A <P> TAG WITH A MESSAGE");
    let pTag = document.createElement("p");
    pTag.innerHTML = "This is my message.";
    document.body.appendChild(pTag);
}