//1
// let a = Number(prompt('Nhap a:'));
// let b = Number(prompt('Nhap b:'));

// function total(a,b){

//     return a+b;
// }
// console.log(total(a,b))

//2
// array = [1,2,3,4,5,6]
// let a =0;

// console.log(typeof array)
// function tong(array){
//     for(let i = 0; i<array.length;i++){
  
//         if(array[i] %2 !=0){
//  a = a+array[i];
           
//         }
        
// }
// console.log(a)


// }
// tong(array);
//3
// let bp = Number(prompt('Nhap so: '));
// function binhphuong(bp){

//     return bp**2;
// }
// console.log(binhphuong(bp))
//4

// function dientich(r){
// let s =0;

// return s= 3.14 *(r**2);
    
// }
// console.log(dientich(4))
//4
// let number = Number(prompt('Nhap so: '));
// function giaithua(number){
//     let a = 1;     
//     for(let i = number; i>0;i--){
    
//     a = a * i;     
//    }
//    return a;
// }
// console.log(giaithua(number))
//5
// let a =Number (prompt('Nhap a: '));

// function check (a){

//     if(a == Number(a)){
//         return true;
//     }else{
//         return false;
//     }
// }
// alert(check(a))
//6
// let nguyenduong = Number(prompt('Nhap so:'));
// function check(nguyenduong){

//     if(parseInt(nguyenduong) > 0){

//         return true;
//     }else{
//         return false;
//     }
// }
// alert(check(nguyenduong))
//7
// let a =2;
// let b = 3;
// function doicho(a,b){
// let temp;
// temp =0;
// temp = a;
// a=b
// b= temp;

// return [a,b];

// }
// console.log(doicho(a,b))
//8
// function array(number){
// let a =[];
//     for(let i=number.length-1; i>=0;i--){
        
//        a.push(number[i]);
//     }
//     console.log(a)

// }
// let number =[1,2,3,4,5,6,7,9]
// array(number);
//9
let inputArray = prompt('Enter input anythings:').split('');
let input = prompt('enter a string search: ');
function check (input){
    let a=0;
    for(let i =0; i<inputArray.length;i++){

    if(inputArray[i]===input){
        a=a+1;    
    }
}
if(a>0){
   return`${a} was hide `;
}else{
  return '-1';
}
}
console.log(check(input))