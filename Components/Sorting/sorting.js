import {SERVER} from "../../Ulity/Config.js";
import {handleHttpErrors} from "../../Ulity/Utility.js";

export async function getRidersInTable(){

    let URL = `${SERVER}riders/sorted`

    try{
        const riders = await fetch(URL)
            .then(response => handleHttpErrors(response))
            .then(data => {
               makeRows(data)
            })

    } catch(error){
        console.log(error)
    }
}
function makeRows(rows){
    const tRows = rows.map(rider => ` 
    <tr>
      <td>${rider.id}</td>
      <td>${rider.riderName}</td>
      <td>${rider.totalTime}</td>
      <td>${rider.mountainPoint}</td>
      <td>${rider.sprintPoint}</td>
    </tr>
    `).join("\n")
    document.getElementById("tbl-body").innerHTML = tRows
}

export function makeSortable(table) {

}



