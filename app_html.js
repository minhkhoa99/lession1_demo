
let btn = document.getElementById("btn");
let div = document.getElementById("hide-tx");
btn.onclick = function() {
   
    if(div.style.opacity !== '0') {
        div.style.opacity = "0";
    } else {
       div.style.opacity='1';
    }
}


let btn1 = document.getElementById("butt");
let divs = document.getElementById("hide-txt");
let color =['orange', 'yellow', 'blue','green','violet'];

btn1.onclick=function(){

    divs.style.backgroundColor= color [Math.floor(Math.random()*color.length) ];
 
}
//3
let change = document.getElementById('change');
let bt = document.getElementById('bt');
let x =0;
bt.onclick=function(){

   change.style.flexDirection='column-reverse'
}

//4

let zoom = document.getElementById('zoom');
let font = document.getElementById('click');
let count =0;

font.onclick = function(){

 
        if(zoom.style.fontSize!='none'){

            count+=1;
            zoom.style.fontSize =`${20+count}px`;
    }
}

