import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Hcard({placedata}) {
  return (
    <div className='ps-5 pb-4'> 
     
      <Link to={`/view-places/${placedata.id}`}style={{textDecoration:'none',color:'white'}}>
          <Card style={{ width: '18rem' }}>
        <Card.Img style={{height:'250px'}} variant="top" src={placedata.photograph}/>
        <Card.Body>
          <Card.Title>{placedata.place}</Card.Title>
          <Card.Text>
           { }
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Link >
  </div>
  )
}

export default Hcard