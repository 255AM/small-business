//import { EmployeesList } from "./journalEmployeesList"

let employees = []
export const useEmployees = () => {
   
    return employees.slice()
}

export const getEmployees = () => {
    return fetch('http://localhost:8088/employees?_expand=computer')
        .then(response => response.json())
        .then(parsedEmployees => {
            employees = parsedEmployees
            console.log(employees);
        })
}

export const saveEmployee = employees => {
    return fetch('http://localhost:8088/employees', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employees)
    })
}

export const deleteEmployee = employeeId => {
    
    return fetch(`http://localhost:8088/Employees/${employeeId}`, {
        method: "DELETE"
        
    })
    
}