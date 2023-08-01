let API_URL = 'http://localhost:3000/user'


function loadLogin() {
    let str = `
    <div class="limiter">         
         <div class="container-login100">         
          <div class="wrap-login100">         
           <div class="login100-pic js-tilt" data-tilt>         
            <img src="https://i.pinimg.com/564x/20/32/2e/20322e78cd112ee1f6bcc9dbb75c41ff.jpg" style="height: 300px; margin-left: 70px" alt="IMG">         
           </div>         
            <div class="login100-form validate-form">
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
             
            <div class="text-center p-t-136">         
            <button>
            <a class="txt2" onclick="registerForm()">         
              Create your Account         
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>         
             </a>         
            </button> 
            </div>         
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
            localStorage.setItem("account", JSON.stringify(res.data[0]))
            if(res.data[0].role==='admin'){
                loadHomeAdmin()
            }else {
                loadHomeUser()
            }

        }else {
            axios.get(`http://localhost:3000/doctor/search?username=${username}&password=${password}`).then(res=>{
                if(res.data.length!==0){
                    alert('Bạn đã đăng nhập thành công')
                    loadHomeDoctor()
                }else {
                    alert('Tài khoản này không tồn tại . Vui lòng đăng nhập lại hoặc đăng ký tài khoản mới ')
                }
            })

        }
    })
    // alert('Dang nhap thanh cong')
    // loadHome()
}