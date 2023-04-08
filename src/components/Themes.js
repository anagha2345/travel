import React,{ useState } from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Themes({ highlights }) {
  const [open, setOpen] = useState(false);

  return (
    
    <div className='text-center container '>

<Button className='rounded-pill bg-primary'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       Explore more
      </Button>
     <Collapse in={open}>
       <div id="example-collapse-text">
       <Row>   { 
          highlights.map(item=>(
            
            <Col lg={4} >
              <h5>{item.name}</h5>
            <img style={{height:'300px'}} src={item.image}></img>
            <p>{item.Details}</p>
            </Col>
           
          ))
         }</Row>
        </div> 
      </Collapse>
    </div>
  )
}

export default Themes