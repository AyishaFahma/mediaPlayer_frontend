import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'

function Watchhis() {

  //store the history data to state
  const [getHistoryData, setgetHistoryData] = useState([])
  //create state for automatically delete without refresh
  const [deleteStatus , setdeleteStatus] = useState({})


  //api call to get watchhistory video data
  const getHistory = async() =>{
    const result = await getAllVideoHistoryApi()
    //console.log(result);
    if(result.status >= 200 && result.status <300){
      setgetHistoryData(result.data)
    }
    
  }
  //console.log(getHistoryData);

  // api call function to delete a perticular video
  const deleteAVideoHistory = async(id )=> {
    const result = await deleteWatchHistoryVideoApi(id)
    console.log(result);
    if(result.status >= 200 && result.status <300){
      setdeleteStatus(result)
    }
    
  }
  
  useEffect( ()=>{
    getHistory()

  }, [deleteStatus]) // load when state change and first loading time




  return (
    <>

    <div className='px-5 my-5 d-flex justify-content-between align-items-center'>

      <h5>Watch History</h5>
      
      <Link to={'/home'} className='text-decoration-none'><h5><span className='d-none d-md-inline'>Back Home</span> <FontAwesomeIcon icon={faHouse} className='ms-2' /></h5></Link>
    </div>




    <div className="container mt-4">
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10 table-responsive">

        { getHistoryData?.length > 0 ?<table className='table table-bordered'>

      {/* thead */}
      <thead>
        <tr >
          <th className='text-center bg-secondary'>SI:No</th>
          <th className='text-center bg-secondary'>Caption</th>
          <th className='text-center bg-secondary'>url</th>
          <th className='text-center bg-secondary'>Time Stamp</th>
          <th className='text-center bg-secondary'>Action</th>
        </tr>
      </thead>

      {/* tbody */}

      <tbody className='text-center'>
        {getHistoryData?.map( (item , index) => (

        <tr>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
          <td>{item?.timeStamp}</td>
          <td className='text-center'><button onClick={()=>{deleteAVideoHistory(item?.id)}} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>

        )) }
      </tbody>

        </table> 
        :
        <p>No History</p> }


        </div>
        
        <div className="col-md-1"></div>
      </div>
    </div>
    
    </>
  )
}

export default Watchhis