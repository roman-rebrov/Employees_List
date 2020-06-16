const removeBtn = document.querySelector('.remove')
const addBtn = document.querySelector('.add')
const editBtn = document.querySelector('.edit')
const modalWindow = document.querySelector('.modal-wrap')
const modalClose = document.querySelector('.modal-close')
const search = document.querySelector('.search')
let btnSave = document.querySelector('.form-save')
let inputInner = document.querySelectorAll('.input-inner')
// -
modalClose.addEventListener('click', () => {        // Close
    modalWindow.style.display = 'none'
    inputInner.forEach(item => {
        item.value = ''
    })  
})
// ---
removeBtn.addEventListener('click', emRemove)       // Removing
function emRemove() {                                 // Remove employeesDupl
    employeesDupl.forEach((item, i) => {
       if(employeeAll[i].classList.value.indexOf("choice") != -1){
            employeesDupl.splice(i, 1)
            console.log(employeesDupl);       
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
sortName.addEventListener('click', () => {  // Sorting Name
    employeesDupl.sort((a,b) => {
        if(a.name > b.name) {return 1}
        if(a.name < b.name) {return -1}
        return 0
    })
    out()
} )
sortSurname.addEventListener('click', () => {   // Sorting Surname
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
// --------------------------------------------------------------------------------------
// ----- ADD / EDIT -------------------------------------------------------------
let addElementToList = false
addBtn.addEventListener('click', () => {        // Opening Adding
    modalWindow.style.display = 'flex'
    addElementToList = true
    // console.log(addElementToList)
    // fillForm()
})
// -----------------------------------------
let addDataII = 0
editBtn.addEventListener('click', () => {       // Opening Editing
    addElementToList = false
    
    employeeAll.forEach((item, i) => {
        if(item.classList.value.indexOf("choice") != -1){
            modalWindow.style.display = 'flex'
            // document.querySelector('.inp-name').value = employeesDupl[i].name
            addDataII = i 
            console.log(i)
            console.log(addDataII) 
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
        employeesDupl.push(newOdject)
    }else if( addElementToList === false ){
        inpName.value = employeesDupl[addDataII].name
        inpSurame.value = employeesDupl[addDataII].surname
        inpDate.value = employeesDupl[addDataII].dateBorn
        inpCity.value = employeesDupl[addDataII].city
        inpStreet.value = employeesDupl[addDataII].street
        inpBuilding.value = employeesDupl[addDataII].building
        inpFlat.value = employeesDupl[addDataII].flat
        inpTypeWork = employeesDupl[addDataII].workType 
        
    }
 
}
// ---------------------------
btnSave.addEventListener('click', function saveForm() { 
    // addDataII = document.querySelector('.inp-name').value
    fillForm()
    saveFormII()
})

// -------------------
function saveFormII() {
        modalWindow.style.display = 'none'   
        inputInner.forEach(item => {
            item.value = ''
        })      
        out()
}
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
