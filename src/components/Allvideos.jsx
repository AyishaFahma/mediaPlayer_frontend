import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { AddVideoCategoryApi, getAllVideoApi } from '../services/allApi'

function Allvideos( {addStatus , setvideoCategoryUpdateStatus} ) { //destructure from home.jsx state lifting

    // the data to be displayed so it store it as a state and the coming data is array so it store as a array

    const [AllVideoDetails , setAllVideoDetails ] = useState([])


    //state creating for deleting a card in videocard that need to communicate allvideo.jsx components without refreshing to delete video

    const [ deleteVideoStatus , setdeleteVideoStatus ] = useState({})
    


    // here is the api call to get data

    const getAllVideos = async() => {
        const result = await getAllVideoApi()
        // console.log(result);

        if(result.status >= 200 && result.status < 300){
            setAllVideoDetails(result.data) // here the resultant array is in data key so we use .data
        }
        
    }

    console.log(AllVideoDetails);
    
    // the getAllVideos function need to be called when we add a video and when page loads the available video need to be showed
    //here it against pure function so we need to handle this by using useEffect()

    useEffect( () =>{
        getAllVideos()
    }, [ addStatus , deleteVideoStatus ] )
    //state or probs change cheythalm dependency call and useeffect call




    //over drop 

    const videoOver = (e) => {
        console.log("videoOver");
        
        e.preventDefault()
    }



    const videoDrop = async (e) =>{
        const details =  JSON.parse(e.dataTransfer.getData("details")) 
        
        console.log(details);
        console.log(e);
        


        const { categoryDetails , videoDetails} = details
        //remaining array elements in category video as
        const newArray = categoryDetails.categoryVideo.filter ( (item) => item.id != videoDetails.id )


        console.log(newArray);

        const reqBody = {
            categoryName : categoryDetails.categoryName ,
            categoryVideo : newArray ,
            id : categoryDetails.id

        }
        const result = await AddVideoCategoryApi(categoryDetails.id , reqBody)
        console.log(result);
        if(result.status >= 200 && result.status < 300){
            setvideoCategoryUpdateStatus(result.data)
        }
        
        
        
    }

    


  return (
    <>
    <h5 className='my-5'>All Videos</h5>

    {/* conditional rendering using ternery operator in the case of if video card available or no video */}

    { AllVideoDetails?.length>0 ? 
    <div className="container-fluid" droppable="true" onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e)} >
        <div className="row">


             {/*the videocard need to be multiplied according to array item  */}

            { AllVideoDetails?.map( (item) => (

                <div className="col-md-3 p-2 mb-5" >
                    {/* data is shared as props coz this item is available to videocard */}
                <Videocard video = {item}  setDeleteVideoStatus = {setdeleteVideoStatus}/> 
                </div>

            ))}
            
        </div>
    </div>

         :

    <div className="conatainer-fluid">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">

                <img src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-illustration-download-in-svg-png-gif-file-formats--is-explore-box-states-pack-design-development-illustrations-3385483.png" alt="no image" className='w-100'/>

                <h6 className='text-danger mt-3 '>No Video Added Yet..</h6>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>}

    </>
  )
}

export default Allvideos