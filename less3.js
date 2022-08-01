//bt1
// for(let i = 0; i<100; ++i){

//     console.log(i);

//     console.log(i);
//     if(i===99){
//         console.log('Da hoan thanh');
//     }

// }

//bt2:
// let a =0;
// let b = 1;
// let c;

// for(let i = 0; i<20; i++){
//     console.log(b);
//     c = a + b;
// a = b;
// b = c;

// }

//bt3:
// let a = 0;
// let b = 1;
// let c;
// let state = true;
// for(let i =0; i< 10; ++i){

//     console.log(b);
//     c = a + b;

//     a=b;
//     b = c;

// if(b%5 ===0 ){
//     console.log('Số đầu tiên chia hết cho 5 là:' +b)
// break;
// }
 
// }


//bt4:
// let a = 0;
// let b =1;
// let c;

// let i = 0;
// state = true;

// let tong = 0;
// while(i<20){
//     console.log(b)
//     c = a + b;

//     a = b;

//     b= c;
//    tong +=b;
//     ++i;

    
// }
// console.log('Tong là: '+tong);
//bt5:
// let tong = 0;

// for(let i = 0; i<=30;++i){

//     if(i % 7===0){
// console.log(i)
//         tong = ((1+ i)*30)*7/2;
      
//     }

// }
// console.log('tong cua 30 so dau chia cho 7 la: '+ tong)

//bt6
// for(let i = 0;i<= 100;++i){

//     console.log(i);

//     if(i%3===0 && i%5 != 0){
//         console.log(`${i}= Fizz`)
//     }else if(i%5===0 && i%3 !=0){
//         console.log(`${i} = Buzz`)

//     }else if(i%3===0 && i%5===0){

//         console.log(`${i} = FizzBuzz`);
//     }
// }

//bt7:

// let giaiThua = parseInt(prompt('Nhập số nguyên dương:'));
// let tong = 1;
// for(let i = 1; i<giaiThua;++i){

//     tong = tong*i;

// }
// console.log(tong);