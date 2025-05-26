import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {faVideo} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-transparent p-3">
        <Container>
            <Link to={'/'} style={{textDecoration:'none'}}>
              <Navbar.Brand className='text-warning fs-4'>
              <FontAwesomeIcon icon={faVideo} beat className='me-3'/>
                {' '}
                Media Player
              </Navbar.Brand>
            </Link>  
        </Container>
      </Navbar>
  )
}

export default Header






