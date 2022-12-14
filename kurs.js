let pilihan = document.getElementById('pilihan');

pilihan.onchange = () => {
    let inputUang = document.getElementById('uang').value;

    if (inputUang == ''){
        alert('Masukkan uang terlebih dahulu')
    } else{
        if(pilihan.value == 'usd'){
            document.getElementById('konversi').value = 'Rp.' + (inputUang * 9915);
        }else if(pilihan.value == 'sd'){
            document.getElementById('konversi').value = 'Rp.' + (inputUang * 13472);
        }else if(pilihan.value == 'rm'){
            document.getElementById('konversi').value = 'Rp.' + (inputUang * 874);
        }else if(pilihan.value == 'yen'){
            document.getElementById('konversi').value = 'Rp.' + (inputUang * 120);
        }else if(pilihan.value == 'eu'){
            document.getElementById('konversi').value = 'Rp.' + (inputUang * 15888);
        }else if(pilihan.value == 'riyal'){
            document.getElementById('konversi').value = 'Rp.' + (inputUang * 3592);
        }
    }
} 