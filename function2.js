//1. Viết chương trình cộng hai số (Sử dụng Return)
// let a =Number (prompt('Nhap a:'));

// let b = Number(prompt('Nhap b:'));

// function total(a,b){

//     return a+b;
// }
// console.log(total(a,b))

//2.Tính tổng các số lẻ trong mảng. (Sử dụng Return)

// array = [1,2,3,4,5,6]
// let a =0;

// function tong(array){
//     for(let i = 0; i<array.length;i++){
//         if(array[i] %2 !=0){
//  a = a+array[i];
//         }     
// }
// return a   ;  

// }
// console.log((tong(array)))

//3 Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn
// tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng.
// Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai,
// trả về tổng của hai tham số.

// let a = Number(prompt('Nhập tham số 1: '));
// let b = Number(prompt('Nhập tham số 2: '));

// function check(a,b){

//     let result = a > b ? alert(`${a} > ${b}`) : a <=b 
//      ? alert(a+b) : alert('invalid');  

//     return result;
// }
// console.log(check(a,b));

//4 Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để
// bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm.
//  Đoạn mã có dạng như sau:

// function addNumbers() {
//     firstNum = 4;
//      secondNum = 8;
//     result = firstNum + secondNum;
//     alert(result);
//     return result;
// }
// result = 0;
// result = addNumbers();
// alert(result)

// function footToMeter(foot){

//     meter = 0.305 * foot;
//     return meter;
// }
// alert(footToMeter(1));

// function meterToFoot(meter){

//     foot = 3.279 * meter;
//     alert(foot);
// }
// meterToFoot(20)

//6 Tạo hàm để kiểm tra số nguyên tố

function nguyenTo(a){
    if(a<2){
        return `${a} không là số nguyên tố`;
    }else if(a===2){

        return `${a} là số nguyên tố`

    }else{
    for(let i =0; i<a;i++){
       if (a%i===0){

        return `${a} là số nguyên tố`;

       }else if(a%2===0){
        return `${a} không là số nguyên tố`;

       }

        }   
    }
}
alert(nguyenTo(2))