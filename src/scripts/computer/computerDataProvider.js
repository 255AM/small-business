//import { EmployeesList } from "./journalEmployeesList"

let computers = []
export const useComputers = () => {
   
    return computers.slice()
}

export const getComputers = () => {
    return fetch('http://localhost:8088/computers')
        .then(response => response.json())
        .then(parsedComputers => {
            computers = parsedComputers
            console.log(computers);
        })
}

export const saveComputer = computers => {
    return fetch('http://localhost:8088/computers', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(computers)
    })
}

export const deleteComputer = computerId => {
    
    return fetch(`http://localhost:8088/computers/${computerId}`, {
        method: "DELETE"
    })
    
}