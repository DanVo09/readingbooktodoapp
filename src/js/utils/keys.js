import {v4 as uuidv4} from 'uuid'

// object
const keyGenerator = function(data=[]){
     const keyData = data.map(item=>{
         item.id = uuidv4().substr(0,8)
         return item
     })
      return keyData
     
}

export {keyGenerator}