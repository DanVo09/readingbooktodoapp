import makeElement from "../utils/makeElement"
import link from "../components/ui/link"
import { headercontent } from "../components/ui/header"
import button from "../components/ui/button"
import heading from "../components/ui/levelHeading"
import reducers from "../redux/reducers"
import Router from "../routes/router"
import { getStore } from "../redux/store"

const cancelbutton = button("Cancel")
const deletebutton = button("Delete")


const deletePage = function (props){

    const div = document.createElement('div')
    const header = headercontent()
    const headingh2 = heading('h2','Delete Task')
    const buttondiv = document.createElement('div')
    buttondiv.setAttribute('class','button-flex')

    
    
        let template =`
            <div class="deleted-task">
            <p>${props.title}</p>
            <p>Due: ${props.endDate}</p>
            </div>
        `
    
    function cleanUp(){
        cancelbutton.removeEventListener('click',onCancelDelete)
        deletebutton.removeEventListener('click', onDeleteTodo)
    }

    function onCancelDelete (e){
        cleanUp()
        Router('/todolist')
    }

    function onDeleteTodo (e){
       //const todo = getStore().find(todo=>{
         //   return todo.id === props.id
        //})
        const index = getStore().findIndex(todo=> todo.id === props.id)
        const action = {
            type:"delete",
            payload: {index},
            cb: ()=> cleanUp()
        }
        reducers(action)
        Router('/todolist')  
    }


    const p = makeElement(template)
    
    div.append(header)
    div.append(headingh2)
    cancelbutton.addEventListener('click', onCancelDelete)
    deletebutton.addEventListener('click', onDeleteTodo)
    div.append(p)
    div.append(buttondiv)
    buttondiv.append(cancelbutton)
    buttondiv.append(deletebutton)
    div.setAttribute('class','deletepage')

    return div

}

export default deletePage