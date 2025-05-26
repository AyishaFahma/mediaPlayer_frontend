import React, { useState } from 'react'
import Addvideo from '../components/Addvideo';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Allvideos from '../components/Allvideos';
import Category from '../components/Category';

function Home() {


 // state lifting for data sharing , here state is moved to allvideo and change state is for addvideo 
  const [addStatus , setAddStatus] = useState( {})


  const [videoCategoryUpdateStatus , setvideoCategoryUpdateStatus ] = useState( {})




  return (
    <>
    <div className='px-5 my-5 d-flex justify-content-between align-items-center'>
      {/* state lifting here data share as probs*/}
      <Addvideo setAddStatus={setAddStatus} />
      
      <Link to={'/watch-history'} style={{textDecoration:'none'}}><h5><span className='d-none d-md-inline'>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} className='ms-2' /></h5></Link>
    </div>


    <div className='container-fluid px-5'>
      <div className="row">

        <div className="col-md-9">
          {/* state lifting data share as probs */}
          <Allvideos addStatus={addStatus} setvideoCategoryUpdateStatus={setvideoCategoryUpdateStatus} />

        </div>

        <div className="col-md-3">
          <Category videoCategoryUpdateStatus={videoCategoryUpdateStatus}/>

        </div>

      </div>
    </div>
    </>
  )
}

export default Home