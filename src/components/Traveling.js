import { React, useState } from 'react'
import { useEffect } from 'react'
import Hcard from './Hcard'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Carousels from './Carousels'



function Traveling() {
  //state to hold data from api
  var [placeList, setPlaces] = useState([])
  //function to call api
  const fetchData = async () => {
    const result = await fetch('/travel.json')
    result.json().then(
      data => {
        setPlaces(data.traveling)
      }
    )
  }
  // console.log(hotelList);
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Row className='p-2'>
        <Col className='ps-2 ' lg={4} md={4}>
          <Carousels></Carousels>
        </Col>
        <Col lg={8} md={8} className=''>
          <h1 className='text-center'>Let us plan you a
            perfect </h1><h1 className='text-center text-warning'>India Holiday</h1>
          <h5 className='text-center'>Personalised, well-crafted tour packages for best experiences</h5>
          <Row className='pt-4 '>
            <Col className='ps-5'>
            <h5>Trecking</h5>
            <img src='https://i.postimg.cc/wjKKmdds/india-holiday-trekking.webp'></img>
            </Col>
            <Col className='ps-1'>
            <h5>Wild life</h5>
            <img src='https://i.postimg.cc/3NpsLLXw/india-holiday-wildlife.webp'></img></Col>
            <Col>
            <h5>Heritage</h5>
            <img src='https://i.postimg.cc/9frN88Vj/india-holiday-heritage.webp'></img>
            </Col>
          </Row>
      </Col>
        
      </Row>
      <Row className='ps-5 pt-5 pb-5 pe-5 ms-5'>
        <h5>Top Trending India Holiday Destinations</h5>
        {
          placeList.map(item => (

            <Col lg={4} md={6}>
              
              <Hcard placedata={item}></Hcard>
            </Col>
          ))
        }
      </Row>
      
    </>
  )
}

export default Traveling