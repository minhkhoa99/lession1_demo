//bt1
// let a = parseInt(prompt('Nhập a: '));
// let b = parseInt(prompt('Nhập b: '));

// if(a % b ===0)
// {
//     alert(`${a} chia hết cho ${b}`);
// }else{
//     alert(`${a} không chia hết cho ${b}`);
// }
//bt2
// let age = parseInt(prompt('enter your age:'));

// if(age >= 15 && age <=16){

//     alert('Bạn đủ tuổi học lớp 10');
// }else if(age > 16 && age <20){
//     alert('Bạn bị lưu ban hoặc học lại lớp 10')
// }else{

//     alert('Bạn không đủ điều kiện học lớp 10');
// }
//bt3

// let a = parseFloat(prompt('enter your number: '));

// if(a> 0){
//     alert (`${a} là số lớn hơn 0`);
// }else{
//     alert(`${a} là số nhỏ hơn 0`)
// }
//bt4

// let a = parseInt(prompt('Nhập a:'));
// let b = parseInt(prompt('Nhập b: '));
// let c = parseInt(prompt('Nhập c: '));

// if( a > b && a > c){

//     alert(`${a} là số lớn nhất`);
// }else if(a<b && b>c){
//     alert(`${b} là số lớn nhất`);
// }else if(c>a && c> b){
//     alert(`${c} là số lớn nhất`);
// }else{
//     alert(' 3 số bằng nhau');
// }

//bt5

// let a = parseInt(prompt('Nhập điểm kiểm tra: '));
// let b = parseInt(prompt('Nhập điểm Kiểm tra giữa kỳ: '));
// let c = parseInt(prompt('Nhập điểm kiểm tra cuối kỳ:'));

// if(a > 0 && a<=10 && b > 0 && b <= 10 && c>0 && c<=10){

//     let result = (a + b + c)/3;

//     if(result >=8 && result <= 10){
    
//         alert('Bạn xếp lọa học lực giỏi');
//     }else if(result >= 6.5 && result <= 7.9){
    
//         alert('Bạn xếp loại học lực khá');
//     }else if(result >= 5 && result <= 6.4){
//         alert('Bạn xếp loại học lực trung bình');
//     }else{
//         alert('Bạn xếp học lực loại yếu');
//     }
    
    
// }else{

//     alert('Vui lòng nhập lại điểm')
// }
//bt6

// let a = parseInt(prompt('Nhập số tiền bán được: '))
// let result = a * 0.05;
// if(a > 500){
//     alert(`Số tiền phần trăm được hưởng là : ${result}`);

// }else{
//     alert('Vui lòng nhập lại số tiền cần tính')
// }

//bt7
let weight = parseFloat(prompt('Enter your weight:'));
let height = parseFloat(prompt('Enter your height: '));

let fullHeight = height/100;
let bmi = weight/(fullHeight**2);
console.log(bmi)
if(bmi < 18){
    alert('Nghiện rồi tăng cân đi!');
}else if(bmi > 18 && bmi < 25){
    alert('Bình thường !');
}else if(bmi > 25 && bmi < 30){
    alert('Bia ít thôi thừa cân rồi !');
}else if(bmi > 25 & bmi<30){
    alert('Bớt mồm đi béo quá rồi !');
}else{
    alert('Béo lắm dồi giảm cân đi !');
}
