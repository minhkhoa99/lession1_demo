// let myColor = ['red', 'Green','white','Black'];

// for(let i = 0; i<myColor.length;i++){


// }
//     console.log(myColor.join(','));
//     console.log(myColor.join('+'));

//2


//bài 1
// let myColor = ["Red", "Green", "White", "Black"];
// let a = myColor.join(",");
// console.log(a);

// let myColor = ["Red", "Green", "White", "Black"];
// let a = myColor.join("+");
// console.log(a);

//bài 2
// let number = prompt('nhập dãy số').split('');
// let b=[];
// for(let i = 0; i < number.length; i++) {
//     b.push(number[i]);
// }
// let a = b.join('-');
// console.log(a);

//bài 3


//bài 4
// let a = prompt('enter a squence of number, separated bay commas (,)').split(',');
// let sum = 0;
// for(let i = 0; i < a.length; i++) {
//     sum += Number(a[i]);
// }
// console.log(sum);

//bài 5
// let a = prompt('enter a squence of number, separated bay commas (,)').split(',');
// let b = [];
// for(let i = 0; i < a.length; i++) {
//     b.push(Number(a[i]));
// }
// console.log(b);
// let min_val = Math.min.apply(null, b);
// console.log("min= ",min_val);
// // 0,1,2,3,4

//bài 6
// let a =[3, 4, 6, -9, 10, -88, 2];
// let b = Number(prompt('nhập số muốn tìm'));
// let c = -1;
// for (let i = 0; i <= a.length - 1; i = i + 1) {
//     if (b === a[i]) {
//     c = i;
//     }
// }
// if(c===-1){
//     console.log(`${b} is not found in my array` );
// }else {
//     console.log(`${b} is  found in my array at index ${c}`);
// }

// bài 7
// let a = [5,7,300,90,24,50,75];

// console.log('xin chào đây là kích thước đàn cừu của tôi');
// console.log(a);

// let max_val = Math.max.apply(null, a);
// console.log(`con cừu lớn nhất của tôi có kích thước ${max_val}, hãy cạo nó`);

// a[a.indexOf(max_val)] = 8;
// console.log('sau khi cạo lông đây là đàn cừu của tôi');
// console.log(a);
// let MONTH1 = 0;
// for(let i = 0; i < 3; i++) {
//     MONTH1++
//     for(let i = 0; i <a.length; i++){
//     a[i] = a[i] + 50;
//     }
//     console.log('month'+MONTH1);
//     console.log('sau 1 tháng bầy cừu của tôi đã lớn, đây là kích thước đàn cừu của tôi');
//     console.log(a);
//     let max_val = Math.max.apply(null, a);
//     console.log(`con cừu lớn nhất của tôi có kích thước ${max_val}, hãy cạo nó`);
//     a[a.indexOf(max_val)] = 8;
//     console.log('sau khi cạo lông đây là đàn cừu của tôi');
//     console.log(a);
// }
// let sum = 0;
//  for(let i = 0; i < a.length; i++) {
//      sum += a[i];
//  }
//  console.log(`đàn của tôi có tổng kích thước ${sum}`);
//  let tien = sum * 2;
//  console.log(`tôi sẽ lấy ${sum} x 2$ = ${tien}`);



//bài 8
// let a = prompt('enter a sequence of names');
// let b = a.split(',');
// let c =[];
// for (let i = 0; i < b.length; i++) {
//     c.push(`<${b[i]}>`);
// }
// console.log(`${b}=>  ${c}`);

// bài 9
// let a = prompt('nhập dãy số');
// let b = a.split(',');
// let c = [];
// for (let i = 0; i < b.length; i++) {
//     if (Number(b[i]) % 2 == 1) {
//         c.push(b[i]);
//     }
// }
// console.log(`${b} => ${c}`);
