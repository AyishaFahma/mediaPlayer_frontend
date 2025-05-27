import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allApi';


//destructure the key that is coming from parent or props
function Videocard({video , setDeleteVideoStatus , present}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    // api function to history
    const addVideoHistory = async() =>{

      const date = new Date()
      console.log(date);

      const time = new Intl.DateTimeFormat("en-GB" ,  { day:'2-digit' , month: '2-digit' , year: 'numeric' , hour:'2-digit', minute:'2-digit' , second:'2-digit' } ).format(date)
      console.log(time);

      const reqBody = {
        caption : video.caption ,
        url : video.embedlink ,
        timeStamp : time

      }
      
      

      const result = await addVideoHistoryApi(reqBody)
      console.log(result);
      
    }


    const handleShow = () => {
      setShow(true);
      addVideoHistory()
    }


    //delete video api function

    const deleteAVideo = async (id) => {
      const result = await deleteVideoApi(id)
      console.log(result);
      if(result.status >= 200 && result.status <300){
        setDeleteVideoStatus(result.data)
      }
      
    }


    //drag video function
    const videoDrag = ( e , video )=>{
      console.log(video);
      console.log(e);
      // here both argument must be string in setData function
      e.dataTransfer.setData( "videoDetails" , JSON.stringify(video) )
  
    }

    // to access the draged video in category so go to category and place dropable in category element


  return (
    <>
    
    <Card style={{ width: '100%' ,height:''}} className='mt-3' draggable onDragStart={ (e)=>videoDrag( e , video )}>
      { !present && <Card.Img  onClick={handleShow}  variant="top" src={video?.imageurl} height={'300px'}/> }
      <Card.Body className='d-flex justify-content-between' style={{height:'90px'}}>
        {/* here prent nte value false aneel mathram image ne kanichal mathi to avoid image in category videocard */}

        <Card.Text >
          {video?.caption}
        </Card.Text>
        {  !present && <Button onClick={()=>deleteAVideo(video?.id)} variant="danger" ><FontAwesomeIcon icon={faTrash} className='fs-6'/></Button>  }
      </Card.Body>
    </Card>


    {/* modal */}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Here is the Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe width="100%" height="450"  src={`${video?.embedlink}?autoplay=1`} title="4K Remastered - Deewani Mastani | Deepika Padukone | Bajirao Mastani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
        
      </Modal>


    </>
  )
}

export default Videocard