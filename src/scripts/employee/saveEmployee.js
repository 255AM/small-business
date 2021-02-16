import { saveEmployee } from './employeeDataProvider.js'

let eventHub = document.querySelector('body')
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "save-employee") {
        // save a new object representation of a note to sever file
        let newEmployee = ''
        newEmployee = {
            // Key/value pairs here
            firstName:document.querySelector("#first-name").value,
            lastName:document.querySelector('#last-name').value,
            computerId:document.querySelector("#computer-model").value,
            
        }
        console.log(newEmployee);
        // Change API state and application state
        saveEmployee(newEmployee)
    }

})
