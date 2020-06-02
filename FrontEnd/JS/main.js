const blockAdd = document.querySelector('.employees-wrap')
const sortName = document.querySelector('.sort-name')
const sortSurname = document.querySelector('.sort-surname')
const sortAge = document.querySelector('.sort-age')
// -----------------------------
// -----------------------------
// let todayM = new Date().getUTCMonth()
let todayY = new Date().getUTCFullYear()
// console.log(todayM + '/' +todayY)
const inpDate = document.querySelector('.inp-date')
inpDate.addEventListener('change', ()=> {
    console.log(inpDate.value)
})
console.log(inpDate)
// -----------------------------
// -----------------------------

// const removeBtn = document.querySelector('.remove')

employees.forEach((item,i) => {
    
    // let ageOfEmployee = todayY - +item.dateBorn
    employees[i].age = todayY - +item.dateBorn
    // let ttt = delete employees[i]

    blockAdd.innerHTML += `
    <div class="employee grid">
        <div class="img-wrap">
            <img class='em-picture' src="${item.photo}" alt="">
        </div>
        <div class="name">${item.name}</div>
        <div class="surname">${item.surname}</div>
        <div class="born">${item.dateBorn}</div>
        <div class="age">${item.age}</div>
        <div class="position">
        </div>
        <div class="workType">
            <input type="checkbox" ${item.workType} name="" id="">
        </div>
        <div class="adrese">${
            item.city + ' ' + item.street + ' ' + item.building + ' ' + item.flat
        }</div>
    </div>
    `
})
const employeeAll = document.querySelectorAll('.employee')
// let clickedEl;

employeeAll.forEach((item, i) => {   // // Node Elements
    // let searchWord = 'grid'
    item.addEventListener('click', () => {  // Function for select
        employeeAll.forEach((itemII) => {               // Cleaning
            if(item != itemII){itemII.classList.remove('choice')}
        })
        item.classList.toggle('choice')
        console.log(i)
    })
})
// -----------------------------------------------------


    // item.addEventListener('mouseover', () => {
    //     if(item.className != 'choice'){
    //         item.style.background = '#e3e9e9a6'
    //     }
        
    // })
    // item.addEventListener('mouseout', () => {
    //     item.style.background = 'none'
    //     // item.removeEventListener('mouseover')

    // })
// -----------------------------------------------------