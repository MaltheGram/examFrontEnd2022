import "/Ulity/navigo@8.11.1/lib/navigo.min.js"
//Will create the global Navigo object used below

import {
    renderText,
    setActiveLink,
    loadTemplate,
    renderTemplate,
} from "./Ulity/Utility.js"
import {getRequest} from "./Components/crudOperations/seeRiderStats.js";
import {editHandler} from "./Components/crudOperations/manage.js";
import {postHandler} from "./Components/crudOperations/addRider.js";
import {getRidersInTable} from "./Components/Sorting/sorting.js";

window.addEventListener("load", async () => {
    const templateHome = await loadTemplate('./Components/About/about.html')
    const templateSorted = await loadTemplate('./Components/Sorting/sorting.html')
    const templateAdmin = await loadTemplate('./Components/crudOperations/crudOperations.html')
    const templateSeeAllRiders = await loadTemplate('./Components/crudOperations/ridersAndTeams.html')
    const templateManageRiders = await loadTemplate('./Components/crudOperations/manageRiders.html')
    const templateAddRider = await loadTemplate('./Components/crudOperations/addRider.html')

    const router = new Navigo("/", { hash: true });
    router
        .hooks({
            before(done, match) {
                setActiveLink("menu", match.url)
                done()
            }
        })
        .on("/", () => renderTemplate(templateHome, "content"))
        .on("/about", () => renderTemplate(templateHome, 'content'))
        .on("/admin", () =>{
            renderTemplate(templateAdmin, 'content')
        })
        .on("/riders", () => {
            renderTemplate(templateSeeAllRiders,'content')
            getRequest()
        })
        .on("/sorted", () => {
            renderTemplate(templateSorted, 'content')
            getRidersInTable()

        })
        .on("/manage", () => {
            renderTemplate(templateManageRiders, 'content')
            editHandler()
        })
        .on("/addRider", () => {
            renderTemplate(templateAddRider, 'content')
            postHandler()
        })
        .notFound(() => renderText("No page for this route found", "content"))
        .resolve()
});


window.onerror = (e) => alert(e)