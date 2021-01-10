// let person = {
//     name: "Auba",
//     lastName: "Pierre",
//     age: 23,
//     city: "London"
// }
// let jsonData = JSON.stringify(person);
// let data = JSON.parse(jsonData);

// alert(data.name)


// $(document).ready(function() {
//     let person = [{
//             name: "Auba",
//             lastName: "Pierre",
//             age: 31,
//             city: "London"
//         },
//         {
//             name: "Yunus",
//             lastName: "Genc",
//             age: 28,
//             city: "Kahta"
//         },
//         {
//             name: "Munir",
//             lastName: "ElHaddadi",
//             age: 25,
//             city: "Ankara"
//         }
//     ];

//     let dataJson = JSON.stringify(person)
//     let data = JSON.parse(dataJson)

//     for (let i = 0; i < data.length; i++) {
//         let satir = "<tr>";
//         satir += "<td>" + data[i].name + "</td>";
//         satir += "<td>" + data[i].lastName + "</td>";
//         satir += "<td>" + data[i].age + "</td>";
//         satir += "<td>" + data[i].city + "</td>";
//         satir += "</tr>";

//         $("#persons").append(satir);
//     }
// });

// let kull = {
//     sayıs: 15,

// }
// let odadaki = {
//     baslik2: "toplantıYeri",
//     katilimci: [
//         { adi: "Munir" },
//         { adi: "Auba" }
//     ],
//     yer: kull,
// };
// kull.dolduruldu = odadaki;
// console.log(JSON.stringify(odadaki["katilimci", "baslik2"]));


// let sınıf = {
//     sınıf_mevcudu: 16
// }

// let sınıf12A = {
//     sinif_adi: "12A",
//     ogrenciler: [
//         { adi: "Munir" },
//         { adi: "Auba" },
//         { adi: "Pierre" }
//     ],
//     yer: sınıf
// };
// sınıf.dolduruldu = sınıf12A;

// console.log(JSON.stringify(sınıf12A, ["yer", "ogrenciler"]) );

// let oda = {
//     katılımcı: 20,
//     toJSON() {
//         return this.katılımcı;
//     }
// }

// let liste = {
//     person: {
//         name: "Yunus",
//         lastname: "Auba",
//         age: 21,
//         city: "Adana",
//         salary: "2500$",
//         date: new Date(Date.UTC(2021, 0, 1)),
//     },
// }
// let dizi = "[1,2,3,4,5]";

// dizi = JSON.parse(dizi);
// alert(dizi[1])


// alert(JSON.stringify(liste.name))
// alert(JSON.stringify(oda))

/************************************************************************** */

// let mat = function() {
//     console.log("Hi")

// }

// setTimeout(function() {
//     console.log("anonynous fonksiyon")
// }, 3000);
// console.log("Naber")


// document.querySelector("#btn").addEventListener("click", function() {;

//     console.log("Hi Codonex");
// })
// console.log("merhaba")

function Person(name, age, city) {
    this.name = name;
    this.city = city;
    this.age = age;

}
Person.prototype.fullName = function() {
    return this.name + " " + this.age + " " + this.city
}
Person.prototype.lastName = "Auba";

let auba = new Person("Yunus", 24, "London");
let sahin = new Person("Şahin", 25, "Lille");
console.log(auba.name + auba.age)
console.log(sahin)
console.log()

/******************************************************************************* */