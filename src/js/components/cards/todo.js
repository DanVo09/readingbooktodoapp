import makeElement from "../../utils/makeElement"
import editIcon from "../icons/editIcon"
import deleteIcon from "../icons/deleteIcon"


const todo = function ({id,category,isComplete,title,endDate}) {

    const divicon = document.createElement('div')
    const editimg = editIcon()
    const deleteimg = deleteIcon()
  
    const template =   `
        <li class="${category}" data-key="${id}">
           <div>
               <p>${title}</p> 
               <p>${isComplete}</p> 
               <p>Due: ${endDate}</p> 
           </div>
        </li>
      `;

      const paraEditTemplate =  `<p id="edit" data-key="${id}"></p> `
      const paraDeleteTemplate =  `<p id="delete" data-key="${id}"></p> `
    
    const paraEditelement = makeElement(paraEditTemplate)
    const paraDeleteelement = makeElement(paraDeleteTemplate)
    const element = makeElement(template)
    element.append(divicon)
    divicon.append(paraDeleteelement)
    divicon.append(paraEditelement)
    paraEditelement.append(editimg)
    paraDeleteelement.append(deleteimg)

    return element
}

export {todo}