let modal1 = document.getElementsByClassName("model1")[0];
let modal2 = document.getElementsByClassName("model2")[0];
let modal3 = document.getElementsByClassName("model3")[0];

let content1 = document.getElementsByClassName("text a")[0];
let content2 = document.getElementsByClassName("text b")[0];
let content3 = document.getElementsByClassName("text c")[0];

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

button1.onclick = function(){
    modal1.style.display = "block";
}
content1.onclick = function(){ 
    modal1.style.display = "none";
}

button2.onclick = function(){
    modal2.style.display = "block";
}
content2.onclick = function(){ 
    modal2.style.display = "none";
}

button3.onclick = function(){
    modal3.style.display = "block";
}
content3.onclick = function(){ 
    modal3.style.display = "none";
}
