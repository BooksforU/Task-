
let intialState = {
    videos : [],
    video:'',
    page:0
}

export function reducer (state = intialState,action){
    
    let stateCopy = JSON.parse(JSON.stringify(state))
    console.log(action.type,action.payload)
    switch(action.type){
        
        case "getVideos":
            stateCopy.videos = action.payload
            stateCopy.page = 1
            return stateCopy
        
        case "getMoreVideos":
            stateCopy.videos = [...stateCopy.videos,...action.payload]
            stateCopy.page++
            return stateCopy
        case "getDetails":
            stateCopy.video = action.payload
            console.log(action.payload)
            return stateCopy
        default:
              return stateCopy
              
    }
    
    


}

console.log(intialState)