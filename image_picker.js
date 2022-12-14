let pilihan = document.getElementById('img-dropdown');

pilihan.onchange = () => {
    if(pilihan.value == 'gorila'){
        document.getElementById('image').setAttribute('src', '../assets/img/gorilla.jpg')
        alert('ini gambar goarilla');
    }  else if(pilihan.value == 'singa'){
        document.getElementById('image').setAttribute('src', '../assets/img/singa.jpg')
        alert('ini gambar singa');
    }  else {
        document.getElementById('image').setAttribute('src', '../assets/img/elang.jpg')
        alert('ini gambar elang');
    }
}