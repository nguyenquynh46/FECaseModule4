function loadEditOrder(id){

    axios.get(`http://localhost:3000/order/search?id=${id}`).then((res)=>{
        let data1 =res.data
       let data=data1[0]
        let str =`

    <input type="hidden" id="id" value="${data.id}">
    <input type="text" id="time" value="${data.time}">
    <input type="text" id="productId" value="${data.product.id}">
    <input type="text" id="doctorId" value="${data.doctor.id}">
    <input type="text" id="userId" value="${data.user.id}">
    <button onclick="updateOrder()">Save</button>
    `

        document.getElementById('display').innerHTML = str
    })

}
function updateOrder(){
    console.log(document.getElementById('userId').value)
  let data1={
      id: document.getElementById('id').value,
      time: document.getElementById('time').value,
      product:{
          id:document.getElementById('productId').value
      } ,
      doctor:{
          id: document.getElementById('doctorId').value
      },
      user:{
          id:document.getElementById('userId').value
      }
    }

    axios.put('http://localhost:3000/order/'+data1.id,data1).then(res=>{
        loadUserOrder()
    })
}

