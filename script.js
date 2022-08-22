const traffic = document.getElementById('desligado');
const red = document.getElementById('vermelho');
const yellow = document.getElementById('amarelo');
const green = document.getElementById('verde');
const automatic = document.getElementById('automatico');
const a = red.addEventListener('click',redl);
const b = green.addEventListener('click',greenl);
const c = yellow.addEventListener('click',yellowl);
automatic.addEventListener('click',lights);
let colorindex = 0;
function redl(){
    traffic.src = 'img/vermelho.png';

}
function greenl(){
    traffic.src = 'img/verde.png';
}
function yellowl(){
    traffic.src = 'img/amarelo.png';
}
const nextindex = () =>{
    if(colorindex<2){
        colorindex++;
    }else{
        colorindex=0;
    }
}
function lights(){
    function changecolor(){
        const colors = [redl,yellowl,greenl];
        const color = colors[colorindex];
        colors[colorindex]();
        nextindex();
        
    }
    
    myinterval = setInterval(changecolor,500);
    function clear(){
        if(a == true && b == true & c == true){
            
        }

    }
}
