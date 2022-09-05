/** @format */

//6

// a= 2;//undefine
// var a;//undefine
// console.log(a);//2

//7
// console.log(a);//undefine

// var a = 2;//2
//8

// var a = 10;//10
// function foo() {
//     var a;//undefine
//     console.log( a );//undefine
//     a = 2;
//     }
//     foo();

//9

// foo();
// var foo();//err
// // function foo() {
// // console.log(1);//1
// // }
// foo = function() {
// console.log(2);
// }//err foo chua duoc goi

//10. Không chạy đoạn code sau,
//phán đoán output của các câu lệnh console.log() var foo();
// function foo() {
//     console.log(1);
//     }//chua duoc thuc thi
//     foo = function() {
//     console.log(2);//2
//     }

// //     foo();

//11 Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
// let arr = ['1','2','3','4']
// function removeEnd(arr, n) {

//     for(let i = 1;i<=n;i++){
//         arr.pop();
//     }
//     return arr;
// }
// console.log(removeEnd(arr,3));

// let arr = ['1','2','3','4']
// function removeEnd(arr, n) {

//     let newArr = arr.length-n;
//     arr.length = newArr;
//     return arr;
// }
// console.log(removeEnd(arr,3));

//12

// function first(arr,n){
//c1
// arr.length = n;
// return arr;
//c2
// let result = [];
// for(let i = 0;i<=n-1;i++){

//     result.push(arr[i]);
// }
// return result;
//c3
// return arr.splice(n, arr.length-n);
// }

// //13. Cho một mảng
// const users = [
// {
// name: "Angelina Jolie",
// age: 80
// },
// {
// name: "Eric Jones",
// age: 2
// },
// {
// name: "Paris Hilton",
// age: 5
// },
// {
// name: "Kayne West",
// age: 16
// },
// {
// name: "Bob Ziroll",

// age: 100
// }
// ]

// let inputUsr = users.map(function(user){

//     return   `<h1>${user.name} </h1>

//                 <h2>${user.age}</h2>`

// });

// console.log(inputUsr);

// //14
// let usrInput = users.map(function(user){

// return user.name;

// })

// console.log(usrInput);

// 15. - Viết một hàm triple() trả về một số đã được nhân 3
//Sử dụng phương thức map của array, viết hàm multiply() nhận vào một mảng và
//trả về mảng mới với các số đã được nhân 3. Sử dụng hàm triple để nhân 3 các
//số đó.
// let tripleNum = [1,2,3,4,55];

// let n = prompt('NHap:');
// function triple(number){

//     return number*3;
// }
// console.log(triple());
// let tripleNumber = tripleNum.map((trip)=>{

//     return (trip*3)*triple(n);

// })

// console.log(tripleNumber);

// function triple(num) {
//   return num * 3;
// }

// function multiply(arr) {
//   return arr.map(triple);
// }
// 16. Sử dụng hàm filter của array. Viết một hàm nhận vào
//một mảng số ngẫu nhiên, hàm đó trả về
//một mảng mới chỉ chứa các phần tử lớn hơn 5

// let array = [1,2,3,4,5,6,7,8,9,0,10,11,21];

// let filterArray = array.filter(function(arr){

//    return arr > 5;
// })

// console.log(filterArray);
//21 Viết một hàm nhận vào một mảng 2 chiều,
// sử dụng phương thức reduce và trả về một mảng một chiều chứa toàn bộ
// những phần tử con trong các mảng con

//reduce tra ve 1 gia tri duy nhat

// let  flatternArr = [

//     ['a','b','c'],

//     ['b','a']
// ]

//array tuong trung cho mang flatt
// index tuong trung cho cac phan tu trong mang
// let arr = flatternArr.reduce(function(array,index){

//    return array.concat(index);

// }, [])
// console.log(arr)
//c3
// let arr = flatternArr.reduce(function (array, index) {
//   return [...array, ...index]; //spread operator (array,object)
// }, []);
// console.log(arr);
//c2
// function flatternArr(arr) {
//   return arr.reduce(function (array, index) {
//     for (let i = 0; i <= array.length - 1; i = i + 1) {
//       array.push(index[i]);
//     }
//     return array;
//   }, []);
// }
// let result = flatternArr([
//   [1, 2, 3],
//   [4, 5],
// ]);
// console.log(result);

//20 Viết một hàm nhận vào một mảng ngẫu nhiên.
//Sử dụng phương thức reduce củaarray,
//trả về object mới với các phần tử trong mảng là key,
// và value sẽ là số lần xuất hiện của chúng ở trong mảng

//17 Cho mảng sau
// var members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
//     ];
// Viết một hàm nhận đầu vào là mảng trên,
//sử dụng phương thức filter của array,
//trả về một mảng mới chỉ chữa những phần tử object có gender là female

// let filterMembers = members.filter(function(member,index,array){

//    let ouput = [];
// if(member.gender==='female'){

//    ouput.push(member.gender);

//    return ouput;

