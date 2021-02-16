import { getComputers, useComputers } from '../computer/computerDataProvider.js'
import { getEmployees, useEmployees } from './employeeDataProvider.js'

document.querySelector('body').addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'save-employee-nav-link') {
        document.querySelector('.employee-form').innerHTML= ''
        document.querySelector('.employees-container').innerHTML= ''
        document.querySelector('.landing').innerHTML= ""
        document.querySelector('.computer-form').innerHTML= ""
        employeeFormBuilder()
        console.log('fda');
        }
    })


let contentTarget = document.querySelector(".employee-form")
export const employeeFormBuilder = () => {
    getEmployees().then(() => {
        let employees = useEmployees()
        getComputers().then(()=>{
            
            let computers = useComputers()
            console.log(computers);
        contentTarget.innerHTML = `
            <label for='first-name'>Enter First Name</label>
            <input type="text" name='first-name' id="first-name">
            <label for='Last-name'>Enter Last Name</label>
            <input type="text" name='last-name' id="last-name">
            <select class='dropdown' id='computer-model'>
            <option value="0">Please Select</option>
            ${
                    computers.map(current => {
                    return `<option value='${current.id}'>${current.model}</option>`
                })
            }
            </select>
            <button type='button' id="save-employee" >Save New Employee</button>
            <br>
        `
        })
    })
}