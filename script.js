let calculation="";
let count =1;
let val=document.getElementById("#outputscreen")
let buttons=document.getElementById("#buttons");
buttons.addEventListener("click",updateResult);
function updateResult(){
    const result=eval(calculation);
    alert(result);
    val.innertext=result;
    calculation =0;}