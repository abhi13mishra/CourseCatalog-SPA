import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetails=()=>{
    const {id} = useParams();
    const [course, setCourse] = useState(null);

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then((res)=>setCourse(res.data));
    },[id]);

    if(!course) return <h2>Loading...</h2>;
    return(
        <div>
            <h2>{course.title}</h2>
            <img src = {course.thumbnail}/>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
        </div>
    );
}

export default CourseDetails;