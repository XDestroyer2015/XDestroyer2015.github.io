//取亂數
function getRandomSentence(x) {
    var index = Math.floor(Math.random() * x);
    return index;
}

function ShowGIF() {
    show('drawlots');
    setTimeout(function () { unshow('drawlots');},3000);
}

function show(idname) {
    document.getElementById(idname).style.display = "block";
}

function unshow(idname) {
    document.getElementById(idname).style.display = "none";
}
