// function save() {
//     let data = {
//         name: document.getElementById('name').value,
//         age: document.getElementById('age').value,
//         score: document.getElementById('score').value,
//         category:{
//             id: document.getElementById('category').value
//         }
//     }
//     console.log(data)
//
//     axios.post(API_URL, data).then((res) => {
//         loadHome()
//     })
// }
function loadAdd(){
    let str=`
<input type="text" name="name" id="name">
<input type="text" name="age" id="age" >
<input type="text" name="score" id="score" >
<input type="text" name="category" id="category" >
<button onclick="save()" >SAVE</button>`
    document.getElementById('main').innerHTML = str

}