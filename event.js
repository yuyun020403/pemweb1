// tambahkan value ke dalam element div html
let area_nf
function isi() {
    area_nf = document.getElementById("nf");
    area_nf.innerHTML = "<h1>STT Nurul Fikri</h1>";
};
// buar fucntion biru untuk mengubah warna background 
// ketika cursor di arahkan ke judul
function biru() {
    area_nf.style.backgroundColor="blue";
    area_nf.style.color="white";
};
// buat function kuning untuk mengubah warna background
// ketika cursor di arahkan keluar judul
function kuning() {
    area_nf.style.backgroundColor="yellow";
    area_nf.style.color="black";
};