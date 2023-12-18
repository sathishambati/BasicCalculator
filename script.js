let display = document.getElementById('disp');

var x;
function add(x){
    let lastchar = display.value.slice(-1);
    let islast = isspecial(lastchar);
    let isnew = isspecial(x);
    if (islast && isnew ){
        return;
    }
    display.value += x;

}

function isspecial(x){
    let specialchar = ['+','-','*','/','%'];
    return specialchar.includes(x);
}
function backspace(){
    display.value = display.value.slice(0,-1);

}
function dis(){
   display.value=eval(display.value);
}


