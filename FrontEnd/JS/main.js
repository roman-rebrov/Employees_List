const blockAdd = document.querySelector('.employees-wrap')
const sortName = document.querySelector('.sort-name')
const sortSurname = document.querySelector('.sort-surname')
const sortAge = document.querySelector('.sort-age')
let employeesDupl = JSON.parse(JSON.stringify(employees)) 
// -----------------------------
// -----------------------------
// let todayM = new Date().getUTCMonth()
let todayY = new Date().getUTCFullYear()
const inpDate = document.querySelector('.inp-date')
inpDate.addEventListener('change', ()=> {
    console.log(inpDate.value)
})
// -----------------------------
// -----------------------------
function out(){
    blockAdd.innerHTML = ''                     // Cleaning    
    employeesDupl.forEach((item,i) => {         // Onload
        // let ageOfEmployee = todayY - +item.dateBorn
        employeesDupl[i].age = todayY - +item.dateBorn
        // let ttt = delete employeesDupl[i]
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
                    <input  type="checkbox" onclick='return false'  ${item.workType} name="" id="">
                </div>
                <div class="adrese">${
                    item.city + ' ' + item.street + ' ' + item.building + ' ' + item.flat
                }</div>
            </div>
        `
    })
    marker()
}
out()

function marker(){
        // ---
        // ---
    let employeeAll = document.querySelectorAll('.employee')
    
    employeeAll.forEach((item, i) => {                       // // Node Elements
        let jeckI = 0
        let jeckII = 0
        // let jeckIII = 0
        // let jeckIV = 0
        item.addEventListener('click', () => {               // Function for select
            employeeAll.forEach((itemII) => {                // Cleaning
                if(item != itemII){itemII.classList.remove('choice')}
            })
            item.classList.toggle('choice')
        })
        // ---
        // ---
            item.addEventListener('mousedown', mouseDown)
            function mouseDown(eI){ 
                item.classList.add('moveElement')

                document.onmousemove = function mouseMove(eII) {
                    item.style.left = `${-(eI.pageX - eII.pageX)}px`             
                    if ( 1 - Math.abs(jeckI  - jeckII)/400 <= 0.25 ) {
                        item.style.opacity = `0.25` 
                    } else {item.style.opacity = `${ 1 - Math.abs(jeckI  - jeckII)/400 }` }       
                    
                    jeckI = eI.pageX
                    jeckII = eII.pageX
                    // jeckIII = eI.pageY
                    // jeckIV = eII.pageY
                }
        }
        document.addEventListener('mouseup', function  mouseUp(){
            item.classList.remove('moveElement')
            if( Math.abs(jeckI  - jeckII) > 250){            // Removing Fast
                // item.remove()
                // -
                employeesDupl.splice(i, 1)

                out()
                document.removeEventListener('mouseup', mouseUp)
            }  else {
                document.onmousemove = null
                item.style.left = `0px` 
                // item.style.top = `0px` 
                item.style.opacity = 1 
                jeckI = 0
                jeckII = 0 
                // jeckIII = 0
                // jeckIV = 0
            }         

        })
    })
}



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