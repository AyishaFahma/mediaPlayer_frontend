
import { commonApi } from "./commonApi"
import { serverUrl } from "./serverurl"


//api to add video

export const addVideoApi = async(reqBody) => {

    return await commonApi ( 'POST' , `${serverUrl}/video` , reqBody)
}


// api to get all video here we want the result  in allVideos.jsx 

export const getAllVideoApi = async() => {
    return await commonApi('GET' , `${serverUrl}/video`)
}



// api to delete a video when button click

export const deleteVideoApi = async(id) => {
    return await commonApi( 'DELETE' , `${serverUrl}/video/${id}`)
}


// api to add video watch history

export const addVideoHistoryApi = async (reqBody) => {

    return await commonApi('POST' , `${serverUrl}/history` , reqBody)

}


// api to get all history

export const getAllVideoHistoryApi = async() =>{
    return await commonApi('GET', `${serverUrl}/history`)

}

// api to delete a video from watch history

export const deleteWatchHistoryVideoApi = async (id)=>{
    return await commonApi('DELETE' , `${serverUrl}/history/${id}`)
}


// api to add category
export const addCategoryApi = async(reqBody) => {
    return await commonApi('POST', `${serverUrl}/category`, reqBody)
}

// api to get all category
export const getAllCategoryApi = async() => {
    return await commonApi('GET', `${serverUrl}/category`)
}


// api to delete a category

export const deleteACategoryApi = async(id) => {
    return await commonApi('DELETE', `${serverUrl}/category/${id}`)

}

//api to add a video to a category
export const AddVideoCategoryApi = async(id , reqBody) => {
    return await commonApi('PUT' , `${serverUrl}/category/${id}`,reqBody)
}

// so here category is already there so we are updating the category value as new thats why put req