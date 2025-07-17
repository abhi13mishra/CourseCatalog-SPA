import react, {Suspense, lazy} from "react";
import { Routes, route } from "react-router-dom";
import Home from "./pages/Home";

const CourseDetails = lazy(() => import("./pages/CourseDetails"));

function App() {
    return (
    <Suspense>
       <Routes>
         <Route path ="/" element = {<Home />}></Route>
         <Route path ="/course/:id" element = {<CourseDetails />}></Route>
       </Routes>
    </Suspense>
  )
}

export default App
