let el = document.createElement("h2");
// tambahkan kalimat atau text menggunakan fungsi createText
let text = document.createTextNode("Belajar Web");
// ambil id div parent menggunakan get element by id
let box = document.getElementById("box1");

// tambahkan element h2 ke dalam element div box
// menggunakan method appenChild
el.appendChild("text");
box.appendChild("el");

// edit element div id p1 menggunakan method replace child
// buat element baru
let el2 = document.createElement("h2");
// tambahkan kalimat atau text menggunakan fungsi createText
let text2 = document.createTextNode("Belajar Web");

//masukkan element menggunakan method appendchild
el2.appendChild(text2);

// ambil id element div,lalu disimpan ke dlm variabel

let p1 = document.getElementById("p1");
// gunakan method replace untuk mengedit nilai id p1
box.replaceChild(el2,p1);

// hapus salah satu element menggunakan method removechild
box.removeChild(el)