import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../RestOp/Restop';
import Viewreview from '../ViewReview/Viewreview';


function Viewrest() {
    //get path parameter
    // const pathParameter=useParams()
    // console.log(pathParameter);
    // console.log(pathParameter.id);
    
    //destructure parameter

    const {id}=useParams()
    console.log(id);

    const [RestDetails,SetRestDetails]=useState({})
    //api callfor getting particular restaurant details

    const fetchData= async()=>{
        const {data}= await axios.get(`https://restaurant-backend-5r2c.onrender.com/restaurants/${id}`)
        console.log(data);//particular rest data
        SetRestDetails(data)
    }
    console.log(RestDetails);

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
<Row>
    <Col>
    {/* image */}
    <img src={`${RestDetails.photograph}`} alt=""  style={{width:'400px',marginLeft:'100px', margin:'20px',height:'500px',borderRadius:'20px'}}/>
    </Col>
    <Col style={{marginTop:'150px'}}>
    {/* content */}
    <ListGroup>
      <ListGroup.Item>Name: {RestDetails.name}</ListGroup.Item>
      <ListGroup.Item>Address: {RestDetails.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine type: {RestDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood: {RestDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item><Restop op={{
  Monday: "5:30 pm - 11:00 pm",
  Tuesday: "5:30 pm - 12:00 am",
  Wednesday: "5:30 pm - 12:00 am",
  Thursday: "5:30 pm - 12:00 am",
  Friday: "5:30 pm - 11:00 pm"
}} /></ListGroup.Item>
      <ListGroup.Item><Viewreview reviews={RestDetails.reviews}/></ListGroup.Item>


            {/* <ListGroup.Item>Reviews : {RestDetails.operating_hours}</ListGroup.Item> */}

    </ListGroup>

    </Col>
</Row>
    </div>
  )
}

export default Viewrest