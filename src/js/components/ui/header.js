import makeElement from "../../utils/makeElement"
import logoIcon from "../icons/logo"
import heading from "../ui/levelHeading"
import link from "./link"


const headercontent = function () {
    const header = document.createElement('header')
    const archortag = link("",'/')
    const h1 = heading('h1','')
    const logo = logoIcon()
    const template =`<p>Knowledge is power.</p> `;
    const element = makeElement(template)
    header.append(h1)
    h1.append(archortag)
    archortag.append(logo)

    header.append(element)
    return header
   
}

export {headercontent}