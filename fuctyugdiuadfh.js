//取亂數
function getRandomSentence(x) {
    var index = Math.floor(Math.random() * x);
    return index;
}

function ShowGIF(idname,time) {
    show(idname);
    setTimeout(function () { unshow(idname); }, time);
}

function show(idname) {
    document.getElementById(idname).style.display = "block";
}

function unshow(idname) {
    document.getElementById(idname).style.display = "none";
}

