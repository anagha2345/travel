import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
function Incl() {
    const [open, setOpen] = useState(false);

  return (
    <div>
         <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      Inclusions
      </Button>
      <div style={{ minHeight: '10px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
            <Row className='text-center'>
                  <Col className=''>
                      <img src='https://i.postimg.cc/QMYSxN1C/3-star.png' className='w-100' style={{height:'100px'}}></img>
                      <p>Meals</p>
                    </Col>
                    <Col className=''>
                      <img src='https://i.postimg.cc/QMYSxN1C/3-star.png'style={{height:'100px'}}></img>
                      <p>Accommodation</p>
                    </Col>
                    <Col>
                      <img src='https://i.postimg.cc/QMYSxN1C/3-star.png'style={{height:'100px'}}></img>
                      <p>Transportation</p>
                    </Col>
                    <Col>
                      <img src='https://i.postimg.cc/QMYSxN1C/3-star.png'style={{height:'100px'}}></img>
                      <p>Sightseeing</p></Col>


                  </Row>
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Incl