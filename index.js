import "/Ulity/navigo@8.11.1/lib/navigo.min.js"
//Will create the global Navigo object used below

import {
    renderText,
    setActiveLink,
    loadTemplate,
    renderTemplate,
} from "./Ulity/Utility.js"

window.addEventListener("load", async () => {
    const templateHome = await loadTemplate('./Components/About/about.html')

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
        .notFound(() => renderText("No page for this route found", "content"))
        .resolve()
});


window.onerror = (e) => alert(e)