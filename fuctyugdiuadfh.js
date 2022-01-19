//取亂數
function getRandomSentence(x) {
    var index = Math.floor(Math.random() * x);
    return index;
}
function over(idname) {
    //document.getElementById(idname).style.display = 'none';
    document.getElementById(idname).style.visibility = "hidden";
}
