class Tools extends Main{
    constructor(){
        super() 
        this.removeBtn = document.querySelector('.remove')
        this.addBtn = document.querySelector('.add')
        this.editBtn = document.querySelector('.edit')
        this.modalWindow = document.querySelector('.modal-wrap')
        this.modalClose = document.querySelector('.modal-close')
        this.search = document.querySelector('.search')
        this.btnSave = document.querySelector('.form-save')
        this.inputInner = document.querySelectorAll('.input-inner')
        this.modalPhoto = document.querySelector('.modal-photo')
        this.modalBtnsAddImg = document.querySelector('.add-photo-from-URL')
        this.modalBtnImgWrap = document.querySelector('.modal-img-tools-block')
        this.modalBtnEditRemoveImg = document.querySelector('.img__edit-remove-photo')
        this.inpTypeWork = document.querySelector('.inp-typeWork')
        this.remove = false
        this.saveEditionForm = false
        this.addElementToList = false
        this.addDataII = 0
    };
    initOut(){
        this.init()
        this.removeBtn.addEventListener('click', () => {this.emRemove()})       // Removing
        this.modalClose.addEventListener('click', () => {        // Close
            this.modalWindow.style.display = 'none'
            this.modalBtnsAddImg.style.display = 'none'
            this.modalBtnImgWrap.style.display = 'none'
            this.inputInner.forEach(item => {
                item.value = ''
            })  
            this.inpTypeWork.checked = false
            this.modalPhoto.src = "" 
            this.remove = false
            this.saveEditionForm = false
        })
        // ---
        // --------------  Searching  ---------------------------------------------
        this.search.addEventListener('input', () => {        // Input Event
            let trueItem = []
            this.employeesDupl = employees.slice()
            this.employeesDupl.forEach((item, i) => {          // Add Searching
                let list = item.name + item.surname
                let listII = item.surname + item.name
                if( list.toLowerCase().indexOf(this.search.value.toLowerCase().replace(/ /g, '')) != -1 || listII.toLowerCase().indexOf(this.search.value.toLowerCase().replace(/ /g, '')) != -1 ){
                    trueItem.push(item) 
                }
            })
            this.employeesDupl = trueItem
            this.out() 
        })
        // ----- SORTING ------------------------------------------------------------
        this.sortName.addEventListener('click', () => {  // Sorting Name
            this.employeesDupl.sort((a,b) => {
                if(a.name > b.name) {return 1}
                if(a.name < b.name) {return -1}
                return 0
            })
            this.out()
        } )
        this.sortSurname.addEventListener('click', () => {   // Sorting Surname
            this.employeesDupl.sort((a,b) => {
                if(a.surname > b.surname) {return 1}
                if(a.surname < b.surname) {return -1}
                return 0
            })
            this.out()
        } )
        this.sortAge.addEventListener('click', () => {      // Sort Age
            this.employeesDupl.sort((a,b) => {
                if(a.age > b.age) {return 1}
                if(a.age < b.age) {return -1}
                return 0
            })
            this.out()
        })
        // ----- SORTING END ------------------------------------------------------------
        // --------------------------------------------------------------------------------------
        // ----- ADD / EDIT -------------------------------------------------------------
        this.addBtn.addEventListener('click', () => {        // Opening Adding
            this.modalWindow.style.display = 'flex'
            this.modalBtnsAddImg.style.display = 'flex'
            this.addElementToList = true
            this.saveEditionForm = false
        })
        // ---------------------------
        this.btnSave.addEventListener('click', () => {this.saveForm()})
        this.editBtn.addEventListener('click', () => {       // Opening Editing
    
            this.employeeAll.forEach((item, i) => {
                if(item.classList.value.indexOf("choice") != -1){
                    this.modalWindow.style.display = 'flex'
                    this.addDataII = i 
                    this.addElementToList = false
                    this.fillForm()   
                    this.saveEditionForm = true
                    this.addElementToList = null
                } // else {alert('Выберите сотрудника из списка!')} 
            }) 
        })
        // --------------------
        // ----
        this.modalBtnEditRemoveImg.addEventListener( 'click', () => {    // IMG remove/edit
            this.modalBtnImgWrap.style.display = 'none';
            this.modalBtnsAddImg.style.display = 'flex';
            this.modalPhoto.src = "" 
            this.remove = true;
        })
    };
    saveForm() { 
        console.log(this.fillForm);
        this.fillForm()
        this.saveFormII()
    };
    emRemove() { 
        console.log(this.employeesDupl);                                // Remove employeesDupl
        this.employeesDupl.forEach((item, i) => {
           if( this.employeeAll[i].classList.value.indexOf("choice") != -1 ){
                this.employeesDupl.splice( i, 1 )
            }
        })
        this.out()
    };
    fillForm() {
        let inpName = document.querySelector('.inp-name'),
        inpPhoto = document.querySelector('.inp-photo'),
        inpSurame = document.querySelector('.inp-surname'),
        inpDate = document.querySelector('.inp-date'),
        inpPosition = document.querySelector('.inp-select'),
        inpCity = document.querySelector('.inp-city'),
        inpStreet = document.querySelector('.inp-street'),
        inpBuilding = document.querySelector('.inp-building'),
        inpFlat = document.querySelector('.inp-flat');
        // -
        if( this.addElementToList === true){
            let newOdject = {}
            newOdject.photo = inpPhoto.value
            newOdject.name = inpName.value
            newOdject.surname = inpSurame.value 
            newOdject.dateBorn = inpDate.value
            newOdject.city = inpCity.value
            newOdject.street = inpStreet.value
            newOdject.building = inpBuilding.value
            newOdject.flat = inpFlat.value
            newOdject.position = inpPosition.value
            if(this.inpTypeWork.checked === true){
                newOdject.workType = 'checked' 
            }else{
                newOdject.workType = ''
            }
            this.employeesDupl.push(newOdject)        
        }else if( this.addElementToList === false ){        
            if ( this.employeesDupl[this.addDataII].photo ){
                this.modalPhoto.src = this.employeesDupl[this.addDataII].photo
                this.modalBtnImgWrap.style.display = 'flex'
                this.remove = false
            }else {
                this.modalBtnsAddImg.style.display = 'flex'
            }
            inpName.value = this.employeesDupl[this.addDataII].name
            inpSurame.value = this.employeesDupl[this.addDataII].surname
            inpDate.value = this.employeesDupl[this.addDataII].dateBorn
            inpCity.value = this.employeesDupl[this.addDataII].city
            inpStreet.value = this.employeesDupl[this.addDataII].street
            inpBuilding.value = this.employeesDupl[this.addDataII].building
            inpFlat.value = this.employeesDupl[this.addDataII].flat
            // inpTypeWork = employeesDupl[this.addDataII].workType 
            inpPosition.value = this.employeesDupl[this.addDataII].position ///////
            if (this.employeesDupl[this.addDataII].workType === 'checked' ){
                this.inpTypeWork.checked = true
            }
        }
        if ( this.saveEditionForm === true ){            // Form Edited 
            if ( this.remove === true ) {
                this.employeesDupl[this.addDataII].photo = inpPhoto.value
                this.remove = false
            }else if( inpPhoto.value ){
                this.employeesDupl[addDataII].photo = inpPhoto.value
            }
            if(this.inpTypeWork.checked === true){
                this.employeesDupl[this.addDataII].workType = 'checked' 
            }else{
                this.employeesDupl[this.addDataII].workType = ''
            }
            this.employeesDupl[this.addDataII].name = inpName.value
            this.employeesDupl[this.addDataII].surname = inpSurame.value 
            this.employeesDupl[this.addDataII].dateBorn = inpDate.value
            this.employeesDupl[this.addDataII].city = inpCity.value
            this.employeesDupl[this.addDataII].street = inpStreet.value
            this.employeesDupl[this.addDataII].building = inpBuilding.value
            this.employeesDupl[this.addDataII].flat = inpFlat.value        
            this.employeesDupl[this.addDataII].position = inpPosition.value      
        } 
    };
    saveFormII() {
        this.modalWindow.style.display = 'none' 
        this.modalBtnsAddImg.style.display = 'none'
        this.modalBtnImgWrap.style.display = 'none'      
        this.inputInner.forEach(item => {
            item.value = ''
        }) 
        this.inpTypeWork.checked = false
        this.modalPhoto.src = "" 
        this.out()
    };
}
// ----------------------------------------------------------
