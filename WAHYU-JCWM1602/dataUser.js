let getTable = document.getElementById('tabelDataUser')
console.log(getTable)
let getTbody = getTable.getElementsByTagName('tbody')[0]
console.log(getTbody)


let tr = ''
function showDataUser(){

for(let i = 0; i < dataUsers.length; i++){
    tr += `
    <tr>
        <td><center>${i+1}</center></td>
        <td><center>${dataUsers[i].nama}</center></td>
        <td><center>${dataUsers[i].email}</center></td>
        <td><center>${dataUsers[i].role}</center></td>
        <td>
        <input type="button" value="edit" >
        <input type="button" value="delete">
        </td>
    </tr>
    `
}
getTbody.innerHTML += tr
}
showDataUser()


let addData = document.getElementsByClassName('inputDtauser')

let nama = dataUsers[0].value
let email = dataUsers[1].value
let role = dataUsers[2].value



let inputUser = document.getElementById('user').value
let inputEmail = document.getElementById('email').value


let addOpsi = document.getElementsByName('role')
    addOpsi[0] = document.getElementsByName('role').value
    addOpsi[1] = document.getElementsByName('role').value

console.log(addOpsi)
let AddUser = document.getElementById('inputButtom')
AddUser.addEventListener('click', addDataUser)


// function addDataUser(){
//     if(inputUser && inputEmail && addOpsi){
//         dataUsers.push({

//             nama : inputUser,
//             email : inputEmail,
//             role : addOpsi
//         })
//     }

// }
