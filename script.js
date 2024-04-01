function addFun() {
    var a = document.getElementById("num_one").value;
    var b = document.getElementById("num_two").value;
    var r = +a + +b;
    document.getElementById("res").innerHTML = r;
 }
 function subFun() {
    var a = document.getElementById("num_one").value;
    var b = document.getElementById("num_two").value;
    var r = +a - +b;
    document.getElementById("res").innerHTML = r;
 }
 function mulFun() {
    var a = document.getElementById("num_one").value;
    var b = document.getElementById("num_two").value;
    var r = +a * +b;
    document.getElementById("res").innerHTML = r;
 }
 function divFun() {
    var a = document.getElementById("num_one").value;
    var b = document.getElementById("num_two").value;
    var r = +a / +b;
    document.getElementById("res").innerHTML = r;
 }
 function modFun() {
    var a = document.getElementById("num_one").value;
    var b = document.getElementById("num_two").value;
    var r = +a % +b;
    document.getElementById("res").innerHTML = r;
 }