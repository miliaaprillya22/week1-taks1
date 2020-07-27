//--Taks 1 -//

//No.1
//**Membuat Variable dengan nama biodata*/
// Megunakan data object dengan value dan tipe data
//  1. Name (str) 
//  2. Age (Number)
//  3. hobbies(array)
//  4. isMarried(boolean)
//  5. School list (Array of object) with key name
//  6. Major (If any , if no set "null")
//  7.Skill(Array object) with key SkillName and level(B,A,E)
//  8. InterestCoding(Boolean)


true | false
let Biodata = {
   Nama       :'Milla Aprillya',
   age        :19,
   hobby      :['Membaca','Mengambar','Mendengarkan Musik'],
   ismerried  :false,
   SchoolList :['School List',{
               SDN:"SDN Pasirkaliki",yout:"2012"},
               {SMP:"SMPN 32 Bandung",yout2:"2016"},
               {SNK:"SMK BPI Bandung",yout3:"2019", 
                Major :'Rekayasa Perangkat Lunak',}],
   skillName  :[{js:"beginner",css:"beginner"}],
   skilsCoding:false,
}
console.log(Biodata.Nama)
console.log(Biodata.age)
console.log(Biodata.hobby)
console.log(typeof ismerried)
console.log(Biodata.SchoolList)
console.log(typeof Major)
console.log(Biodata.skilsCoding)