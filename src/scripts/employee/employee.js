
export const htmlEmployee = (employee) => {
    console.log(employee);
    
    return `
        <div class='col-md-3 card mb-4 bg-light'>
            <div class="first-name">First Name: ${employee.firstName}</div>
            <div class="last-name">Last Name: ${employee.lastName}</div>
            <div class="model">Model: ${employee.computer.model}</div>
            <div class="year">Year: ${employee.computer.year}</div>
        </div>
        <br>
    `
}