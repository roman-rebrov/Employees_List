const removeBtn = document.querySelector('.remove')
const addBtn = document.querySelector('.add')
const editBtn = document.querySelector('.edit')
const modalWindow = document.querySelector('.modal-wrap')
const modalClose = document.querySelector('.modal-close')
const search = document.querySelector('.search')
const employeeAll = document.querySelectorAll('.employee')
// -
modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none'
})
// ---
removeBtn.addEventListener('click', emRemove)       // Removing
function emRemove() {                                 // Remove employeesDupl
    const employeeAll = document.querySelectorAll('.employee')

    employeesDupl.forEach((item, i) => {
       if(employeeAll[i].classList.value.indexOf("choice") != -1){
            employeeAll[i].remove()
            employeesDupl.splice(i, 1)
            console.log(employeeAll[i]);       
        }
    })
    out()
}
// ---
addBtn.addEventListener('click', () => {        // Adding
    modalWindow.style.display = 'flex'
})
// ---
editBtn.addEventListener('click', () => {       // Editing
    let addDataII
    employeeAll.forEach((item, i) => {
        if(item.classList.value.indexOf("choice") != -1){
            modalWindow.style.display = 'flex'
            document.querySelector('.inp-name').value = employeesDupl[i].name
            addDataII = employeesDupl[i].name  
        } // else {alert('Выберите сотрудника из списка!')} 
    })
    document.querySelector('.form-save').addEventListener('click', () => {
        console.log(addDataII);
        addDataII = document.querySelector('.inp-name').value
    })
})
// ------------------------------------------------------------------------
// --------------  Searching  ---------------------------------------------
search.addEventListener('input', () => {        // Input Event
    let trueItem = []
    employeesDupl = employees.slice()
    employeesDupl.forEach((item, i) => {          // Add Searching
        let list = item.name + item.surname
        let listII = item.surname + item.name
        if( list.toLowerCase().indexOf(search.value.toLowerCase().replace(/ /g, '')) != -1 || listII.toLowerCase().indexOf(search.value.toLowerCase().replace(/ /g, '')) != -1 ){
            trueItem.push(item) 
        }
    })
    employeesDupl = trueItem
    out() 
})
// --------------------------------------------------------------------------
// ----- SORTING ------------------------------------------------------------
sortName.addEventListener('click', () => {  // Sorting
    employeesDupl.sort((a,b) => {
        if(a.name > b.name) {return 1}
        if(a.name < b.name) {return -1}
        return 0
    })
    out()
} )
sortSurname.addEventListener('click', () => {
    employeesDupl.sort((a,b) => {
        if(a.surname > b.surname) {return 1}
        if(a.surname < b.surname) {return -1}
        return 0
    })
    out()
} )
sortAge.addEventListener('click', () => {      // Sort Age
    employeesDupl.sort((a,b) => {
        if(a.age > b.age) {return 1}
        if(a.age < b.age) {return -1}
        return 0
    })
    out()
})
// ----- SORTING END ------------------------------------------------------------


// search.addEventListener('input', () => {        // Input Event
//     // let list = []
//     console.log(employees)

//     blockAdd.innerHTML = ''                     // Cleaning

//     employeeAll.forEach((item, i) => {          // Add Searching
//         // console.log(employees[i].name, employees[i].surname)
//         // console.log(item.children[1].innerText ,item.children[2].innerText)
//        let list = item.children[1].innerText + item.children[2].innerText
//        let listII = item.children[2].innerText + item.children[1].innerText
//         // console.log(list, search.value);
//         if( list.toLowerCase().indexOf(search.value.toLowerCase().replace(/ /g, '')) != -1 || listII.toLowerCase().indexOf(search.value.toLowerCase().replace(/ /g, '')) != -1 ){
//             // console.log(item);
//             blockAdd.innerHTML += `
//             <div class="employee grid">
//                 <div class="img-wrap">
//                     <img class='em-picture' src="${employees[i].photo}" alt="">
//                 </div>
//                 <div class="name">${employees[i].name}</div>
//                 <div class="surname">${employees[i].surname}</div>
//                 <div class="born">${employees[i].dateBorn}</div>
//                 <div class="age"></div>
//                 <div class="position">
//                 </div>
//                 <div class="workType">
//                     <input type="checkbox" ${employees[i].workType} name="" id="">
//                 </div>
//                 <div class="adrese">${
//                     employees[i].city + ' ' + employees[i].street + ' ' + employees[i].building + ' ' + employees[i].flat
//                 }</div>
//             </div>
//             `
//         }

//     })
//     // console.log(list, search.value);
//     // let employeesListII = document.querySelectorAll('.employee') // ????????
//     // employeesListII.forEach((item) => {                          // ??????
//     //     item.addEventListener('click', () => {
//     //         employeesListII.forEach((itemII) => {               // Cleaning
//     //             if(item != itemII){itemII.classList.remove('choice')}
//     //         })
//     //         item.classList.toggle('choice')
//     //     })
//     // })
//     // removeBtn.addEventListener('click', emRemove)
//     // ------------------------------
//     // console.log(search.value.toLowerCase().replace(/ /g, '')) 
// })