const removeBtn = document.querySelector('.remove'),
addBtn = document.querySelector('.add'),
editBtn = document.querySelector('.edit'),
modalWindow = document.querySelector('.modal-wrap'),
modalClose = document.querySelector('.modal-close'),
search = document.querySelector('.search');
let btnSave = document.querySelector('.form-save'),
inputInner = document.querySelectorAll('.input-inner'),
modalPhoto = document.querySelector('.modal-photo'),
modalBtnsAddImg = document.querySelector('.add-photo-from-URL'),
modalBtnImgWrap = document.querySelector('.modal-img-tools-block'),
modalBtnEditRemoveImg = document.querySelector('.img__edit-remove-photo'),
remove = false;
// ----
modalClose.addEventListener('click', () => {        // Close
    modalWindow.style.display = 'none'
    modalBtnsAddImg.style.display = 'none'
    modalBtnImgWrap.style.display = 'none'
    inputInner.forEach(item => {
        item.value = ''
    })  
    modalPhoto.src = "" 
    remove = false
})
// ---
removeBtn.addEventListener('click', emRemove)       // Removing
function emRemove() {                                 // Remove employeesDupl
    employeesDupl.forEach((item, i) => {
       if( employeeAll[i].classList.value.indexOf("choice") != -1 ){
            employeesDupl.splice( i, 1 )
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
    modalBtnsAddImg.style.display = 'flex'
    addElementToList = true
    // fillForm()
})
// -----------------------------------------
let addDataII = 0
editBtn.addEventListener('click', () => {       // Opening Editing
    
    employeeAll.forEach((item, i) => {
        if(item.classList.value.indexOf("choice") != -1){
            modalWindow.style.display = 'flex'
            // document.querySelector('.inp-name').value = employeesDupl[i].name
            addDataII = i 
            addElementToList = false
            fillForm()   
            // console.log(i)
            // console.log(addDataII) 
        } // else {alert('Выберите сотрудника из списка!')} 
    }) 
})
// -------------------
function fillForm() {
    let inpName = document.querySelector('.inp-name'),
    inpPhoto = document.querySelector('.inp-photo'),
    inpSurame = document.querySelector('.inp-surname'),
    inpDate = document.querySelector('.inp-date'),
    inpPosition = document.querySelector('.inp-select'),
    inpCity = document.querySelector('.inp-city'),
    inpStreet = document.querySelector('.inp-street'),
    inpBuilding = document.querySelector('.inp-building'),
    inpFlat = document.querySelector('.inp-flat'),
    inpTypeWork = document.querySelector('.inp-typeWork:checked');   
    // -
    if ( remove === true ) {
        employeesDupl[addDataII].photo = ''
        remove = false
    }
    if( addElementToList === true){
        let newOdject = {}
        newOdject.photo = inpPhoto.value
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
        console.log(employeesDupl);
        
    }else if( addElementToList === false ){        
        if ( employeesDupl[addDataII].photo ){
            modalPhoto.src = employeesDupl[addDataII].photo
            modalBtnImgWrap.style.display = 'flex'
        }else {
            modalBtnsAddImg.style.display = 'flex'
        }
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
        modalBtnsAddImg.style.display = 'none'
        modalBtnImgWrap.style.display = 'none'      
        inputInner.forEach(item => {
            item.value = ''
        }) 
        // console.log(inpPhoto.src);
        modalPhoto.src = "" 
        out()
}
// --------------------
// ----
modalBtnEditRemoveImg.addEventListener( 'click', () => {    // IMG remove/edit
    modalBtnImgWrap.style.display = 'none';
    modalBtnsAddImg.style.display = 'flex';
    // employeesDupl[addDataII].photo = ''
    modalPhoto.src = "" 
    console.log(employeesDupl);
    remove = true;
})
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
