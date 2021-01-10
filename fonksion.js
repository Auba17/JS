// var  selamVer=function selam() {
//     console.log("Hello")
// } 
// selamVer();

// const selamVer2= () => {
//     console.log("Hello 2")
// }
// selamVer2();

//  var topla =(sayi1,sayi2)=>{
//      return sayi1+sayi2;
//  }
//     let toplam=topla(3,4);

//     console.log(toplam)

    const dizi=[1,2,3,4,5,6];
        const kareDizisi=[];

    dizi.forEach(sayi=>{
        kareDizisi.push(sayi*sayi)
    })
    console.log(kareDizisi );

    // MapDizi

    const mapDizi = dizi.map(sayi=>sayi*3) 
    console.log(mapDizi);

  //filterDizi

  const filterDizi = dizi.filter(sayi=>sayi>3)
  console.log(filterDizi)
 
    //reduce 
  const tolam = dizi.reduce((acc,sayi) => {
      return acc + sayi;
  } ,10);
  console.log(tolam)




  var urunADı = {
      ekle : function() {
          console.log(this)
      }
  }
    console.log(urunADı)