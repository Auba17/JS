//   function ligler() { 

//  let oyuncular={isim : "Auba",
//                   yas : 23,
//                 takım : "arsenal"}
//   let takımlRenkleri={
//     galatasaray : "Sarı-Kırmızı",
//     arsenal : "Kırmızı-Beyaz",
//     barcelona : "Bordo - Mavi"

//   }              
//                 this.takımlRenkleri=takımlRenkleri;

//                 this.oyuncular=oyuncular;
// }
//  let ligler1=new ligler()
// console.log(ligler1.takımlRenkleri.arsenal + " " + ligler1.oyuncular.isim)

// function karesiniAl(sayi) {
//   return sayi*sayi

// }

// console.log(karesiniAl(8))

//  function kareAl(n) {
//   if (n===0 || n ===1) {
//     return 1;   
//   }
//   else{
//     return (n* kareAl(n-1));
//   }
// }
// console.log(kareAl(5))

// var superLig = function team(){
//   const gs ={
//     renk: "Sarı-Kırmızı",
//     yıl : 1905,
//     yıldızSayısı : 4,
//     enPOyuncu :"Muslera"

//   }

//   this.gs=gs;
// }
// console.log(superLig)  




// // var num1 = 20,
// //     num2 = 3,
// //     name = "Chamahk";

// // function multiply() {
// //   return num1 * num2;
// // }

// // console.log(multiply())

// // function getScore () {
// //   var num1 = 2,
// //       num2 = 3;
// //       name1="Auba"

// //   function add() {
// //     return name1 + " scored " + (num1 + num2);
// //   }

// //   return add();
// // }

// // console.log(getScore()); 

// let kullanıcı = {
//   name: "Yusuf",
//   lastName: "Auba"
// }
// kullanıcı.yas = 25;
// for (anahtar in kullanıcı) {

//  alert(kullanıcı[anahtar])
// }

let obj = {
  test: "Yunus",
  name: "Auba",
  surname: "ierre"
}

// alert(obj.test)

// alert("test" in obj)

// let klon ={
//   sehir : "KAhta"
// }
// let auba ={

// }

// for(anahtar in obj){
//   klon[anahtar]=obj[anahtar]
// }

// Object.assign(auba,obj,klon)

// console.log(auba)



// klon.isim="Aubameyang";
// klon.test="YunusAuba";

// alert(klon.isim)
// console.trace(obj)

// console.log(klon)

// let fruit= {
//   yaz :"Elma",
//   yaz2:"portakal",
//   yaz3:"vs"
// }

// let myFruit = Object.assign({}, fruit);

// console.log(myFruit)


// let kullanıcı ={
//   isim : "Kemal",
//   soyad :"Mülayim"
// }

// kullanıcı.isim="Auba"
// console.log(kullanıcı)

// delete kullanıcı.isim;
// console.log(kullanıcı)


// let maas ={
//   ahmet :320,
//   mehmet:450,
//   sami:150
// };
// let toplam=0;

//  for(topla in maas)
//  toplam+=maas[topla];

// alert(toplam);
// let id =Symbol("id");

// let kullanıcı={
//   isim: "Auba",
//   [id] : 123

// }
// alert(kullanıcı[id])

// function property(a,b) {
//     this.a = a;
//     this.b = b;

//     return b*8*a;
  
// }
// function newSimulator(x,y){
      
//       let obj={};
//       property.call(obj, ...arguments);
//       return obj;     
// }
 

//  let topla =newSimulator(4,5);

// //  console.trace(topla)

// let liste={
//   age : 25,
//   name: "Yunus",
//   lastName : "Auba",
//   salary : 3500,
//   id : 1
// }

// let map = new Map();
// map.set(1,'Auba');
// map.set('1','Yunus')

// alert(map.get(1)+" "+map.get('1'))

// console.log(map.get(1)+" "+map.get('1'))

let liste =new Map([
  ['Yunus', 'Auba'],
  ['Munir', 'ElHaddadi']
]);
for(let i of liste.keys() ){
  alert(i);
}
for(let i of liste.values()){
  console.trace(i)
}