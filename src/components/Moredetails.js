import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
function Moredetails({moreData}) {
    
  return (
    <div>
         <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>More details about   {moreData.place}</Accordion.Header>
        <Accordion.Body>

          <p>{moreData.details}</p>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Moredetails