function loadHomeAdmin(){
// hiện ra cac Category
    axios.get('http://localhost:3000/user').then((res) => {
        let str='';
        let data = res.data;

        data.map(item => {
            str=`<div> <span onclick="loadListAdmin()">Home</span> | <span onclick="loadAdd()" >ADD</span> | <span onclick="loadEdit(${item.id}}">ListUser</span></div>
    <div id="main"></div>
<div id="main1"></div>
<div id="main2"></div>
<div id="main3"></div>`
        })
        document.getElementById('display').innerHTML = str
    })
    loadListAdmin();
}
function loadListAdmin(){
    axios.get('http://localhost:3000/category/search?role=thường').then((res) => {
        let str='<div class="container-fluid py-2 border-bottom d-none d-lg-block">\n' +
            '    <div class="container">\n' +
            '        <div class="row">\n' +
            '            <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">\n' +
            '                <div class="d-inline-flex align-items-center">\n' +
            '                    <a class="text-decoration-none text-body pe-3" href=""><i class="bi bi-telephone me-2"></i>+012 345 6789</a>\n' +
            '                    <span class="text-body">|</span>\n' +
            '                    <a class="text-decoration-none text-body px-3" href=""><i class="bi bi-envelope me-2"></i>info@example.com</a>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="col-md-6 text-center text-lg-end">\n' +
            '                <div class="d-inline-flex align-items-center">\n' +
            '                    <a class="text-body px-2" href="">\n' +
            '                        <i class="fab fa-facebook-f"></i>\n' +
            '                    </a>\n' +
            '                    <a class="text-body px-2" href="">\n' +
            '                        <i class="fab fa-twitter"></i>\n' +
            '                    </a>\n' +
            '                    <a class="text-body px-2" href="">\n' +
            '                        <i class="fab fa-linkedin-in"></i>\n' +
            '                    </a>\n' +
            '                    <a class="text-body px-2" href="">\n' +
            '                        <i class="fab fa-instagram"></i>\n' +
            '                    </a>\n' +
            '                    <a class="text-body ps-2" href="">\n' +
            '                        <i class="fab fa-youtube"></i>\n' +
            '                    </a>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<!-- Topbar End -->\n' +
            '\n' +
            '\n' +
            '<!-- Navbar Start -->\n' +
            '<div class="container-fluid sticky-top bg-white shadow-sm">\n' +
            '    <div class="container">\n' +
            '        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">\n' +
            '            <a href="index.html" class="navbar-brand">\n' +
            '                <h1 class="m-0 text-uppercase text-primary"><i class="fa fa-clinic-medical me-2"></i>Medinova</h1>\n' +
            '            </a>\n' +
            '            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">\n' +
            '                <span class="navbar-toggler-icon"></span>\n' +
            '            </button>\n' +
            '            <div class="collapse navbar-collapse" id="navbarCollapse">\n' +
            '                <div class="navbar-nav ms-auto py-0">\n' +
            '                    <a href="index.html" class="nav-item nav-link active">Home</a>\n' +
            '                    <a href="about.html" class="nav-item nav-link">About</a>\n' +
            '                    <a href="service.html" class="nav-item nav-link">Service</a>\n' +
            '                    <a href="price.html" class="nav-item nav-link">Pricing</a>\n' +
            '                    <div class="nav-item dropdown">\n' +
            '                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>\n' +
            '                        <div class="dropdown-menu m-0">\n' +
            '                            <a href="blog.html" class="dropdown-item">Blog Grid</a>\n' +
            '                            <a href="detail.html" class="dropdown-item">Blog Detail</a>\n' +
            '                            <a href="team.html" class="dropdown-item">The Team</a>\n' +
            '                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>\n' +
            '                            <a href="appointment.html" class="dropdown-item">Appointment</a>\n' +
            '                            <a href="search.html" class="dropdown-item">Search</a>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <a href="contact.html" class="nav-item nav-link">Contact</a>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </nav>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<!-- Navbar End -->\n' +
            '\n' +
            '\n' +
            '<!-- Hero Start -->\n' +
            '<div class="container-fluid bg-primary py-5 mb-5 hero-header">\n' +
            '    <div class="container py-5">\n' +
            '        <div class="row justify-content-start">\n' +
            '            <div class="col-lg-8 text-center text-lg-start">\n' +
            '                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5" style="border-color: rgba(256, 256, 256, .3) !important;">Welcome To Medinova</h5>\n' +
            '                <h1 class="display-1 text-white mb-md-4">Best Healthcare Solution In Your City</h1>\n' +
            '                <div class="pt-2">\n' +
            '                    <a href="" class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Find Doctor</a>\n' +
            '                    <a href="" class="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Appointment</a>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<!-- Hero End -->\n' +
            '\n' +
            '\n' +
            '<!-- About Start -->\n' +
            '<div class="container-fluid py-5">\n' +
            '    <div class="container">\n' +
            '        <div class="row gx-5">\n' +
            '            <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px;">\n' +
            '                <div class="position-relative h-100">\n' +
            '                    <img class="position-absolute w-100 h-100 rounded" src="img/about.jpg" style="object-fit: cover;">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="col-lg-7">\n' +
            '                <div class="mb-4">\n' +
            '                    <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>\n' +
            '                    <h1 class="display-4">Best Medical Care For Yourself and Your Family</h1>\n' +
            '                </div>\n' +
            '                <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>\n' +
            '                <div class="row g-3 pt-3">\n' +
            '                    <div class="col-sm-3 col-6">\n' +
            '                        <div class="bg-light text-center rounded-circle py-4">\n' +
            '                            <i class="fa fa-3x fa-user-md text-primary mb-3"></i>\n' +
            '                            <h6 class="mb-0">Qualified<small class="d-block text-primary">Doctors</small></h6>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col-sm-3 col-6">\n' +
            '                        <div class="bg-light text-center rounded-circle py-4">\n' +
            '                            <i class="fa fa-3x fa-procedures text-primary mb-3"></i>\n' +
            '                            <h6 class="mb-0">Emergency<small class="d-block text-primary">Services</small></h6>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col-sm-3 col-6">\n' +
            '                        <div class="bg-light text-center rounded-circle py-4">\n' +
            '                            <i class="fa fa-3x fa-microscope text-primary mb-3"></i>\n' +
            '                            <h6 class="mb-0">Accurate<small class="d-block text-primary">Testing</small></h6>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col-sm-3 col-6">\n' +
            '                        <div class="bg-light text-center rounded-circle py-4">\n' +
            '                            <i class="fa fa-3x fa-ambulance text-primary mb-3"></i>\n' +
            '                            <h6 class="mb-0">Free<small class="d-block text-primary">Ambulance</small></h6>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<!-- About End -->\n' +
            '\n' +
            '\n' +
            '<!-- Services Start -->\n' +
            '<div class="container-fluid py-5">\n' +
            '    <div class="container">\n' +
            '        <div class="text-center mx-auto mb-5" style="max-width: 500px;">\n' +
            '            <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>\n' +
            '            <h1 class="display-4">Excellent Medical Services</h1>\n' +
            '        </div>\n' +
            '        <div class="row g-5">';
        let data = res.data;
        data.map(item => {
            str+=` <div class="col-lg-4 col-md-6">
                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div class="service-icon mb-4">
                        <i class="fa fa-2x fa-user-md text-white"></i>
                    </div>
                    <h4 class="mb-3">${item.name}</h4>
                    <p class="m-0">${item.des}</p>
                    <span class="btn btn-lg btn-primary rounded-pill">
                        <i class="bi bi-arrow-right" onclick="listProductById(${item.id})"></i>
                        <i class="bi bi-trash" onclick="deletes (${item.id})"></i>
                        <i class="bi bi-pencil-square" onclick="loadEdit (${item.id})"></i>
                    </span>
                </div>
               
         </div>`

        })
        document.getElementById('main').innerHTML = str +` </div>
    </div>
</div>`
    })
    axios.get('http://localhost:3000/category/search?role=vip').then((res) => {

        let data = res.data;
        let id=data[0].id

        axios.get(`http://localhost:3000/product/search?category.id=${id}`).then((res) => {
            let str=`<div class="container-fluid bg-primary my-5 py-5">
    <div class="container py-5">
        <div class="row gx-5">
            <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="mb-4">
                    <h5 class="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                    <h1 class="display-4">Make An Appointment For Your Family</h1>
                </div>
                <p class="text-white mb-5">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                <a class="btn btn-dark rounded-pill py-3 px-5 me-3" href="">Find Doctor</a>
                <a class="btn btn-outline-dark rounded-pill py-3 px-5" href="">Read More</a>
            </div>
            <div class="col-lg-6">
                <div class="bg-white text-center rounded p-5">
                    <h1 class="mb-4">Book An Appointment</h1>
                    <div>
                        <div class="row g-3">
                            <div class="col-12 col-sm-6">
                                <select class="form-select bg-light border-0" style="height: 55px;">
                                    <option selected>Choose Department</option>
                                    <option value="1">Department 1</option>
                                    <option value="2">Department 2</option>
                                    <option value="3">Department 3</option>
                                </select>
                            </div>
                            <div class="col-12 col-sm-6">
                                <select class="form-select bg-light border-0" style="height: 55px;">
                                    <option selected>Select Doctor</option>
                                    <option value="1">Doctor 1</option>
                                    <option value="2">Doctor 2</option>
                                    <option value="3">Doctor 3</option>
                                </select>
                            </div>
                            <div class="col-12 col-sm-6">
                                <input type="text" class="form-control bg-light border-0" placeholder="Your Name" style="height: 55px;">
                            </div>
                            <div class="col-12 col-sm-6">
                                <input type="email" class="form-control bg-light border-0" placeholder="Your Email" style="height: 55px;">
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="date" id="date" data-target-input="nearest">
                                    <input type="text"
                                           class="form-control bg-light border-0 datetimepicker-input"
                                           placeholder="Date" data-target="#date" data-toggle="datetimepicker" style="height: 55px;">
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="time" id="time" data-target-input="nearest">
                                    <input type="text"
                                           class="form-control bg-light border-0 datetimepicker-input"
                                           placeholder="Time" data-target="#time" data-toggle="datetimepicker" style="height: 55px;">
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Appointment End -->


<!-- Pricing Plan Start -->
<div class="container-fluid py-5">
    <div class="container">
        <div class="text-center mx-auto mb-5" style="max-width: 500px;">
            <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
            <h1 class="display-4">Excellent Medical Services</h1>
        </div>
        <div class="row g-5">`;
            let data1 = res.data;
            data1.map(item => {
                str+=` <div class="col-lg-4 col-md-6">
                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div class="service-icon mb-4">
                        <i class="fa fa-2x fa-user-md text-white"></i>
                    </div>
                    <h4 class="mb-3">${item.name}</h4>
                    <p class="m-0">${item.des}</p>
                    <span class="btn btn-lg btn-primary rounded-pill">
                        <i class="bi bi-arrow-right" onclick="listProductById(${item.id})"></i>
                        <i class="bi bi-trash" onclick="deletes (${item.id})"></i>
                        <i class="bi bi-pencil-square" onclick="loadEdit (${item.id})"></i>
                    </span>
                </div>
            </div>
                `

            })
            document.getElementById('main1').innerHTML = str+`  </div>
            </div>
        </div>`

        })
    })
    axios.get('http://localhost:3000/doctor').then((res) => {
        let str='<hr>';
        let data2 = res.data;
        data2.map(item => {
            str+=`${item.name} ${item.profile}<button onclick="deletes (${item.id})">Delete</button><button onclick="loadEdit (${item.id})">Edit</button> <button onclick="listProductById(${item.id})">Chi tiết</button> <br>`
        })
        document.getElementById('main2').innerHTML = str
    })
    axios.get('http://localhost:3000/review').then((res) => {
        let str='<hr>';
        let data2 = res.data;
        data2.map(item => {


            axios.get(`http://localhost:3000/user/search?id=${item.user.id}`).then((res) => {
                let data3=res.data;

                data3.map(item3=>{
                    str+=`${item3.name} + ${item3.image} <br>`

                })
                str+=`${item.review} <button onclick="deletes (${item.id})">Delete</button><button onclick="loadEdit (${item.id})">Edit</button> <button onclick="listProductById(${item.id})">Chi tiết</button> <br>`
                document.getElementById('main3').innerHTML = str
            })

        })


    })

}
function listProductById(id){
    console.log(1111)
    axios.get(`http://localhost:3000/product/search?category.id=${id}`).then(res=> {

        let data = res.data;
        let str=`${data[0].category.detailDes} <br>`;
        data.map(item => {
            str+=`${item.name} + ${item.price} ${item.des}<button onclick="deletes (${item.id})">Delete</button><button onclick="loadEdit (${item.id})">Edit</button> <br>`
        })
        document.getElementById('main').innerHTML = str
    })
    document.getElementById('main1').innerHTML = ''
}