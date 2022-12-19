function addClassOne() {
    const divElem1 = document.getElementById('id1');
    divElem1.className = 'classOne';
}

function addHiddenClass() {
    const divElem1 = document.getElementById('id1');
    divElem1.classList.add('hidden');
}

function removeHidden() {
    const divElem1 = document.getElementById('id1');
    divElem1.classList.remove('hidden');
}