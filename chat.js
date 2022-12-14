let btnKirim = document.getElementById('kirim');

btnKirim.onclick = () => {
    let chatBox = document.getElementById('box');
    let pesan = document.getElementById('pesan');
    let paragraph = document.createElement('p');

    chatBox.appendChild(paragraph);
    paragraph.innerHTML = pesan.value;
}