import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Videocard from './Videocard';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import { addCategoryApi, AddVideoCategoryApi, deleteACategoryApi, getAllCategoryApi } from '../services/allApi';




function Category( {videoCategoryUpdateStatus}) {

  const [show, setShow] = useState(false);

  // create state to store data
  const [categoryName , setcategoryName ] = useState("")

  console.log(categoryName);

  //state to store allcategory details from get api
  const [ AllCategoryDetails , setAllCategoryDetails] = useState( [] )

  //without refresh data can be ssen
  const [ addCategoryStatus , setaddCategoryStatus ] = useState( {} )

  // when delete successful without refresh

  const [ deleteCategoryStatus , setdeleteCategoryStatus ] = useState( {} )


  // state create to automaticcally the video is in category
  
  const [ updateStatus , setupdateStatus ] = useState( {} )




  



  //modal click functions

  //to close the modal
  const handleClose = () =>{ 
    setShow(false);
    handleReset()
  }
  //to show the modal
  const handleShow = () => setShow(true);

  // to reset data in input field
  const handleReset = () => setcategoryName("")

  // category adding part and it store in jsonfile in server
  const handleAdd = async() => {
    if (categoryName == ""){
      toast.info("Please Add Category NName")
    }

    else{

      const reqBody = {
        categoryName,
        categoryVideo : []

      }
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if(result.status >=200 && result.status <300){
        toast.success("Category Added Successfully ")
        handleClose()
        setaddCategoryStatus(result) // when a new category is added we call this statechange so that it will work without refresh 
      }
      else{
        toast.error("Something went wrong ")
        handleReset()
      }

    }
  }


  // function to get all category from api
  const getAllCategory = async () =>{
    const result = await getAllCategoryApi()
    console.log(result);
    if(result.status >= 200 && result.status <300){
      setAllCategoryDetails(result.data)
    }
 
  }
  console.log(AllCategoryDetails);

  //useeffect call to external data coming and addcategory(state) changes and deletecategory(state) changes
  useEffect( ()=>{
    getAllCategory()

  }, [addCategoryStatus , deleteCategoryStatus , updateStatus , videoCategoryUpdateStatus])



  //to delete a category calls the delete api
  const deleteCategory = async(id) => {
    const result = await deleteACategoryApi(id)
    console.log(result);
    if(result.status >= 200 && result.status <300){
      setdeleteCategoryStatus(result)
    }
    
  } 

  //
  const videoOver = (e) => {
    e.preventDefault() // prevent the re-load and prevent the data lose
  }


  const videoDrop = async (e , categoryDetails ) =>{
    console.log(e);
    console.log(categoryDetails);
    // the draged data in setData function is to get in this perticular category
    const video = JSON.parse(e.dataTransfer.getData( "videoDetails"))
    console.log(video);



    //push / add video to the category array's categoryVideo key

    if(categoryDetails.categoryVideo.find( (item) => item.id == video.id)){
      toast.warning("Video Already there in Category")
    }
    else{
      categoryDetails.categoryVideo.push(video)
      console.log(categoryDetails); //now video is added to the corresponding category and we need api to add in categoryVideo


      const result = await AddVideoCategoryApi(categoryDetails.id , categoryDetails)

      console.log(result);
      // this will add a perticular video in curresponding category and this can be seen in json server file
      if(result.status >= 200 && result.status < 300){
        toast.success("Video added Successfully")
        setupdateStatus(result.data)
      }
      else{
        toast.error("Something went wrong")
      }
      
      
    }
    
    
    
  }



  const videoDrag = ( e , video , category) => {
    // console.log(e);
    // console.log(video);
    // console.log(category);

    // evide category nnu thirich drag cheyyanu video ne 


    const details = {
      videoDetails : video ,
      categoryDetails : category 
    }
    console.log(details);
    // ee details ne transfer cheyyanu to allvideo silekk so in allvideos place droppable
    

    e.dataTransfer.setData("details" , JSON.stringify(details))
  
  }





  return (
    <>

    <h5 className='my-5'>Category</h5>

    <button className='btn btn-warning w-100'  onClick={handleShow} >Add Category</button>

    { AllCategoryDetails?.length > 0 ? // [ {}, {}, {}, .....]
    AllCategoryDetails?.map ( (item, index) => ( // {} , {} , {} , ...

    <div className='p-3 rounded border mt-4' key={index} 
    droppable={true} onDragOver={(e) => videoOver(e)} onDrop={ (e) => videoDrop(e , item)}>

      <div className='d-flex justify-content-between mb-4'>

        <p>{item?.categoryName}</p>
        <button onClick={()=>deleteCategory(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button>

      </div>

      {

        item?.categoryVideo?.length > 0 && 
        //  { category name:  ,
        // categoryvideo: [ {video}, {video} , .....] ,
        // id: }, 
        //  {}, .....

        item?.categoryVideo?.map( (video , index) => (

          <div key={index} draggable onDragStart={(e) => videoDrag(e , video , item)}> 
          {/* here categoryil ulla videocard ne thirich allvideo kk drag cheyyanam delete akkan vendeett athinanu ee oru div ne draggable kodthath coz videocard oru div nte ullilanu place cheythath here video = perticular video item= perticular category */}
            <Videocard  video={video} present={true}/>  
          </div>

          // here present true akki set cheythath for category yil add cheyyunna videocardinu image um buttonum remove akkan vendi aanu so it will goes into videocard as props destructure 

        ))
          
      }

    </div>
    ))
    
    :

    <h6 className='text-danger my-4 text-center'>No Category Added Yet...</h6> }




    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add Category !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className='border p-3 rounded'>
            <input value={categoryName} onChange={(e)=> setcategoryName(e.target.value)} type="text" placeholder='Enter Category Name' className='form-control' />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Category