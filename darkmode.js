var body = document.querySelector("body");
var btn = document.querySelector("button");
var darkmode = true;


// jika kondisi darkmode true
// maka ubah warna background menjadi hitam
// jika kondisi darkmode false
// maka warna background menjadi putih
btn.addEventListener("click", function(){
    if (darkmode == true){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        btn.innerHTML = "Mode Terang";
        darkmode = false;
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
        btn.innerHTML = "Mode Gelap";
        darkmode = true;
    }
})