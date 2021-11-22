
import Router from "./routes/router"
import { createStore, getStore } from "./redux/store"
import { dataFetcher } from "./utils/dataFetcher"
import { keyGenerator } from "./utils/keys";



 const app = document.querySelector("#app");

const onAppInit =   async function(e){
  
  const todos =  await dataFetcher('./static/data/todos.json')
  createStore(keyGenerator(todos))
  Router(window.location.pathname)
  
}

window.addEventListener('load', onAppInit)