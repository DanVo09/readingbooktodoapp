
import button from "../components/ui/button"
import link from "../components/ui/link"
import { headercontent } from "../components/ui/header"


const homePage = function(){
    
    
    const div = document.createElement('div')
    const header = headercontent()
    const todobutton = button("To Do App")
    const tagline = link('', '/todolist')

    div.setAttribute('class','homepage')
    div.append(header)
    div.append(tagline)
    tagline.append(todobutton)

    return div
}

export default homePage