// }
// });

// console.log(filterMembers);

//18 Viết một hàm nhận vào một mảng số tự nhiên, sử dụng find method của array trả về số
//chẵn đầu tiên của mảng đó, nếu không tìm thấy trả về undefined

// let arrays = [1,13,3,4,5,6,7,8,9];

// let findArr= arrays.find((array)=>{

// let newArray = [];

// if(array%2==0){

//    return newArray.unshift(array);

// // console.log(newArray);

// }else{
//     return undefined;
// }

// })
// console.log(findArr);

//20 Viết một hàm nhận vào một mảng ngẫu nhiên.
// Sử dụng phương thức reduce của array,
//trả về object mới với các phần tử trong mảng là key,
//và value sẽ là số lần xuất hiện của chúng ở trong mảng

//??= toán tử loại bỏ null
// let arrayy = ["a", "b", "c", "b", "a"];
//c1
// let inputAr= arrayy.reduce((arr,index)=>{

//     arr[index] ??=0;
//     arr[index]++;

//     return arr;

// },{});
// console.log(inputAr);

//c2

// let result = {};

// for (let i = 0; i <= arrayy.length - 1; i++) {
//   let element = arrayy
//   .length.toFixed[i];

//   if (!result[element]) {
//     result[element] = 1;
//   } else {
//     result[element] = result[element] + 1;
//   }
// }
// console.log(result);

//c3
// let ar = arrayy.reduce(function (pre, curent) {
//   if (!pre[curent]) {
//     pre[curent] = 1;
//   } else {
//     pre[curent] = pre[curent] + 1;
//   }
//   return pre;
// }, {});
// console.log(ar);
//22 Viết một hàm nhận vào một mảng số gồm 2 số.
//Tính tổng của các số tự nhiên trong khoảng 2 số đó

// let a = Number(prompt("nhập số a"));
// let b = Number(prompt("nhập số b"));
// if (a < b){
//     var sum1 = 0
//     for(let i = a; i <= b; i++){
//         sum1 = sum1 + i;
//     }
//     console.log(sum1);
// }else if (a > b){
//     var sum2 = 0
//     for(let i = a; i >= b; i--){
//         sum2 = sum2 + i;
//     }
//     console.log(sum2);
// }

//23 Viết một hàm nhận vào 2 mảng số, so sánh 2 mảng và trả về một mảng mới
// chứa các phần tử độc nhất giữa 2 mảng. Chú ý sử dụng hàm filter

// let array =([1,2,3,4],[1,2,1]);

// let findArray = array.find((arr)=>{

// })

//22
// function sum(arr) {
//   let result = 0;
//   for (let i = arr[0]; i <= arr[1]; i++) {
//     result = result + i;
//   }
//   return result;
// }
// console.log(sum([1, 4]));

//23

// function diff(arr1, arr2) {
//   //loc nhung phan tu trong arr1 chua ton tai trong arr2
//   let result = arr1.filter(function (e, i) {
//     return arr2.indexOf(e) === -1;
//   });
//   //loc nhung phan tu trong arr2 chua ton tai trong arr1
//   let result2 = arr2.filter(function (e, i) {
//     return arr1.indexOf(e) === -1;
//   });
//   //noi 2 mang result lai va return
//   return result.concat(result2);
// }
// let re = diff([1, 2, 3, 4], [1, 2, 1]);

// console.log(re);

//24
// function sunFib(n) {
//   let num1 = 1;
//   let num2 = 1;
//   let temp;
//   let result = [];
//   for (let i = 1; i <= n; i = i + 1) {
//     if (num1 <= n) {
//       result.push(num1);
//     }
//     temp = num1;
//     num1 = num2;
//     num2 = temp + num1;
//   }
//   let sum = 0;
//   for (e of result) {
//     if (e % 2 == 1) {
//       sum = sum + e;
//     }
//   }
//   return sum;
// }
// console.log(sunFib(1));

// function binaryAgent(str) {
//   var newBin = str.split(" ");
//   var binCode = [];

//   for (i = 0; i < newBin.length; i++) {
//     binCode.push(String.fromCharCode(parseInt(newBin[i], 2))); //convert binary
//   }
//   return binCode.join("");
// }
// let result = binaryAgent(
//   "01000001 01110010 01100101 01101110 00100111 01110100"
// );

// console.log(result);

//26
//mang arguments la kieu du lieu gan giong voi mang va ko su dung dc voi ham built-in
//kiem soat so luong bien truyen vao function
// function flatternArr(arr) {
//   return arr.reduce(function (array, index) {
//     return [...array, ...index]; //spread operator (array,object)
//   });
// }

// function unique() {
//   let result = [];
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//     result.push(arguments[i]);
//   }
//   result = flatternArr(result);
//   return result.filter(function (e, i) {
//     return result.indexOf(e) === i;
//   });
// }

// let result = unique([1, 2, 3, 4], [3, 4, 5, 6], [3, 7, 9]);

// console.log(result);
