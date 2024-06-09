let display=document.getElementById('display')
let expression =''

function number(value){
   expression +=value;
    display.value=expression
    
}
    function ClearDisplay(){
    expression='';
    display.value='';
}
function result(){
    try{
        let result=eval(expression);
        display.value=result;
       expression=result;
    }catch (error){
        display.value='error'
    }
}
function ClearDisplay1(){
    display.value=display.value.slice(0, -1)
}
function percent(){
    display.value=parseFloat(display.value)/100
}




