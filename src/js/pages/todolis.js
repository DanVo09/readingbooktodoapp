import todoList from "../components/cards/todoList";
import { todo } from "../components/cards/todo";
import { getStore } from "../redux/store";
import { headercontent } from "../components/ui/header";
import button from "../components/ui/button";
import Router from "../routes/router";
import { reducers } from "../redux/reducers";


const todolistPage = function(){

    
    const page = document.createElement('div')
    const header = headercontent() 
    const container = todoList()
    const addbutton =button("Add new task",'ui-newtask')

    function cleanUp(){
      const todos = container.querySelectorAll('li')
      todos.forEach(todo=>{
        todo.removeEventListener('click', onDeleteTodo)
        todo.removeEventListener('click', onEditTodo)
       
      })

      addbutton.removeEventListener('click',onAddTodo)

    }

    function onEditTodo (e){
      const todoID = e.currentTarget.dataset.key;
      const todo = getStore().filter((todo)=> todo.id === todoID)
      cleanUp()
      Router('/edit',todo[0])
    }

    function onDeleteTodo (e) {
      const todoID = e.currentTarget.dataset.key;
      const todo = getStore().filter((todo)=> todo.id === todoID)
      cleanUp()
      Router('/delete',todo[0])
    }

    function onAddTodo (e){
      cleanUp()
      Router('/add')
  }

    page.setAttribute('class','todolistpage')
    page.append(header)

    function render(){

    const todoStore = getStore()
    const ul = container.querySelector('ul')
    ul.innerHTML=''
   
      const elements =  todoStore.map(emp => todo(emp))
    
      elements.forEach(element=>{
        element.querySelector('#delete').addEventListener('click', onDeleteTodo)
        element.querySelector('#edit').addEventListener('click', onEditTodo)
          ul.append(element)
      })
      page.append(container)
      

    }
   
    addbutton.addEventListener('click',onAddTodo)
    page.append(addbutton)
    render()
    return page
}

export default todolistPage