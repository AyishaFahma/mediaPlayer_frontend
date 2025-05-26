import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideo} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'

import React from 'react'




function Footer() {
  return (
    <div className='container-fluid'>
      <div className='row '>
        <div className="col-md-4 p-3">
          <div>
            <h4 className='text-warning'><FontAwesomeIcon icon={faVideo}  className='me-3'/>Media Player</h4>
            <p className='mt-4' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quos earum quas molestiae maxime amet sequi, autem itaque vel dolores exercitationem possimus expedita facere assumenda ad totam blanditiis iste! Veritatis?</p>
          </div>
        </div>
        <div className="col-md-2 p-3">
          <div className='d-md-flex  justify-content-center align-items-center flex-column'>
            <h4>Links</h4>

            <Link to={'/'}>
            <p className='mt-4'>Landing Page</p>
            </Link>

            <Link to={'/home'}>
            <p>Home page</p>
            </Link>

            <Link to = {'/watch-history'}>
            <p>Watch History</p>
            </Link>

          </div>
        </div>
        <div className="col-md-2 p-3">
          <div className='d-md-flex  justify-content-center align-items-center flex-column'>
            <h4>Guides</h4>
            <p className='mt-4'>Bootstrap</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <h4>Contact Us</h4>
          <div className="d-flex mt-4 pe-5">
            <input type="text" placeholder='Email Id' className='form-control'/>
            <button className='btn btn-warning ms-2'>Subscribe</button>

          </div>

          <div className='d-flex justify-content-between mt-4 pe-5'>

          <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>
          <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
          <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
          <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
          <FontAwesomeIcon icon={faSquareInstagram} className='fa-2x'/>


          </div>


        </div>
      </div>
    </div>
  )
}

export default Footer