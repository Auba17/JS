class Personel{
    constructor(ad , soyad){
        this.ad=ad;
        this.soyad=soyad;
    }
    save(){
    console.log(`Person is save :` + this.ad);
    }
}
    const personel = new Personel("Yunus","Auba")

    personel.save();
    console.log(personel.ad);
    console.log(personel.soyad)
   