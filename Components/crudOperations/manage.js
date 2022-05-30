import {SERVER} from "../../Ulity/Config.js";
import {handleHttpErrors, makeOptions} from "../../Ulity/Utility.js";

const RIDER_API = `${SERVER}riders/`
const TEAM_API = `${SERVER}teams`

export async function getRiders(){
    const container = document.getElementById("manage-container")
    const list = document.querySelectorAll("div")
    const rider = {}
    console.log(rider)

    try {
        const riders = await fetch(RIDER_API)
            .then(response => handleHttpErrors(response))
            .then(data => {

                for (let i = 0; i < data.length; i++){
                    // Container for each rider
                    const riderContainer = document.createElement("div")

                   /* let id = document.createElement("p")
                    id.innerText = "Rider ID: " + data[i].id*/

                    let totalTime = document.createElement("p")
                    totalTime.innerText =  `Total time: ${data[i].totalTime}`

                    let sprintPoint = document.createElement("p")
                    sprintPoint.innerText = `Sprint Point: ${data[i].sprintPoint}`

                    let mountainPoint = document.createElement("p")
                    mountainPoint.innerText = `Mountain Point: ${data[i].mountainPoint}`

                    let riderName = document.createElement("p")
                    riderName.innerText = `Rider Name: ${data[i].riderName}`

                    let riderTeam = document.createElement("p")
                    riderTeam.innerText = `Team: ${data[i].teamResponse}`

                    let age = document.createElement("p")
                    age.innerText = `Rider Age: ${data[i].age}`

                    let deleteBtn = document.createElement("button")
                    deleteBtn.id = data[i].id
                    deleteBtn.innerText = "Delete Rider"


                    riderContainer.appendChild(riderName)
                    let inputElement = document.createElement("input")
                    let submit = document.createElement("button")
                    submit.innerText = "Submit new value"
                    inputElement.placeholder = "New value"

                    list.forEach(() => {
                        riderContainer.appendChild(inputElement)
                        riderContainer.appendChild(submit)

                    })

                    riderContainer.appendChild(riderTeam)

                    riderContainer.appendChild(age)

                    riderContainer.appendChild(totalTime)

                    riderContainer.appendChild(sprintPoint)

                    riderContainer.appendChild(mountainPoint)

                    riderContainer.appendChild(deleteBtn)

                    //  Initial divs with stats above



                    submit.addEventListener('click',function(){
                        riderName.innerText = "Rider name: " + inputElement.value
                        rider.riderName = riderName.innerText
                    })


                    container.appendChild(riderContainer)


                    // Delete button below
                    const options = makeOptions('DELETE')

                    deleteBtn.addEventListener('click',function(){
                        try {
                            fetch(RIDER_API + data[i].id ,options)
                                .then(response => response.json())
                            alert("Rider with ID: " + data[i].id + " has been deleted!")

                        }catch (error){
                            console.error(error)
                        }
                        location.reload()
                    })

                }
            })

    }catch (error){
        console.error(error)
    }
}
