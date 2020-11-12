/*

1. Make the sequential process in one page.
2. Make decision based on users' previous choice.
3. Add grayscale images to the options.                               

*/





document.addEventListener("click", showText);

var showText = () => {
    //点了哪个选项？
    //这个选项直接出现在最后的result里面



}


var resultText = "".


$(document).ready(function() {

    $(".answer-text").click(function() {


        resultText = "You are a person who likes" + $(".answer-text").val() + $(".answer-text").val() + " on the " + $(".answer-text").val()

        //alert("值为: " + $(".answer-text").val());
    });

});