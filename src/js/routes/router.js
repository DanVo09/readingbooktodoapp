import homePage from "../pages/home"
import todolistPage from "../pages/todolis"
import notFound from "../pages/notFound"
import deletePage from "../pages/delete"
import editpage from "../pages/edit"
import addpage from "../pages/add"



const routes = {
   '/':homePage,
   '/todolist':todolistPage,
   '/delete':deletePage,
   '/edit':editpage,
   '/add':addpage,
   '/*':notFound
   
}

const Router = function(pathname, params=null){

    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    
    const app = document.querySelector('#app')
    app.innerHTML = ''
    
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    if(isValidRoute === undefined || isValidRoute ===''){
        app.append(notFound())
    }else{
        app.appendChild(routes[isValidRoute](params) )
    }
    
}

export {router}
export default Router
