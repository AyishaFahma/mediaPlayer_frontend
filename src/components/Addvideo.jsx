import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import { addVideoApi } from '../services/allApi';

function Addvideo( {setAddStatus} ) { //destructure the key coming from the home.jsx state lifting

    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);
      handleReset()
    }

    const handleShow = () => setShow(true);

    const [VideoDetails , setVideoDetails ] = useState( {
      caption : "",
      imageurl : "",
      embedlink : ""
    })
    // console.log(VideoDetails);

    const handleReset = ()=>{
      setVideoDetails({
        caption : "",
        imageurl : "",
        embedlink : ""
      })
    }

    const handleAdd = async() => {
      const { caption , imageurl , embedlink } = VideoDetails

      if ( !caption || !imageurl || !embedlink ){
        toast.info("Please fill the form Completely")
      }
      else{

        // convert the userprovided link to embeded link here 3 cases for the user link

        //https://www.youtube.com/watch?v=izbydia9jz4


        if (embedlink.startsWith('https://www.youtube.com/watch?')){
          const link = embedlink.slice(-11)
          // console.log(link);
          const emLink = `https://www.youtube.com/embed/${link}`
          //add video api call here with reqbody
          const result = await addVideoApi({ caption , imageurl, embedlink: emLink})
          // console.log(result);

          // result of api call ie axios is in successfull series

          if( result.status >=200 && result.status <300){
            toast.success('Video added Successfully')
            handleClose()
            setAddStatus(result.data) // when success response state value become change
          }
          else{
            toast.error('Something went wrong')
            handleReset()

          }
          
        }

        else{

         //https://youtu.be/izbydia9jz4?si=3_XsEvoNl8NruAAk

          const link = embedlink.slice(17 , 28)
          // console.log(link);
          const emLink = `https://www.youtube.com/embed/${link}`
          const result = await addVideoApi({ caption , imageurl, embedlink: emLink})
          // console.log(result);

          if( result.status >=200 && result.status <300){
            toast.success('Video added Successfully')
            handleClose()
            setAddStatus(result.data)
          }
          else{
            toast.error('Something went wrong')
            handleReset()

          }

          
        }
        

      }
    }


    //<iframe width="914" height="514" src="https://www.youtube.com/embed/izbydia9jz4" title="Narivetta - Minnalvala Video Song | Tovino Thomas, Anuraj Manohar, Jakes Bejoy, Sid Sriram, Sithara" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    

  return (
   <>
        <div>
            <h5><span className='d-none d-md-inline'>Upload new Video </span><FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-2'/></h5>
        </div>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} className='me-2'/> Upload Videos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Please Fill the Following Details</p>

                <form action="" className='border p-4 rounded mt-3'>
                    <div className='mb-3'>
                        <input type="text" placeholder='video caption' className='form-control' value={VideoDetails.caption} onChange={(e) => setVideoDetails({...VideoDetails , caption:e.target.value})}/>

                    </div>

                    <div className='mb-3'>
                        <input type="text" placeholder='video image' className='form-control'  value={VideoDetails.imageurl} onChange={(e) => setVideoDetails({...VideoDetails , imageurl:e.target.value})}/>

                    </div>

                    <div className='mb-3'>
                        <input type="text" placeholder='video url' className='form-control'  value={VideoDetails.embedlink} onChange={(e) => setVideoDetails({...VideoDetails , embedlink:e.target.value})}/>

                    </div>

                </form>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleReset}>
                Reset
              </Button>
              <Button variant="warning" onClick={handleAdd}>
                Upload
              </Button>
            </Modal.Footer>
          </Modal>

          <ToastContainer position='top-center' theme='colored' autoClose={2000}  />
   </>
  )
}

export default Addvideo