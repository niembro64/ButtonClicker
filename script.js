// console.log("TEST ERIC");

// var myButton = document.querySelector(".EricButton");

// myButton.addEventListener("click", changeText);
// myButton.innerHTML = "START";
// var likeCount = 0;

// function changeText() {
//     console.log("Function Called")
    
//     likeCount++;
//     myButton.innerHTML = likeCount;
// }

var loginOptions = ["Login","Logout"]
var loginNumber = 0;
var loginButton = document.querySelector("#login");
function buttonChange(){

    if (loginNumber === 0){
        loginNumber++;
    }else{
        loginNumber--;
    }
    loginButton.innerHTML = loginOptions[loginNumber];
}

function removeButton(){
    var elem = document.getElementById('addDef')
    elem.parentNode.removeChild(elem)
}

function likeAlert(){
    alert("Ninja Was Liked");
}