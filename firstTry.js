var kullanicilar = [{email:"yunus0261@gmail.com"}, {sifre:"123456"}]
var tiwitler =[email="yunus0261@gmail.com", tiwit = "Bugün hava bulutlu"]

var email=prompt("Email")
var sifre=prompt("Şİfre")

function giris(){
    if(kullanicilar[0].email=email && kullanicilar[1].sifre==sifre){
        console.log("Giriş Başarılı..")
        console.log(tiwitler)
    }
    else{
        console.log("Girişiniz yapılmadı lütfen email ve sifrenizi kontrol ediniz")
    }
}
giris(sifre,email)