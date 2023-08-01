// let API_URL = 'http://localhost:3000/houses';
//
// load();
//
// function load() {
//     axios.get(API_URL).then((res) => {
//         let str = '';
//         let data = res.data;
//         data.map(item => {
//             str += `<h1>${item.name}+<button onclick="deletes (${item.id})">Delete</button>+<button onclick="edit (${item.id})">Edit</button></h1>`
//         })
//         document.getElementById('display').innerHTML = str
//     })
// }




//
// function deletes(id) {
//     axios.delete(API_URL + `/${id}`).then((res) => {
//         loadHome()
//     })
// }
//     function loadEdit(id){
//         console.log(id)
//         let str=`
// <input type="hidden" name="id" id="id">
// <input type="text" name="name" id="name">
// <input type="text" name="age" id="age" >
// <input type="text" name="score" id="score" >
// <input type="text" name="category" id="category" >
// <button onclick="update()" >Update</button>`
//         edit(id)
//         document.getElementById('main').innerHTML = str
//
//     }

// function edit(id) {
//     axios.get(`http://localhost:3000/houses/search?id=${id}`).then((res) => {
//         let data = res.data;
//         console.log(data)
//         data.map(data => {
//             document.getElementById('id').value = data.id;
//             document.getElementById('name').value = data.name
//             document.getElementById('age').value = data.age
//             document.getElementById('score').value = data.score;
//             document.getElementById('category').value = data.category.id;
//
//         })
//     })
//
// }
//
// function update() {
//     let newData = {
//         id: document.getElementById('id').value,
//         name: document.getElementById('name').value,
//         age: document.getElementById('age').value,
//         score: document.getElementById('score').value,
//         category:{
//             id: document.getElementById('category').value
//         }
//     }
//     console.log(newData)
//     axios.put(API_URL + `/${newData.id}`, newData).then((res) => {
//             loadHome()
//         }
//     )
// }