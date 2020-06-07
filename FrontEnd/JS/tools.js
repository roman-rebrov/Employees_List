const removeBtn = document.querySelector('.remove')
const addBtn = document.querySelector('.add')
const editBtn = document.querySelector('.edit')
const modalWindow = document.querySelector('.modal-wrap')
const modalClose = document.querySelector('.modal-close')
const search = document.querySelector('.search')
const employeeAll = document.querySelectorAll('.employee')
let btnSave = document.querySelector('.form-save')
let inputInner = document.querySelectorAll('.input-inner')
// -
modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none'
    inputInner.forEach(item => {
        item.value = ''
    })  
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
// ----- ADD / EDIT -------------------------------------------------------------
let addElementToList = false
addBtn.addEventListener('click', () => {        // Opening Adding
    modalWindow.style.display = 'flex'
    addElementToList = true
    // console.log(addElementToList)
    // fillForm()
})
// -----------------------------------------
let addDataII
editBtn.addEventListener('click', () => {       // Opening Editing
    addElementToList = false
    // fillForm()
    employeeAll.forEach((item, i) => {
        if(item.classList.value.indexOf("choice") != -1){
            modalWindow.style.display = 'flex'
            // document.querySelector('.inp-name').value = employeesDupl[i].name
            addDataII = i 
            console.log(i)
        } // else {alert('Выберите сотрудника из списка!')} 
    }) 
    fillForm()   
})
// -------------------
function fillForm() {
    let inpName = document.querySelector('.inp-name')
    let inpSurame = document.querySelector('.inp-surname')
    let inpDate = document.querySelector('.inp-date')
    let inpPosition = document.querySelector('.inp-select')
    let inpCity = document.querySelector('.inp-city')
    let inpStreet = document.querySelector('.inp-street')
    let inpBuilding = document.querySelector('.inp-building')
    let inpFlat = document.querySelector('.inp-flat')
    let inpTypeWork = document.querySelector('.inp-typeWork:checked')   
    // -
    if( addElementToList === true){
        let newOdject = {}
        newOdject.photo = ''
        newOdject.name = inpName.value
        newOdject.surname = inpSurame.value 
        newOdject.dateBorn = inpDate.value
        newOdject.city = inpCity.value
        newOdject.street = inpStreet.value
        newOdject.building = inpBuilding.value
        newOdject.flat = inpFlat.value
        if(inpTypeWork === null){
            newOdject.workType = ''
        }else  if(inpTypeWork) {
            newOdject.workType = 'checked'
        }
        // newOdject.position = inpPosition.value
        employeesDupl.push(newOdject)
        // 
        console.log(inpTypeWork)
        console.log(employeesDupl)
        // 
        // inputInner.forEach(item => {
        //     item.value = ''
        // })  
    }else if( addElementToList === false ){
        inpName.value = employees[addDataII].name
        inpSurame.value = employees[addDataII].surname
        inpDate.value = employees[addDataII].dateBorn
        inpCity.value = employees[addDataII].city
        inpStreet.value = employees[addDataII].street
        inpBuilding.value = employees[addDataII].building
        inpFlat.value = employees[addDataII].flat
        inpTypeWork = employees[addDataII].workType 
        
    }
 
}
// ---------------------------
btnSave.addEventListener('click', function saveForm() { 
    // console.log(item)
    // addDataII = document.querySelector('.inp-name').value
    fillForm()
    saveFormII()
})

// -------------------
function saveFormII() {
    if (addElementToList === true){
        modalWindow.style.display = 'none'        
        out()
    }    
}
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


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