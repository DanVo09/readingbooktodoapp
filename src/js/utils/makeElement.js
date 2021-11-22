const makeElement = function (template=``){

    const docFrag = document.createRange().createContextualFragment(template);
    
    const element = docFrag.children[0]
    
    
    
    return element
    
    }
    
    
    
    export default makeElement