// // document.getElementById("dom").innerHTML="Pierre Emeric Aubameyan: Arsenal"

// // var baslik = document.getElementById("baslik");
// // var auba= document.getElementById("auba");
// // baslik.innerHTML = auba.innerHTML;

// // var tumSehirler= document.getElementsByTagName("ul");
// // var takım=tumSehirler[0];

// // tümü=document.getElementsByTagName("li");

// // for(i=0;i<tümü.length;i++){
// //     alert(tümü[i].innerHTML)
// // }
// // var clasElemanları=document.getElementsByClassName("intro1");
// // alert(clasElemanları[0].innerHTML)
// //  var quaryElemanları=document.querySelectorAll("p.intro1");
// //  alert(quaryElemanları[1].innerHTML)

// // var all=document.getElementsByTagName("ul");
// // var hepsi=all.length;

// // allhepsi=document.getElementsByTagName("li");

// // alert(allhepsi.length)

  var valueElemanı=document.getElementsByName("pierre");
 alert(valueElemanı[0].value);
 var auba=document.getElementById("baslik1").addEventListener("mouseover",renginiDegistir);

 function renginiDegistir(){
     document.getElementById("baslik3").style.backgroundColor="yellow";
    document.getElementById("baslik2").style.backgroundColor="red";
    document.getElementById("baslik4").style.backgroundColor="red";
    var changeName=document.getElementsByName("pierre");
    changeName[0].value="Aubameyang"
}

// var baslik= document.createElement("h1");
// var node= document.createTextNode("Hi java");
// baslik.appendChild(node)

// var div1 =document.getElementById("div1")
// var auba2 = document.getElementById("auba2")

// div1.insertBefore(baslik,auba2)

// alert("Auba 2 Siliniyor bro..")
// div1.removeChild(auba2);

// alert("Aubayıda değiştirecem");
// var reis =document.getElementById("reis")
// div1.replaceChild(baslik,reis)