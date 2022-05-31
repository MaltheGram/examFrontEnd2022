
import {SERVER} from "../../Ulity/Config.js";
import {handleHttpErrors, makeOptions} from "../../Ulity/Utility.js";

const RIDER_API = `${SERVER}riders/`

export async function postHandler(){
    attachEventListener()

}

async function postRider() {
    const rider = {}
    rider.totalTime = document.getElementById("totalTime").value
    rider.teamname = document.getElementById("teamName").value
    rider.sprintPoint = document.getElementById("sprintPoints").value
    rider.mountainPoint = document.getElementById("mountainPoints").value
    rider.riderName = document.getElementById("name").value
    rider.age = document.getElementById("age").value

    let options = makeOptions("POST",rider)

    try {
        await fetch(RIDER_API,options)
            .then(response => handleHttpErrors(response))
            .then(newCyclist => {
                document.getElementById("information").innerText = JSON.stringify(newCyclist,null,2)
            })
    } catch(error) {
        console.log(error.message)
    }
}

function attachEventListener(){
    const btn = document.getElementById("btn_submit")
    btn.addEventListener('click',postRider)
}