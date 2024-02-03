"use client"
import { NextRequest } from "next/server";
   const HomePage  =  () => {
    const data=new NextRequest("http://localhost:3000/api")
    console.log("dataset=",data)
       return (
           <div className="container">
               <h1 className="mt-4">My Drama List</h1>
               <ul className="list-unstyled">
                  <li> {data.url} </li>
                  <li>{data.method}</li>
                  <li>{data.redirect}</li>
                  <li>{data.body}</li>
                  
               </ul>
               <div className="mt-4">
                   <h3>Add New Drama:</h3>
                   <input
                       type="text"
                       placeholder="Name"
                   />
                   <input
                       type="text"
                       placeholder="Image URL"
                   />
                   <input
                       type="text"
                       placeholder="Ranking"
                   />
                   <button >Add Drama</button>
               </div>
           </div>
       );
   };

   

   export default HomePage;