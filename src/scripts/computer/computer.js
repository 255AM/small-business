
export const htmlComputer = (computer) => {
    
    
    return `
        <div class='col-md-3 card mb-4 bg-light'>
            <div class="model">Model: ${computer.model}</div>
            <div class="year">Year: ${computer.year}</div>
            <div class="id">ID: ${computer.id}</div>
            <button id="deleteComputer--${computer.id}">Delete</button>
            <br>
        </div>
        
    `
}