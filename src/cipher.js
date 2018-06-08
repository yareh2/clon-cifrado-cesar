function myFunction(){

let cifrar=document.getElementById("example").value;
let offset=document.getElementById("offset").value;
let scii=cifrar.toUpperCase();
let scii2="";
for(let i=0;i<scii.length;i++){
   let posicionscii=scii.charCodeAt(i);
   let shiftposicion=((posicionscii-65+offset)% 26 + 65);
   let posicionscii2=String.fromCharCode(shiftposicion);
scii2+=posicionscii2


}

//document.getElementById('palabraCifrada').value = scii;
document.getElementById('cifrar').value=scii2;





}
