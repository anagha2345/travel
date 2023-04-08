import React from 'react'
import { Form, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Moredetails from './Moredetails';
import './Hview.css'
import Themes from './Themes';

function Hview() {
  var [Allhotels, setData] = useState([])
  const fetchdata = async () => {
    const result = await fetch('/travel.json')
    result.json().then(data => {
      setData(data.traveling)
    })
  }
  const params = useParams()
  // console.log(params);
  console.log(Allhotels);
  const tplace = Allhotels.find(item => item.id == params.id)

  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <>
      {
        tplace ? (<div>

          <Row className='ps-5 pe-5 pb-5 pt-0'>

            <Col className='rounded-7   ps-5 pe-0' lg={6} md={6}>
              <img style={{ height: '400px' }} className='' src={tplace.banner}></img>
            </Col>
            <Col id='anm' className=' ps-0 pe-5' lg={6} md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item><h2>{tplace.place}</h2></ListGroup.Item>
                <ListGroup.Item><p>{tplace.title}</p></ListGroup.Item>
                <ListGroup.Item>
                  <h5>Inclusions</h5>
                  <Row>
                  <Col>
                      <img src='https://i.postimg.cc/QMYSxN1C/3-star.png'></img>
                      <p>Meals</p>
                    </Col>
                    <Col>
                      <img src='https://i.postimg.cc/QMYSxN1C/3-star.png'></img>
                      <p>Accommodation</p>
                    </Col>
                    <Col>
                      <img src='https://i.postimg.cc/QMYSxN1C/3-star.png'></img>
                      <p>Transportation</p>
                    </Col>
                    <Col>
                      <img src='https://i.postimg.cc/QMYSxN1C/3-star.png'></img>
                      <p>Sightseeing</p></Col>


                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Moredetails moreData={tplace}></Moredetails>
                </ListGroup.Item>


                {/* <ListGroup.Item>
                  <Highlights bestTime={tplace.itinerary} />
                </ListGroup.Item> */}

              </ListGroup>

            </Col>
          </Row>
          <Row className='ps-5'>
            <Themes highlights={tplace.Highlights}></Themes>
          </Row>

        </div>) : ""

      }
    </>
  )
}

export default Hview