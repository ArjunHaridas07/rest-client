import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import child
import Restcard from '../Restcard/Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Allrest() {
  //to hold allREstaurant details as in the form of array
  const [allRestaurants, setAllRestaurants] = useState([])
  const fetchData = async () => {
    const response = await axios.get('https://restaurant-backend-5r2c.onrender.com/restaurants')
    console.log(response.data);//array(10)
    setAllRestaurants(response.data)
  }
  console.log(allRestaurants);//array(10)

  useEffect(() => {
    fetchData()//function call
  }, [])
  return (
    <div>
     <Row>
     {
      allRestaurants.map((item)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
                <Restcard restaurants={item}/>

        </Col>
      ))
     }
     </Row>
    </div>
  )
}

export default Allrest