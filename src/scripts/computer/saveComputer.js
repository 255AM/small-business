import { saveComputer } from './computerDataProvider.js'

let eventHub = document.querySelector('body')
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "save-computer") {
        // save a new object representation of a note to sever file
        let newComputer = ''
        newComputer = {
            // Key/value pairs here
            model:document.querySelector("#model").value,
            year:document.querySelector('#year').value,
            id:document.querySelector("#id").value,
            
        }
        console.log(newComputer);
        // Change API state and application state
        saveComputer(newComputer)
    }

})
