import { htmlEmployee } from "./employee.js";
import { getEmployees, useEmployees } from "./employeeDataProvider.js";

// Handle browser-generated click event in component

document.querySelector('body').addEventListener('click', clickEvent => {
if (clickEvent.target.id === 'view-employees-nav-link') {
    document.querySelector('.employee-form').innerHTML= ''
    document.querySelector('.employees-container').innerHTML= ''
    document.querySelector('.landing').innerHTML= ""
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
            document.querySelector('.employees-container').innerHTML += htmlEmployee(element)
        });
    }) 
}

