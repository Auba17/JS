var kullanicilar = [{ email: "yunus0261@gmail.com" }, { sifre: "123456" }]
var tiwitler = [email = "yunus0261@gmail.com", tiwit = "Bugün hava bulutlu"]

var email = prompt("Email")
var sifre = prompt("Şİfre")


function kulanıcıVarmı(email,sifre){
    for (i = 0; i <= kullanicilar.length; i++) {
        if (email == kullanicilar[i].email, sifre == kullanicilar[i].sifre) {
            return true;
        }
    }
    return false
}


function giris() {
    if (kulanıcıVarmı(email,sifre)) {
        console.log("Giriş Başarılı..")
        console.log(tiwitler)
    }
    else {
        console.log("Girişiniz yapılmadı lütfen email ve sifrenizi kontrol ediniz")
    }
}
giris(sifre, email)