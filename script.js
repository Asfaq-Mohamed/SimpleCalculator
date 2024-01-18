let calculation="";
let count =1;
let result=0;

function updateResult(){
    result=eval(calculation);
    document.querySelector("#outputscreen").innerHTML=result;
    calculation =0;
}