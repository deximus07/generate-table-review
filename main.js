"strict mode"
//Creating empty array to populate later
let classrooms = []
let hours = ['8am', '9am', '10am', '11am', '12pm']

let docBody = document.getElementById('docbody')
let tbl = document.getElementById('data-table')
let formEl = document.getElementById('data-form')

//Creating a constructor function
let Classroom = function(name, min, max, studentsPerHour){
    this.name = name
    this.min = min
    this.max = max
    this.studentsPerHour = studentsPerHour 
}
Classroom.prototype.spellCastPerHour = function(){
    let randomNumber = Math.ceil(Math.random() * (this.max - this.min) + this.min)
    return randomNumber * this.studentsPerHour
}


Classroom.prototype.renderNewClassroom = function(){
//     //Create new row to append to the table
//     for (let i =0; i < hours.length; i++){
//         //Generating table header row and content
//         let tblRow = document.createElement('tr')
//         let tblCell = document.createElement('th')
//         tbl.appendChild(tblRow)
//         tblRow.appendChild(tblCell)
//         //Add content to the cell
//         tblCell.textContent = classrooms[i].name
//         for (let j = 0; j < classrooms.length; j++){
//             let innerTblRow = document.createElement('tr')
//             let innerTblCell = document.createElement('td')
//             tbl.appendChild(innerTblRow)
//             innerTblRow.appendChild(innerTblCell)
//             innerTblCell.textContent = hours[i].spellCastPerHour()
//         }
//     }
// }
    let tblRow = document.createElement('tr')
    for (let i=0; i < classrooms.length; i++){
        //Generating table header row and content
        let innerTblCell = document.createElement('th')
        tbl.appendChild(tblRow)
        tblRow.appendChild(innerTblCell)
        //Add content to the cell, use the name property from the constructor funtion.
        //This was missing the .name property of the item at index.
        innerTblCell.innerText = classrooms[i].name
        let innerTblRow = document.createElement('tr')
        for (let j = 0; j < hours.length; j++) {
            let innerTblCell = document.createElement('td')
            tbl.appendChild(innerTblRow)
            innerTblRow.appendChild(innerTblCell)
            //I need to use the outer array index instead of the inner one
            innerTblCell.textContent = classrooms[i].spellCastPerHour()
        }
    }
}

// for (let k = 0; k < classrooms.length; k++){
//     classrooms[k].renderNewClassroom()
// }

//Create two new variables to reference the form input fields
let nameInput = formEl.classroomname
let minInput = formEl.minimum

formEl.addEventListener('submit', function(){
    event.preventDefault()
    let classroom = new Classroom(nameInput.value, parseInt(minInput.value), 12, 9)
    classrooms.push(classroom)
    classroom.renderNewClassroom()
})

//Event handler for the form submit button
let eHandler = function(e){
    e.preventDefault()
    let classroom = new Classroom(nameInput.value, parseInt(minInput.value,), 12, 9)
    classrooms.push(classroom)
    classroom.renderNewClassroom()
}

formEl.addEventListener('submit', eHandler, false)