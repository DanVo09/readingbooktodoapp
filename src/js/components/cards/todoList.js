import makeElement from "../../utils/makeElement"

const todoList = function (){
    const template = `
    <aside id="todolist" class="todolist">
    <ul id="todos" class="todos">
     
    </ul>
    <footer>

    </footer>
</aside>
    `

    return makeElement(template)
}

export default todoList