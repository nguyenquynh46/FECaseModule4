let API_URL = 'http://localhost:3000/user'


function loadLogin() {
    let str = `
    <div class="limiter">         
         <div class="container-login100">         
          <div class="wrap-login100">         
           <div class="login100-pic js-tilt" data-tilt>         
            <img src="../../images/img-01.png" alt="IMG">         
           </div>         
                         
            <span class="login100-form-title">         
             Member Login         
            </span>         
                
            <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">         
             <input class="input100" type="text" id="username" placeholder="Username">         
             <span class="focus-input100"></span>         
             <span class="symbol-input100">         
              <i class="fa fa-envelope" aria-hidden="true"></i>         
             </span>         
            </div>         
                
            <div class="wrap-input100 validate-input" data-validate = "Password is required">         
             <input class="input100" type="password" id="password"  placeholder="Password">         
             <span class="focus-input100"></span>         
             <span class="symbol-input100">         
              <i class="fa fa-lock" aria-hidden="true"></i>         
             </span>         
            </div>         
                     
            <div class="container-login100-form-btn">         
             <button class="login100-form-btn" onclick="checkLogin()">         
              Login         
             </button>         
            </div>         
                
            <div class="text-center p-t-12">         
             <span class="txt1">         
              Forgot         
             </span>         
             <a class="txt2" href="#">         
              Username / Password?         
             </a>         
            </div>         
                
            <div class="text-center p-t-136">         
             <a class="txt2" href="register.html">         
              Create your Account         
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>         
             </a>         
            </div>         
               
          </div>         
         </div>         
        </div>   


          ` ;
    document.getElementById('display').innerHTML = str
}
function checkLogin(){
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    console.log(username, password)

    axios.get(`http://localhost:3000/user/search?username=${username}&password=${password}`).then(res=>{
        if(res.data.length!==0){
            alert('Bạn đã đăng nhập thành công')
            if(res.data[0].role==='admin'){
                loadHomeAdmin()
            }else {

            }

        }else {
            axios.get(`http://localhost:3000/doctor/search?username=${username}&password=${password}`).then(res=>{
                if(res.data.length!==0){
                    alert('Bạn đã đăng nhập thành công')
                    loadHome()
                }else {
                    alert('Tài khoản này không tồn tại . Vui lòng đăng nhập lại hoặc đăng ký tài khoản mới ')
                }
            })

        }
    })
    // alert('Dang nhap thanh cong')
    // loadHome()
}