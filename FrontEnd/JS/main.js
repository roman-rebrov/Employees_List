class Main {
    constructor(){
        this.blockAdd = document.querySelector('.employees-wrap')
        this.sortName = document.querySelector('.sort-name')
        this.sortSurname = document.querySelector('.sort-surname')
        this.sortAge = document.querySelector('.sort-age')
        this.inpDate = document.querySelector('.inp-date')
        this.employeesDupl = JSON.parse(JSON.stringify(employees)) 
        this.todayY = new Date().getUTCFullYear()
        this.todayM = new Date().getUTCMonth()
        this.employeeAll
        this.resolt = 0
    };
    init(){
        this.out() 
        this.inpDate.addEventListener('change', ()=> {}) // ???????
    };
    allEmploees(){
        this.employeeAll = document.querySelectorAll('.employee')
    };
    out(){
        this.blockAdd.innerHTML = ''                     // Cleaning    
        this.employeesDupl.forEach((item,i) => {         // Onload
            // let ageOfEmployee = todayY - +item.dateBorn
            this.employeesDupl[i].age = this.todayY - +item.dateBorn
            // let ttt = delete employeesDupl[i]
            this.blockAdd.innerHTML += `
                <div class="employee grid">
                    <div class="img-wrap">
                        <img class='em-picture' src="${item.photo}" alt="">
                    </div>
                    <div class="name">${item.name}</div>
                    <div class="surname">${item.surname}</div>
                    <div class="born">${item.dateBorn}</div>
                    <div class="age">${item.age}</div>
                    <div class="position">
                        ${item.position}
                    </div>
                    <div class="workType">
                        <input  type="checkbox" onclick='return false' ${item.workType} name="" id="">
                    </div>
                    <div class="adrese">${
                        item.city + ' ' + item.street + ' ' + item.building + ' ' + item.flat
                    }</div>
                </div>
            `
        })
        this.marker()
    };
    marker(){
        // ---
        // ---
        this.allEmploees()
        this.employeeAll.forEach((item, i) => {                       // // Node Elements
            let jeckI = 0
            let jeckII = 0
            // let jeckIII = 0
            // let jeckIV = 0
            item.addEventListener('click', () => {                    // Function for select
                this.employeeAll.forEach((itemII) => {                // Cleaning
                    if(item != itemII){itemII.classList.remove('choice')}
                })
                item.classList.toggle('choice') 
            })
            // ---
            // ---
            item.addEventListener('mousedown', (eI) => {this.mouseDown(eI, item,jeckI,jeckII)})
                
            document.addEventListener('mouseup',  () => {this.mouseUp(item,jeckI,jeckII, i)}  )
        })  
    };
    mouseDown(eI, item,jeckI,jeckII){ 
        // console.log(item);
        item.classList.add('moveElement')
        document.onmousemove = (eII) => this.mouseMove(eI, eII, item,jeckI,jeckII) 
    };
    mouseUp(item,jeckI,jeckII,i){
        console.log(this.resolt);
        item.classList.remove('moveElement')
        // console.log(this.employeeAll[i]);
        if( this.resolt > 250){                          // Removing Fast
            // item.remove()
            // console.log(this.employeesDupl);
            // -
            this.employeesDupl.splice(i, 1)

            this.out()
            document.removeEventListener('mouseup', () => {this.mouseUp()})
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
    };
    mouseMove(eI,eII,item,jeckI,jeckII) {
        jeckI = eI.pageX
        jeckII = eII.pageX
        // jeckIII = eI.pageY
        // jeckIV = eII.pageY
        item.style.left = `${-(eI.pageX - eII.pageX)}px`             
        if ( 1 - Math.abs(jeckI  - jeckII)/400 <= 0.25 ) {
            item.style.opacity = `0.25` 
        } else {item.style.opacity = `${ 1 - Math.abs(jeckI  - jeckII)/400 }` }       
        

        // console.log(jeckI,jeckII);
        this.resolt = Math.abs(jeckI  - jeckII)
    }
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