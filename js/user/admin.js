function loadHomeAdmin(){
    axios.get(API_URL).then((res) => {
        let str='';
        let data = res.data;

        data.map(item => {
            str=`<div> <span onclick="loadListUser()">Home</span> | <span onclick="loadAdd()" >ADD</span> | <span onclick="loadListUser()">ListUser</span></div>
             <div id="main"></div>
             <div id="main1"></div>
            <div id="main2"></div>`
        })
        document.getElementById('display').innerHTML = str
    })
    loadListUser()

}
function loadListUser(){
    axios.get('http://localhost:3000/category').then((res) => {
        let str='';
        let data = res.data;
        data.map(item => {
            str+=`${item.name} ${item.des}<button onclick="deletes (${item.id})">Delete</button><button onclick="loadEdit (${item.id})">Edit</button> <button onclick="listProductById(${item.id})">Chi tiết</button> <br>`
        })
        document.getElementById('main').innerHTML = str
    })
    axios.get('http://localhost:3000/category/search?role=vip').then((res) => {

        let data = res.data;
        let id=data[0].id

        axios.get(`http://localhost:3000/product/search?category.id=${id}`).then((res) => {
            let str='<hr>';
            let data1 = res.data;
            data1.map(item => {
                str+=`${item.name} ${item.price}<button onclick="deletes (${item.id})">Delete</button><button onclick="loadEdit (${item.id})">Edit</button> <button onclick="listProductById(${item.id})">Chi tiết</button> <br>`
            })
            document.getElementById('main1').innerHTML = str
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

}
