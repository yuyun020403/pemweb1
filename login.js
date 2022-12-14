let btnLogin = document.getElementById('login');

btnLogin.onclick = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let form = document.getElementById('form');

    if (username == "yuyun" && password == "12345"){
        alert('Login Berhasil')
        form.setAttribute('action', 'dashboard.html')
    } else {
        alert('Username atau password salah')
    }
 

   }