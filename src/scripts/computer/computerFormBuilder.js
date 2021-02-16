import { getComputers, useComputers } from './computerDataProvider.js'

document.querySelector('body').addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'save-computer-nav-link') {
        
        document.querySelector('.employee-form').innerHTML= ''
        document.querySelector('.employees-container').innerHTML= ''
        document.querySelector('.landing').innerHTML= ""
        document.querySelector('.computers-container').innerHTML=''
        computerFormBuilder()
        
        }
    })

let contentTarget = document.querySelector(".computer-form")
export const computerFormBuilder = () => {
    getComputers().then(() => {
        let computers = useComputers()

            console.log(computers);
        contentTarget.innerHTML = `
            <label for='model'>Model Name</label>
            <input type="text" name='model' id="model">
            <label for='year'>Year</label>
            <input type="text" name='year' id="year">
            <label for='id'>ID</label>
            <input type="text" name='id' id="id">
            
            
            </select>
            <button type='button' id="save-computer" >Save New Computer</button>
            <br>
        `
    })
}
