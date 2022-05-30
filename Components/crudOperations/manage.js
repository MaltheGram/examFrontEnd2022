
import {SERVER} from "../../Ulity/Config.js";
import {handleHttpErrors, makeOptions} from "../../Ulity/Utility.js";

const RIDER_API = `${SERVER}riders/`

export async function editHandler(){
    attachEventListener()

}

async function editRider() {
    const rider = {}
    const id = document.getElementById("id").value
    rider.id = id
    rider.totalTime = document.getElementById("totalTime").value
    rider.sprintPoints = document.getElementById("sprintPoints").value
    rider.mountainPoint = document.getElementById("mountainPoints").value
    rider.riderName = document.getElementById("name").value
    rider.age = document.getElementById("age").value
    console.log("HELLO WORLD")
    let options = makeOptions("PUT",rider)
    try {
        await fetch(`${RIDER_API}${id}`,options)
            .then(response => handleHttpErrors(response))
            .then(newCyclist => {
                document.getElementById("information").innerText = JSON.stringify(newCyclist,null,2)
            })
    } catch(error) {
        console.log(error.message)
    }
}

async function deleteRider(){
    const rider = {}
    const id = document.getElementById("id").value
    rider.id = id

    let options = makeOptions("DELETE",rider)

    try {
        fetch(`${RIDER_API}${id}`,options)
            .then(() => {
                document.getElementById("information").innerText = "User with id: " + document.getElementById("id").value + " has been deleted"
            })
    } catch (error) {
        console.log(error.message)
    }
}

function attachEventListener(){
    const btn = document.getElementById("btn_submit")
    const btnDelete = document.getElementById("btn_delete")
    btn.addEventListener('click',editRider)
    btnDelete.addEventListener('click',deleteRider)

}
