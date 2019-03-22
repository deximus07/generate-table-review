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
    //Create new row to append to the table
    for (let i =0; i < classrooms.length; i++){
        //Generating table header row and content
        let tblRow = document.createElement('tr')
        let tblCell = document.createElement('th')
        tbl.appendChild(tblRow)
        tblRow.appendChild(tblCell)
        //Add content to the cell
        tblCell.textContent = classrooms[i]
        for (let j = 0; j < hours.length; j++){
            let innerTblRow = document.createElement('tr')
            let innerTblCell = document.createElement('td')
            tbl.appendChild(innerTblRow)
            innerTblRow.appendChild(innerTblCell)
            innerTblCell.textContent = hours[j].spellCastPerHour()
        }
    }
}

for (let k = 0; k < classrooms.length; k++){
    classrooms[k].renderNewClassroom()
}

//Create two new variables to reference the form input fields
let nameInput = formEl.classroomname
let minInput = formEl.minimum

formEl.addEventListener('submit', function(){
    event.preventDefault()
    let classroom = new Classroom(nameInput.value, parseInt(minInput.value), 12, 9)
    classrooms.push(classroom)
    classroom.renderNewClassroom()
})