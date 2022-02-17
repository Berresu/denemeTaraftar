document.getElementById("listeTakimlar").addEventListener("change", taraftarlar);
let sonuc=document.getElementById("sonucBaslik");

function taraftarlar(){
    sonuc.classList.remove("bjk", "fb", "gs", "ts", "normal");
    takimlar=document.getElementById("listeTakimlar").selectedIndex;
    console.log(takimlar);

    if(takimlar==0){
        document.body.style.backgroundColor="#000";
        sonuc.innerHTML="Beşiktaş sen bizim her şeyimizsin!";
        sonuc.classList.add("bjk");
        document.getElementById("resim").setAttribute("src", "bjk.jpg");
    }
    else if(takimlar==1){
        document.body.style.backgroundColor="yellow";
        sonuc.innerHTML="Biz bize yeteriz Çünkü Fenerbahçeliyiz.";
        sonuc.classList.add("fb");
        document.getElementById("resim").setAttribute("src", "fb.jpg");
    }
    else if(takimlar==2){
        document.body.style.backgroundColor="red";
        sonuc.innerHTML="Gerçekleri tarih yazar tarihi de Galatasaray...";
        sonuc.classList.add("gs");
        document.getElementById("resim").setAttribute("src", "gs.jpg");
    }
    else if(takimlar==3){
        document.body.style.backgroundColor="blue";
        sonuc.innerHTML="Alayına isyan, inadına Trabzonspor.";
        sonuc.classList.add("ts");
        document.getElementById("resim").setAttribute("src", "ts.jpg");
    }
}

function kaydet(){
    let ad, soyad, yas;
    ad=document.getElementById("txtAd").value;
    soyad=document.getElementById("txtSoyad").value;
    yas=document.getElementById("numberYas").value;
    console.log(ad);
    console.log(soyad);
    console.log(yas);

    if(yas < 18){
        sonuc.innerHTML="Siteye 18 Yaşının Altındakiler Giremez!";
    }
    else{
        sonuc.innerHTML="Siteye Üye Olabilirsiniz";
    }
}
