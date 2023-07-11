// function copyy(){
//                 const copy2=document.getElementById("text2");

//                 copy2.select();//copies the value of the input value of 'variable copy'
//                 document.execCommand('copy');//here copy is the function that we want to use.

//                 // alert("text2 copy success");
// }

function copy() {
  
  const copy = document.getElementById("text1");
  copy.select(); 
  document.execCommand("copy");
  
  //copies the value of the input value of 'variable copy'

  const copy2 = document.getElementById("text2");
  copy2.select();
  document.execCommand("copy");

  alert("text copy success");
}
