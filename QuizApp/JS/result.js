var result = document.getElementById('result');
var greet = document.getElementById('greet');
var percentage = document.getElementById('percentage');
var remarks = document.getElementById('remarks');

window.onload = function() {
    var score = localStorage.getItem('score');
    if(score) {
        var score = parseFloat(score);
        if(score > 50) {
            greet.innerHTML = "Quiz App";
            remarks.innerHTML = "You have successufully passed the test.";
            percentage.innerHTML ="Your percentage: "+ Math.round(score) + "%";
        }
        else {
            greet.innerHTML = "Quiz App";
            remarks.innerHTML = "You have Failed";
            percentage.innerHTML ="Your percentage: "+ Math.round(score) + "%";
        }
    }
    else {
        greet.innerHTML = "There is no Score Data";
    }
}