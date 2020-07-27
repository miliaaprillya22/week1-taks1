// ------Taks 1 -----

//No.4
// 1. Mengubah data dengan spread operator
//    - Nama   -hobby
//    - Email  
// 2  Mengambil data Street dan City 

let data ={
    id : 1,
    name : "Leane Graham",
    username: "Bret",
    email :"sincere@aprill.biz",
    hobby : "Singing",
    address:{
            street : "Kulkas Light",
            suite  :"Apt. 556",
            city   :"Gwenborough",
            zipcode :"92998 - 3874",
 
    },
    phone:"1-770-736-8031 x56442",
    website:"hildegard.org",
 }
 // Menganti (Replace) data di dalam array
 const newObject = { ...data, name: "Leane Graham" , name :"Mila Aprillya",username :"Bret", username :"millaapr",email:"sincere@aprill.biz", email:"milliaaprillya22@gmail.com",hobby :"Singing" , hobby :"Menulis , Membaca"};
 console.log(newObject)
 // Memanggil data (address , street)
 
 let { address:{ 
        street :foo,
        city :bar,
    }
 
 }=data;
 
 console.log(foo)
 console.log(bar)