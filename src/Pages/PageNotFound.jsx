import React from "react";
import PG from '../assets/pagenotfound.jpg';
import { Link } from "react-router-dom";
const PageNotFound = () => {
return<main>
  <section className="flex flex-col justify-center px-2">
  <div>
      <p className="text-5xl text-gray text-center font-bold my-10 dark:text-white">oops page not found!</p>
  </div>
   <div className="  flex justify-center">
     <img className="rounded  "  src={PG} alt="page not found"/>
   </div>

   <div className="flex justify-center my-2">
<Link to="/" >
<button className="w-60 rounded-lg my-3 cursor-pointer font-bold py-2 text-white text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
    Back to Home
</button>
</Link>
   </div>


  </section>

</main>
}
export default PageNotFound;