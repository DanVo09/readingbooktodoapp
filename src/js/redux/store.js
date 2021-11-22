let store = null;

const createStore = function(data=[]){
    if(store === null){
        store = [... data]
    }
}

const getStore  = function (){
    return store
}

const updateStore = function (newState){
    store = [...newState]
}


export {createStore, getStore, updateStore}