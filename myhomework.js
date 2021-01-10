var sayac = 0
let sentence = prompt("Dizinin Eleman Sayısını Girin");
var dizi = new Array(sentence);
for (let i = 0; i < 5; i++) {
    dizi[i] = prompt("Dizinin Elemanlarını Girin");
    //diziye değerleri aldık
}
console.log("diziye girilen elemanlar=" + dizi);
//ilk iki for dizideki elemanların eşit olup olmadığını öğrenmek için dönüyor, mesela dizi[3]=1 ve dizi[7]=1
for (let j = 0; j < sentence; j++) {
    for (let k = 0; k < sentence; k++) {
        //eğer tekrar eden değer bulunursa if in içindeki kod çalışıyor
        if (dizi[j] == dizi[k]) {
            //bu for da, dizinin bütün değerleri için ekranda yazdırmanın önüne geçmek için.
            //örneğin 2 üç kez tekrar ediyor olabilir ama ekranda sadece bir tane 2nin üç kez girildiğini görmemiz lazım aksi takdirde ekranda kaç kez girildiyse o kadar yazdırıyor. 
            for (let l = 0; l < j; l++) {
                //eğer değerin kaç kez girildiğini önceden yazdırmışsam bunu tekrar yazdırmama gerek yok
                if (dizi[l] == dizi[j])
                //sayacı -1 e eşitliyorum çünkü sonrasında 1 artıracak 0 olacak ve en son ekrana yazdırırken sayaç 0 değilse yazdıracak
                    sayac = -1;
            }
            sayac++;
        }
    }
    if (sayac != 0)
        console.log(dizi[j] + " sayısı " + sayac + " kez tekrar edildi ");
    sayac = 0;
}