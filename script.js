console.log("TEST ERIC");

var myButton = document.querySelector(".EricButton");

myButton.addEventListener("click", changeText);
myButton.innerHTML = "START";
var likeCount = 0;

function changeText() {
    likeCount++;
    myButton.innerHTML = likeCount;
}
