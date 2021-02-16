import { htmlEmployee } from "./employee.js";
import { getEmployees, useEmployees, deleteEmployee } from "./employeeDataProvider.js";

// Handle browser-generated click event in component

document.querySelector('body').addEventListener('click', clickEvent => {
if (clickEvent.target.id === 'view-employees-nav-link') {
    document.querySelector('.employee-form').innerHTML= ''
    document.querySelector('.employees-container').innerHTML= ''
    document.querySelector('.landing').innerHTML= ""
    document.querySelector('.computers-container').innerHTML=''
    employeesList()
    console.log('fda');
    }
})

export const employeesList = () => {
//call fx to return data from api
    getEmployees()
    //instruct program to wait until dat is returned
    .then(() => {
        const employees = useEmployees()
        document.querySelector('.employees-container').innerHTML = ' '
        employees.map(element => {
            document.querySelector('.employees-container').innerHTML += 
            htmlEmployee(element)
             
        });
    }) 
}

//also for writerpage call upon delete button push
document.querySelector('body').addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("deleteEmployee")) {
      const employeeToDelete = eventObject.target.id.split("-")[2]
      deleteEmployee(employeeToDelete).then(() => {
          employeesList()
    })
  }
  });