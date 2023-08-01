function registerUser() {
    let data = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        telephone: document.getElementById('telephone').value,
        address: document.getElementById('address').value,
        image: document.getElementById('image').value,
    };
    console.log(data)
    axios.post('http://localhost:3000/user', data).then(res => {
        // Xử lý dữ liệu trả về từ server nếu cần
        alert('Đăng ký thành công!');
        loadLogin()
    }).catch(error => {
        console.error(error);
        alert('Đăng ký không thành công. Vui lòng thử lại sau.');

    });
}

function registerForm(){

    let str=`
<input type="text"  id="name" placeholder="Name"> 
<input type="text"  id="username" placeholder="Username"> 
<input type="password"  id="password" placeholder="Password">
<input type="text" id="telephone" placeholder="Your Phone Number">
<input type="text" id="address" placeholder="Address">
<input type="text" id="image" placeholder="Image">
<button onclick="registerUser()" >Register</button>`
    document.getElementById('display').innerHTML = str
}
