function listProductById(id){
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