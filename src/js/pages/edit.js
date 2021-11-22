import makeElement from "../utils/makeElement";
import { headercontent } from "../components/ui/header";
import button from "../components/ui/button";
import heading from "../components/ui/levelHeading";
import Router from "../routes/router";
import reducers from "../redux/reducers";
import { getStore } from "../redux/store";
  

const editpage = function(props) {
    const div = document.createElement('div')
    const header = headercontent()
    const headingh2 = heading('h2', 'Edit Task')
    const cancelbutton = button('Cancel', 'cancel-button')
    const editbutton = button('Update Task', 'edit-button')
    const buttondiv = document.createElement('div')
    buttondiv.setAttribute('class','button-flex')
    const template = `
    
    <form action="" method="GET" >
    <div class="task-id">
        <label for="id">Id</label>
        <input type="text" name="id" id="id" value="${props.id}">
    </div>
    
    <div class="category-completed">
        <div>
            <label for="category">Category</label>
            <input type="text" name="category" id="category" value="${props.category}">
        </div>
        <div>
            <label for="complete">Completed</label>
            <input type="checkbox" id="complete" checked name="complete">
        </div>
    </div>
    <div class="movie-title">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="${props.title}">
    </div>
    <div class="start-date-time">
        <div>
            <label for="start-date">Start Date</label>
            <input type="text" id="start-date" name="start-date" value="${props.startDate}">
        </div>
        <div>
            <label for="start-time">Start Time</label>
            <input type="start-time" name="start-time" id="start-time" value="${props.startTime}" >
        </div>
    </div>
    <div class="end-date-time">
        <div>
            <label for="end-date">End Date</label>
            <input type="text" id="end-date" name="end-date" value="${props.endDate}">
        </div>
        <div>
            <label for="end-time">End Time</label>
            <input type="end-time" name="end-time" id="end-time" value="${props.endTime}" >
        </div>
    </div>

</form>

    `
    function cleanUp(){
        cancelbutton.removeEventListener('click',onCancelEdit)
        editbutton.removeEventListener('click', onEditTodo)
    }

    function onEditTodo (e) {

        const oldId = props.id
        const oldtitle = props.title
        const oldcategory = props.category
        const oldisComplete = props.isComplete
        const oldstartDate = props.startDate
        const oldstartTime = props.startTime
        const oldendDate = props.endDate
        const oldendTime = props.endTime

        
        const bookId = document.querySelector('#id').value
        const bookTitle = document.querySelector('#title').value
        const bookCategory = document.querySelector('#category').value
        const bookStartDate = document.querySelector('#start-date').value
        const bookSartTime = document.querySelector('#start-time').value
        const bookEndDate = document.querySelector('#end-date').value
        const bookEndTime = document.querySelector('#end-time').value
       
        const index = getStore().findIndex(todo=> todo.id === props.id)
        const action = {
            type:"edit",
            payloadnew: {
                id:bookId,
                category: bookCategory,
                title: bookTitle,
                isComplete: true,
                startDate: bookStartDate,
                startTime: bookSartTime,
                endDate: bookEndDate,
                endTime: bookEndTime
            },
            payload: index,
            cb: ()=> cleanUp()
        }
        reducers(action)
        Router('/todolist') 
    }

    function onCancelEdit (e){
        
        cleanUp()
        Router('/todolist')
        
    }

    

    const element = makeElement(template)
    
    cancelbutton.addEventListener('click', onCancelEdit)
    editbutton.addEventListener('click', onEditTodo)

    div.append(header)
    div.append(headingh2)
    div.append(element)
    div.append(buttondiv)
    buttondiv.append(cancelbutton)
    buttondiv.append(editbutton)
    div.setAttribute('class','editpage')


    return div
}

export default editpage

