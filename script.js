// var boxes = document.querySelectorAll(".box");

// boxes[0].style.backgroundColor ="blue";
// boxes[2].style.backgroundColor ="yellow";

// boxes[0].addEventListener("click", boxClicked);

// var leftMargin = 0;
// var moveAmount = 20;

// function boxClicked(){
//     console.log("Hey, you clicked box");
//     if (leftMargin < 100){
//         leftMargin+=moveAmount;
//     }
//     else{
//         leftMargin-=moveAmount;
//     }
//     boxes[1].style.marginLeft = leftMargin + "px";
// }

// console.log(boxes[0]);

var leftMargin = 0;
var boxes = document.querySelectorAll(".box");
var count = boxes.length;

console.log(count);

function addClicks() {

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", boxClicked);
    }
}



addClicks();

function boxClicked() {

    if (count >= 201 && count <= 300) {
        this.style.backgroundColor = "yellow";
    }
    else if (count>=301 && count<=400){
        this.style.backgroundColor = "green";
    }
        else if (count>=401 && count<=500){
        this.style.backgroundColor = "purple";
    }
        else if (count>=501 && count<=600){
        this.style.backgroundColor = "orange";
    }
        else if (count>=601 && count<=700){
        this.style.backgroundColor = "pink";
    }
        else if (count>=701 && count<=800){
        this.style.backgroundColor = "black";
    }
        else if (count>=801 && count<=900){
        this.style.backgroundColor = "brown";
    }
        else {
        this.style.backgroundColor = "blue";
    }
}






