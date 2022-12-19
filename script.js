function nodeChanges(){
    var linkitem = document.getElementById('link');
    console.log(linkitem.hasAttribute('href'));
    console.log(linkitem.getAttribute('href'));

    linkitem.setAttribute('href',"https://en.wikipedia.org/wiki/HTML");
    console.log(linkitem.getAttribute('href'));
}