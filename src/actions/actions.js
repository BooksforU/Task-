import axios from "axios"
const api_key = '71e17cf532242a8619c4f89f2b8c3cb5'


export function getVideos(category,page){
    let req = axios({
        method:"GET",
        url:`https://api.themoviedb.org/3/${category}/popular?api_key=${api_key}&language=en-US&page=${page}`
    })
    return (dispatch) =>{
        req.then(data=>{
            console.log(dispatch)
            dispatch({
                type:"getVideos",
                payload:data.data.results
            })
            
        })
    }
}


//get more videos 
export function getMoreVideos(category,page){
    let req = axios({
        method:"GET",
        url:`https://api.themoviedb.org/3/${category}/popular?api_key=${api_key}&language=en-US&page=${page}`
    })
    return (dispatch) =>{
        req.then(data=>{
            console.log(data)
            console.log(dispatch)
            dispatch({
                type:"getMoreVideos",
                payload:data.data.results
            })
            
        })
    }


}

//get details of movie

export function getDetails(category,id){
    let req = axios({
        method:"GET",
        url:`https://api.themoviedb.org/3/${category}/${id}?api_key=71e17cf532242a8619c4f89f2b8c3cb5&language=en-US`
    })
    return (dispatch) =>{
        req.then(data=>{
            
            dispatch({
                type:"getDetails",
                payload:data.data
            })
            
        })
    }


}















