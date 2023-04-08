import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


function Themes({ highlights }) {


  return (
    <div className='text-center container '>

      <h4>Highlights</h4>
      <Row className='ps-5 '>
        
          {
            highlights.map(item => (
              <Col lg={4} className=''>
              <h4>{item.name}</h4>
              <img src={item.image} className='w-100' style={{height:'250px'}}></img>
              <p>{item.Details}</p>
                </Col>
            ))
          }
        </Row>
    </div>
  )
}

export default Themes