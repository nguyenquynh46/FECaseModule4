function loadHomeUser(){
    axios.get(API_URL).then((res) =>{
        let data =res.data
        let str = ''
        data.map(item => {
            str=`
<div> <span onclick="loadOrder()">List Order</span> | <span onclick="loadUserOrder()" >Your Order</span> 
             `
        })
        document.getElementById('display').innerHTML = str
    })


}
function loadOrder(){
    axios.get(APP_URL).then((res) => {
        let str='';
        let data = res.data;
        data.map(item => {
            str+=`${item.name} ${item.des} ${item.detailDes} <button onclick="listProductForCustomer()">Chi tiết</button> <br>`
        })
        document.getElementById('display').innerHTML = str
    })

}
function listProductForCustomer(){
    axios.get(`http://localhost:3000/product`).then((res)=>{
        let str =''
        let data = res.data
        data.map(item => {
            str += `${item.name} ${item.price} ${item.categoryId} ${item.des} <button onclick="loadAddOrder()">I choose this option</button> <br>`
        })
        document.getElementById('display').innerHTML =str

    })
}
function loadUserOrder(){
    axios.get(`http://localhost:3000/order`).then((res) =>{
        let str =''
        let data = res.data
        data.map(item =>{
            str += `${item.id}, ${item.time} ,${item.user.name}, ${item.product.name} ,${item.doctor.name}, <button onclick="loadEditOrder(${item.id})">Edit</button> `
        })
        document.getElementById('display').innerHTML = str
    })
}



function loadSaveOrder(){
    let data = {
        time : document.getElementById('time').value,
        userId: JSON.parse(localStorage.getItem("account")).id,
        productId: document.getElementById('productId').value,
        doctorId: document.getElementById('doctorId').value,
    }

    axios.post(`http://localhost:3000/order`, data).then((res)=>{
        loadUserOrder()
    })
}
function loadAddOrder(){

    let str=`
<input type="text"  id="time">time
<input type="text"  id="productId">productId
<input type="text"  id="doctorId">doctorId
<button onclick="loadSaveOrder()" >SAVE</button>`
    document.getElementById('display').innerHTML = str
}
