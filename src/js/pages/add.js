import makeElement from "../utils/makeElement";
import { headercontent } from "../components/ui/header";
import button from "../components/ui/button";
import heading from "../components/ui/levelHeading";
import Router from "../routes/router";
import reducers from "../redux/reducers";
  

const addpage = function() {
    const div = document.createElement('div')
    const header = headercontent()
    const headingh2 = heading('h2', 'Add A New Task')
    const cancelbutton = button('Cancel', 'cancel-button')
    const addbutton = button('Add new Task', 'add-button')
    const buttondiv = document.createElement('div')
    buttondiv.setAttribute('class','button-flex')
    const template = `
    
    <form action="" method="GET" >
    <div class="task-id">
        <label for="id">Id</label>
        <input type="text" name="id" id="id">
    </div>
    
    <div class="category-completed">
        <div>
            <label for="category">Category</label>
            <input type="text" name="category" id="category">
        </div>
        <div>
            <label for="complete">Completed</label>
            <input type="checkbox" id="complete">
        </div>
    </div>
    <div class="movie-title">
        <label for="title">Title</label>
        <input type="text" name="title" id="title">
    </div>
    <div class="start-date-time">
        <div>
            <label for="start-date">Start Date</label>
            <input type="text" id="start-date" name="start-date">
        </div>
        <div>
            <label for="start-time">Start Time</label>
            <input type="start-time" name="start-time" id="start-time">
        </div>
    </div>
    <div class="end-date-time">
        <div>
            <label for="end-date">End Date</label>
            <input type="text" id="end-date" name="end-date">
        </div>
        <div>
            <label for="end-time">End Time</label>
            <input type="end-time" name="end-time" id="end-time">
        </div>
    </div>

</form>

    `
    function cleanUp(){
        cancelbutton.removeEventListener('click',onCancelAdd)
        addbutton.removeEventListener('click', onAddTodo)
    }

    function onCancelAdd (e){
        cleanUp()
        Router('/todolist')
    }

    function onAddTodo (e){
        const bookId = document.querySelector('#id').value
        const bookTitle = document.querySelector('#title').value
        const bookCategory = document.querySelector('#category').value
        const bookStartDate = document.querySelector('#start-date').value
        const bookSartTime = document.querySelector('#start-time').value
        const bookEndDate = document.querySelector('#end-date').value
        const bookEndTime = document.querySelector('#end-time').value
       
        const action = {
            type:"add",
            payload: {
                id:bookId,
                isComplete: true,
                category: bookCategory,
                title: bookTitle,
                startDate: bookStartDate,
                startTime: bookSartTime,
                endDate: bookEndDate,
                endTime: bookEndTime
            },
            cb: ()=> cleanUp()
        }
        reducers(action)
        Router('/todolist') 
    }

    const element = makeElement(template)
    
    cancelbutton.addEventListener('click', onCancelAdd)
    addbutton.addEventListener('click', onAddTodo)

    div.append(header)
    div.append(headingh2)
    div.append(element)
    div.append(buttondiv)
    buttondiv.append(cancelbutton)
    buttondiv.append(addbutton)
    div.setAttribute('class','addpage')


    return div
}

export default addpage

