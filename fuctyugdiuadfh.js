// 顯示讀取遮罩
function ShowProgressBar() {
    displayProgress();
}
// 隱藏讀取遮罩
function HideProgressBar() {
    var progress = $('#divProgress');
    progress.hide();
}
// 顯示讀取畫面
function displayProgress() {
    var progress = $('#divProgress');
    progress.show();
}
//取亂數
function getRandomSentence(x) {
    var index = Math.floor(Math.random() * x);
    return index;
}