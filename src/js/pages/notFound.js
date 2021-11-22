import makeElement from "../utils/makeElement"
import link from "../components/ui/link"
import { headercontent } from "../components/ui/header"
import errorIcon from "../components/icons/errorIcon"


const notFound = function(){
    const page = document.createElement('div')
    const header = headercontent()
    const logoerror = errorIcon()
    const backToSafety = link("Back to Home page", '/')
    const template = `<p>Seem like we could not find the page you were looking for</p>`;
    const p = makeElement(template)
    page.append(header)
    page.append(logoerror)
    page.append(p)
    page.append(backToSafety)
    page.setAttribute('class','errorpage')
    return page
}

export default notFound