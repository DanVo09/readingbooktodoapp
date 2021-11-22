
import { getStore, updateStore} from "./store";

const reducers = function(action){
     console.log(action)
    switch(action.type){
        case "delete":
        const store = getStore()
        const index = action.payload.index 
        const newState = [...store.slice(0,index), ...store.slice(index+1)]
        updateStore(newState)
        action.cb()
        return "delete an task";
        case "edit": 
        const data = getStore()
        const oldindex = action.payload.index
        const newData = action.payloadnew
        const editState = [...data.slice(0,oldindex), ...data,newData]
        updateStore(editState)
        return "edit an todo";
        case "add": 
        const storeold = getStore()
        const addnewState = action.payload
        const addToStore = [...storeold,addnewState]
        updateStore(addToStore)        
        return "add a new todo";
        default: return getStore()
    }

}

export default reducers