
function myFunction(){

let cifrar=document.getElementById("example").value;
let offset=document.getElementById("offset").value;
let scii2="";


for(let i=0;i<cifrar.length;i++){
  let posicionscii=cifrar.charCodeAt(i);
  if (65<=posicionscii && posicionscii<=90){

  let posicion2=((posicionscii-65+parseInt(offset))% 26 + 65);
  console.log(posicion2);
  let posicionscii2=String.fromCharCode(posicion2);

scii2+=posicionscii2;
  }
  else if (posicionscii>=97&& posicionscii<=122){
    let posicion2=((posicionscii-97+parseInt(offset))% 26 + 97);
    let posicionscii2=String.fromCharCode(posicion2);
    console.log(posicionscii2);
  scii2+=posicionscii2;
}
else if(posicionscii==32){
  let posicionscii2=String.fromCharCode(posicionscii);
  console.log(posicionscii2);
}
else if (posicionscii>=33 && posicionscii<=64){
  let posicion2=((posicionscii-33+parseInt(offset))% 32 + 33);
}
else if(posicionscii>=123 && posicionscii<=126){
  let posicion2=((posicionscii-123+parseInt(offset))% 4 + 123);
}



}

 return document.getElementById('cifrar').value = scii2;
}
//document.getElementById('palabraCifrada').value = scii;
