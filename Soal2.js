//No.2 
//Menghitung Rata- Rata UN Beserta Grade nya 
// - Mengisi 4 Nilai 
//  *(Bahasa Indonesia)   *(Bhs.Inggris)
//  *(Matematika)         *(IPA)

const  indo    = 90;
const  inggris = 89; // 1, Membuat variable untuk setiap matpel
const  ipa     = 69;
const  mtk     = 80;

let x=indo + inggris +ipa + mtk ; // 2.  Menjumlah  semua matpel 

let rata2= x/4; // 3. Jumlah akan di bagi dari banyak nya matpel

// 4. Eksekusi 
if(rata2 >= 90){// 1. Jika Nilai Lebih besar dari "90"
 console.log('Rata-rata Nilai ' +''+ rata2) // ---> Menampilkan Rata2 
 console.log('Grade'+ rata2+'A')  //--> (A)
}else if (rata2 >=80){                          // (2)
   console.log('Rata-rata Nilai ' +''+ rata2)  
   console.log('Grade '+'B')
}else if(rata2 >=70){                            //(3)
   console.log('rata rata Nilai ' +''+ rata2)  
   console.log('Grade '+'C')
}else if (rata2 <=70){                          // (4)
    console.log('rata rata Nilai ' +''+ rata2) 
    console.log('Grade '+'D')
}else if (rata2 <=60){                           //(5)
   console.log('rata rata Nilai '+''+ rata2)  
   console.log('Grade '+'E')
}else{ // 6. (Pengecualian jika matpel kosong)                                   
    console.log("Nilai tidak ada")
}
