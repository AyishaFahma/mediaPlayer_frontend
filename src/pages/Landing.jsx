import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>

      {/* welcome sec */}

      <div className="conatiner">
        <div className="row my-5">
          <div className="col-md-6 px-5">

            <h2>Welcome to <span className='text-warning'>Media Player</span></h2>

            <p className='mt-5 ' style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse assumenda illo incidunt corporis numquam, tenetur harum velit quia necessitatibus. Animi mollitia porro, earum asperiores aperiam ex ipsum. Sint, numquam eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus magni labore sed voluptas illo, consequuntur blanditiis quisquam reprehenderit sunt hic totam dicta exercitationem ipsum modi dolorum non eum facere omnis.</p>
            <Link to={'/home'}><button className='btn btn-warning mt-4'>Get Started</button></Link>
          </div>

          <div className="col-md-6 px-4 d-flex justify-content-center align-items-center mt-4 mt-md-0 mb-5">

            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-50' />

          </div>
        </div>
      </div>


      {/* features sec */}

      <h3 className='text-center my-5'>Features</h3>


      <div className="container">
        
        <div className="row mb-5">

          <div className="col-md-4 d-flex justify-content-center align-items-center mb-5 mb-md-0">
            <Card style={{ width: '18rem' }} className='border border-secondary p-3 '>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/9e/5d/6c/9e5d6cf20fcea3ec553dc3b3a83ee912.gif" style={{height:'300px'}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 d-flex justify-content-center align-items-center mb-5 mb-md-0">
            <Card style={{ width: '18rem' }} className='border border-secondary p-3 '>
              <Card.Img variant="top" src="https://i.gifer.com/origin/ce/ce9b1b80a59bc4090dcded493ccba5f3_w200.gif" style={{height:'300px'}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 d-flex justify-content-center align-items-center mb-5 mb-md-0">
            <Card style={{ width: '18rem' }} className='border border-secondary p-3 '>
              <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/22221956/file/original-fb5873b0f35445bcb7d3b5bcfa5bc18c.gif" style={{height:'300px'}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>


      {/* iframe sec */}

      {/* <div className="container-fluid">
        <div className="row" style={{marginTop:'150px',marginBottom:'200px'}}>
          <div className="col-md-1 "></div>
          <div className="col-md-5 border border-secondary rounded">

            <div className='p-4'>
              <h3 className='text-warning fs-2 mb-3'>Simple Fast and PowerFul</h3>
              <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything </span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta maxime cupiditate asperiores iusto et? Mollitia modi odit reiciendis voluptatum tempore nesciunt, veritatis facilis aliquid aut rerum ab omnis totam?</p>
              <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything </span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta maxime cupiditate asperiores iusto et? Mollitia modi odit reiciendis voluptatum tempore nesciunt, veritatis facilis aliquid aut rerum ab omnis totam?</p>
              <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything </span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta maxime cupiditate asperiores iusto et? Mollitia modi odit reiciendis voluptatum tempore nesciunt, veritatis facilis aliquid aut rerum ab omnis totam?</p>
            </div>
          </div>
          <div className="col-md-5 border border-secondary rounded p-5"> */}

            {/* iframe */}

            {/* <iframe width="100%" height="100%"  src="https://www.youtube.com/embed/StFfchLBjII?list=PL4fETOK-LX1fzNHbzbH49MFNP9M2QyZ2E" title="4K Remastered - Deewani Mastani | Deepika Padukone | Bajirao Mastani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


          </div>
          <div className="col-md-1 "></div>
        </div>
      </div> */}




      {/* or */}



      <Container className='p-md-5 p-4 mb-5'>
        <Row className='mt-5 p-md-5 p-3 border border-secondary rounded'>

          <Col md={6}> 
          <h2 className='text-warning'>Simple Fast and PowerFul</h2>
          <p style={{textAlign:'justify'}} className='mt-4'><span className='fs-4'>Play Everything </span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta maxime cupiditate asperiores iusto et? Mollitia modi odit reiciendis voluptatum tempore nesciunt, veritatis facilis aliquid aut rerum ab omnis totam?</p>
          <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play Everything </span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta maxime cupiditate asperiores iusto et? Mollitia modi odit reiciendis voluptatum tempore nesciunt, veritatis facilis aliquid aut rerum ab omnis totam?</p>
          <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play Everything </span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta maxime cupiditate asperiores iusto et? Mollitia modi odit reiciendis voluptatum tempore nesciunt, veritatis facilis aliquid aut rerum ab omnis totam?</p>
          </Col>
          <Col md={6}>
          <iframe width="100%" height="100%"  src="https://www.youtube.com/embed/StFfchLBjII?list=PL4fETOK-LX1fzNHbzbH49MFNP9M2QyZ2E" title="4K Remastered - Deewani Mastani | Deepika Padukone | Bajirao Mastani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
          
        </Row>

      </Container>

    </>
  )
}

export default Landing