const removeBtn = document.querySelector('.remove')
const addBtn = document.querySelector('.add')
const editBtn = document.querySelector('.edit')
const modalWindow = document.querySelector('.modal-wrap')
const modalClose = document.querySelector('.modal-close')
const search = document.querySelector('.search')

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none'
})
// 
removeBtn.addEventListener('click', emRemove)
function emRemove() {      // Remove employees
    employeeAll.forEach((item) => {
        // console.log(item.classList.value.indexOf("choice"));
       if(item.classList.value.indexOf("choice") != -1){
            item.remove()
       }
    })
    
}
// 
addBtn.addEventListener('click', () => {        // Adding
    modalWindow.style.display = 'flex'
})
// 
editBtn.addEventListener('click', () => {       // Editing
    let addDataII
    employeeAll.forEach((item, i) => {
        if(item.classList.value.indexOf("choice") != -1){
            modalWindow.style.display = 'flex'
            document.querySelector('.inp-name').value = employees[i].name
            addDataII = employees[i].name
            
        } // else {alert('Выберите сотрудника из списка!')} 
    })
    document.querySelector('.form-save').addEventListener('click', () => {
        console.log(addDataII);
        addDataII = document.querySelector('.inp-name').value
    })
})
// ------------------------------------------------------------------------
search.addEventListener('input', () => {
    // let list = []
    // console.log(search.value)
    blockAdd.innerHTML = ''

    employeeAll.forEach((item, i) => {
        // console.log(employees[i].name, employees[i].surname)
        // console.log(item.children[1].innerText ,item.children[2].innerText)
       let list = item.children[1].innerText + item.children[2].innerText
        // console.log(list, search.value);
        if( list.toLowerCase().indexOf(search.value.toLowerCase().replace(/ /g, '')) != -1 ){
            // console.log(item);
            blockAdd.innerHTML += `
            <div class="employee grid">
                <div class="img-wrap">
                    <img class='em-picture' src="${employees[i].photo}" alt="">
                </div>
                <div class="name">${employees[i].name}</div>
                <div class="surname">${employees[i].surname}</div>
                <div class="born">${employees[i].dateBorn}</div>
                <div class="age"></div>
                <div class="position">
                </div>
                <div class="workType">
                    <input type="checkbox" ${employees[i].workType} name="" id="">
                </div>
                <div class="adrese">${
                    employees[i].city + ' ' + employees[i].street + ' ' + employees[i].building + ' ' + employees[i].flat
                }</div>
            </div>
            `
        }

    })
    // console.log(list, search.value);
    let employeesListII = document.querySelectorAll('.employee') // ????????
    employeesListII.forEach((item) => {                          // ??????
        item.addEventListener('click', () => {
            employeesListII.forEach((itemII) => {               // Cleaning
                if(item != itemII){itemII.classList.remove('choice')}
            })
            item.classList.toggle('choice')
        })
    })
    removeBtn.addEventListener('click', emRemove)
    // ------------------------------
    // console.log(search.value.toLowerCase().replace(/ /g, '')) 
})
// --------------------------------------------------------------------------
// ----- SORTING ------------------------------------------------------------

sortName.addEventListener('click', () => {
    
    employees.sort((a,b) => {
        if(a.name > b.name) {return 1}
        if(a.name < b.name) {return -1}
        return 0
    })
    blockAdd.innerHTML = ''

    // console.log(employees)
    employees.forEach((item, i) => {
        blockAdd.innerHTML += `
        <div class="employee grid">
            <div class="img-wrap">
                <img class='em-picture' src="${employees[i].photo}" alt="">
            </div>
            <div class="name">${employees[i].name}</div>
            <div class="surname">${employees[i].surname}</div>
            <div class="born">${employees[i].dateBorn}</div>
            <div class="age"></div>
            <div class="position">
            </div>
            <div class="workType">
                <input type="checkbox" ${employees[i].workType} name="" id="">
            </div>
            <div class="adrese">${
                employees[i].city + ' ' + employees[i].street + ' ' + employees[i].building + ' ' + employees[i].flat
            }</div>
        </div>
        `
    })
    
} )

sortSurname.addEventListener('click', () => {
    
    employees.sort((a,b) => {
        if(a.surname > b.surname) {return 1}
        if(a.surname < b.surname) {return -1}
        return 0
    })
    blockAdd.innerHTML = ''

    // console.log(employees)
    employees.forEach((item, i) => {
        blockAdd.innerHTML += `
        <div class="employee grid">
            <div class="img-wrap">
                <img class='em-picture' src="${employees[i].photo}" alt="">
            </div>
            <div class="name">${employees[i].name}</div>
            <div class="surname">${employees[i].surname}</div>
            <div class="born">${employees[i].dateBorn}</div>
            <div class="age"></div>
            <div class="position">
            </div>
            <div class="workType">
                <input type="checkbox" ${employees[i].workType} name="" id="">
            </div>
            <div class="adrese">${
                employees[i].city + ' ' + employees[i].street + ' ' + employees[i].building + ' ' + employees[i].flat
            }</div>
        </div>
        `
    })
    
} )