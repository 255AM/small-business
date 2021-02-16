import { htmlComputer } from "./computer.js";
import { getComputers, useComputers, deleteComputer } from "./computerDataProvider.js";

// Handle browser-generated click event in component

document.querySelector('body').addEventListener('click', clickEvent => {
if (clickEvent.target.id === 'view-computers-nav-link') {
    document.querySelector('.employee-form').innerHTML= ''
    document.querySelector('.employees-container').innerHTML= ''
    document.querySelector('.landing').innerHTML= ""
    document.querySelector('.computers-container').innerHTML=''
    document.querySelector('.computer-form').innerHTML= ''
    computersList()
    console.log('fda');
    }
})

export const computersList = () => {
//call fx to return data from api
    getComputers()
    //instruct program to wait until dat is returned
    .then(() => {
        const computers = useComputers()
        document.querySelector('.computers-container').innerHTML = ' '
        computers.map(element => {
            document.querySelector('.computers-container').innerHTML += 
            htmlComputer(element)
             
        });
    }) 
}

//also for writerpage call upon delete button push
document.querySelector('body').addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("deleteComputer")) {
      const computerToDelete = eventObject.target.id.split("-")[2]
      deleteComputer(computerToDelete).then(() => {
          computersList()
    })
  }
  });