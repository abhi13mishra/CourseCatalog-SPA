import React from "react";
import {Link} from "react-router-dom";

const CourseCard = ({course, dispatch, favourites}) =>{
    const isFav = favourites.includes(course.id);

    return(
        <div>
            <img src = {course.thumbnail} width = "100%" />
            <h3>{course.title}</h3>
            <p>Price: ${course.price}</p>
            <Link to={`/course/${course.id}`}>View Details</Link>
            <button onClick={()=>dispatch({type: isFav ? "remove" : "add", payload:course.id})}>
               {isFav ? "Remove from Fav" : "Add to Fav"}
            </button>
        </div>
    );
}

export default React.memo(CourseCard);