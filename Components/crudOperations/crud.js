import {SERVER} from "../../Ulity/Config.js";
import {handleHttpErrors, makeOptions} from "../../Ulity/Utility.js";

const RIDER_API = `${SERVER}riders/`
const TEAM_API = `${SERVER}teams`

export async function getRequest(){
    const container = document.getElementById("get_container")
    console.log(RIDER_API)

    try {
        const riders = await fetch(RIDER_API)
            .then(response => handleHttpErrors(response))
            .then(riders => {
                console.log(riders)

                for (let i = 0; i < riders.length; i++){
                    console.log(i)
                    // Container for each rider
                    const riderContainer = document.createElement("div")

                    let id = document.createElement("p")
                    id.innerText = "Rider ID: " + riders[i].id
                    console.log(id)

                    let totalTime = document.createElement("p")
                    totalTime.innerText =  `Total time: ${riders[i].totalTime}`

                    let sprintPoint = document.createElement("p")
                    sprintPoint.innerText = `Sprint Point: ${riders[i].sprintPoint}`

                    let mountainPoint = document.createElement("p")
                    mountainPoint.innerText = `Mountain Point: ${riders[i].mountainPoint}`

                    let riderName = document.createElement("p")
                    riderName.innerText = `Rider Name: ${riders[i].riderName}`

                   /* let riderTeam = document.createElement("p")
                    riderTeam.innerText = `Team: ${riders[i].teamResponse}`*/

                    let age = document.createElement("p")
                    age.innerText = `Rider Age: ${riders[i].age}`

                    let deleteBtn = document.createElement("button")
                    deleteBtn.id = riders[i].id
                    deleteBtn.innerText = "Delete Rider"


                    riderContainer.appendChild(id)
                    riderContainer.appendChild(riderName)
                    //riderContainer.appendChild(riderTeam)
                    riderContainer.appendChild(age)
                    riderContainer.appendChild(totalTime)
                    riderContainer.appendChild(sprintPoint)
                    riderContainer.appendChild(mountainPoint)
                    riderContainer.appendChild(deleteBtn)


                    container.appendChild(riderContainer)

                    const options = makeOptions('DELETE')

                    deleteBtn.addEventListener('click',function(){
                        try {
                            fetch(RIDER_API + riders[i].id ,options)
                                .then(response => response.json())
                            alert("Rider with ID: " + riders[i].id + " has been deleted!")

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
