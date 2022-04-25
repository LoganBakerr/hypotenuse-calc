let a;
let b;
let c;

document.getElementById("myButton2").onclick = function(){
    a = document.getElementById("myInput1").value;
    a = Number(a);

    b = document.getElementById("myInput2").value;
    b = Number(b);


    c = Math.sqrt (Math.pow(a, 2) + Math.pow(b,2));

    document.getElementById("myLabel3").innerHTML = "Side C: " + c;
}