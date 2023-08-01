function loadLogin() {
    let str = `
    <lable>Username</lable><input type="text" id="username"> <br>
    <lable>Password</lable><input type="text" id="password"> <br>
    <button onclick="checkLogin()">Login</button>  <button onclick="loadRegister()" >Register</button>
          ` ;
    document.getElementById('display').innerHTML = str
}
function checkLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    axios.get(`http://localhost:3000/user/search?username=${username}&password=${password}`).then(res => {
        if (res.data.length !== 0) {
            alert('Bạn đã đăng nhập thành công')
            if (res.data[0].role == 'admin') {
                loadHomeAdmin()
            } else {
                console.log(2)
            }

        } else {
            axios.get(`http://localhost:3000/doctor/search?username=${username}&password=${password}`).then(res => {
                if (res.data.length !== 0) {
                    alert('Bạn đã đăng nhập thành công')
                    loadHome()
                } else {
                    alert('Tài khoản này không tồn tại . Vui lòng đăng nhập lại hoặc đăng ký tài khoản mới ')
                }
            })

        }
    })
}
