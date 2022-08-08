//1
let products = [{

    Name: 'Sony Xperia XZ Premium',
    Brand: 'Sony',
    Price: '4428',
    Color: 'White',
    Category: 'changer'
},
{

    Name: 'OPPO F3 Plus',
    Brand: 'OPPO ',
    Price: '5487',
    Color: 'Black',
    Category: 'phone'
},
{
    Name: 'Iphone 13 Promax',
    Brand: 'Apple',
    Price: '8490',
    Color: 'Gray',
    Category: 'phone'
},
{
    Name: 'Samsung Galaxy S8',
    Brand: 'Samsung ',
    Price: '8490',
    Color: 'blue',
    Category: 'phone'
}
];
//1.1
// for(let i = 0; i<products.length;i++){

//     console.log(`name: ${products[i].Name}`);
//     console.log(`Price: ${products[i].Price}`);
//     console.log('-------------------')
// }

//1.2
// let input =Number (prompt('Enter number product:'));
//     console.log(`name: ${products[input].Name}`);
//     console.log(`Brand: ${products[input].Brand}`);
//     console.log(`Price: ${products[input].Price}`);
//     console.log(`Color: ${products[input].Color}`);
//     console.log(`Category: ${products[input].Category}`);


//     console.log('-------------------')

//1.3
// let input =prompt('Enter Category product:');
// for(let i = 0;i<products.length;i++){
//     if(products[i].Category===input){

//         console.log(`Name: ${products[i].Name}`);
//         console.log(`Price: ${products[i].Price}`);
//         console.log('-------------------');


//     }
// }
//1.4

// for(let i = 0; i<products.length;i++){

//      products[i].Providers = prompt('Enter Providers:');
   
   
//     }
//     //1.5
// console.table(products);
// let find = prompt('Enter a providers:').split(' ');

// for(let i = 0;i<products.length;i++){
//     if(products[i].Providers ===find){
//         console.log(`Name: ${products[i].Name}`);
//         console.log(`Brand: ${products[i].Brand}`);
//         console.log(`Price: ${products[i].Price}`);
//         console.log(`Color: ${products[i].Color}`);
//         console.log(`Category: ${products[i].Category}`);
//         console.log(`Providers: ${products[i].Providers}`);
//     }
// }

//2.

let study = [{
    nameStudy: 'Html',
     ['Hoàn thành']: 'false', 
},
{
nameStudy: 'CSS',
['Hoàn thành']: 'false', 
},
{
 nameStudy: 'Note Package Manager',
['Hoàn thành']: 'false', 
},
 {
nameStudy: 'Git',
['Hoàn thành']: 'false', 
 },
];

for(let i = 0;i<study.length;i++){

    console.log(`${i+1}. ${study[i].nameStudy}`);
    console.log(`Hoàn thành: ${study[i]["Hoàn thành"]}`);
    console.log('-------------');
}

let task = prompt('Please enter a (Create,complete, Read,Update, Delete): ').toLowerCase();
//them
if(task ==='create'){
    let newTask = prompt('Create a task: ')

    for(let i = 0;i<study.length;i++){
    study[i].nameStudy = newTask;
      
    console.log(`${i+1}. ${study[i].nameStudy}`);
    console.log(`Hoàn thành: ${study[i]["Hoàn thành"]}`);

    console.log('-------------'); 
        }
        
}else if(task ==='read'){
    for(let i = 0;i<study.length;i++){

        console.log(`${i+1}. ${study[i].nameStudy}`);
        console.log(`Hoàn thành: ${study[i]["Hoàn thành"]}`);
        console.log('-------------');
    }

}else if(task ==='update'){
    let update = Number(prompt('Enter id update: '));
    let newUpdate = prompt('Enter new content: ');
    study[update].nameStudy = newUpdate;

    for(let i = 0;i<study.length;i++){


        console.log(`${i+1}. ${study[i].nameStudy}`);
        console.log(`Hoàn thành: ${study[i]["Hoàn thành"]}`);
        console.log('-------------');
    }
}else if(task ==='complete'){
        let complete = prompt(`Enter id changer complete task:`);
       
       study[complete]["Hoàn thành"] = 'true';
        for(let i = 0;i<study.length;i++){


            console.log(`${i+1}. ${study[i].nameStudy}`);
            console.log(`Hoàn thành: ${study[i]["Hoàn thành"]}`);
            console.log('-------------');
        }
}else if(task ==='delete'){
    let del = prompt(`Enter id delete task:`);
delete study[del].nameStudy ;
delete study[del]["Hoàn thành"];

for(let i = 0;i<study.length;i++){


    console.log(`${i+1}. ${study[i].nameStudy}`);
    console.log(`Hoàn thành: ${study[i]["Hoàn thành"]}`);
    console.log('-------------');
}
}
