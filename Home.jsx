import react, {useEffect, useState, useReducer} from "react";
import axios from "axios";
import {favouritesReducer, initialState} from "../reducers/favouritesReducer";
import CourseCard from "../components/CourseCard";
import Pagination from "../components/Pagination";

const Home = ()=>{
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [favourites, dispatch] = useReducer(favouritesReducer, initialState);

    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products?limit=10&skip={(page ‑ 1)*10}`)
        .then((res)=> setCourses(res.data.products));
    }, [page]);

    const filteredCourses = courses.filter((course)=>
        course.title.toLowerCase().includes(query.toLowerCase())
    );

    return(
        <div>
            <h1>Course Catalog</h1>
            <input type="text" placeholder="Search title..." value={query} onChange={(e)=> setQuery(e.target.value)}/>
            <div>
                {filteredCourses.map((course)=>(
                    <CourseCard key={course.id} course = {course} dispatch={dispatch} favourites={favourites} />
                ))}
            </div>
            <Pagination page={page} setPage = {setPage} />
        </div>
    );
}

export default Home;