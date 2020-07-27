// ---- Taks 1

//No.3
// Membuat Program satu variable dengan satu variable 
// output yang menghasilkan segitga number str => number
// segitiga terbalik 

let printSegitiga = "enam"; // Variable printSegitiga 
let x = printSegitiga.length +1; // Mengubah data str number (di hitung oleh lenght)


// Eksekusi 
for (let i = x; i>= 1; i--){  //Jika  5>1 5 akan berkurang 1 dan akan looping ke bawah 
    for(let j = 1 ; j<=i; j++){ // menambah baris baru 
     console.log(j+"")
    }
    console.log()
  }
 // jika i>1 