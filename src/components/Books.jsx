// import React,{useState, useEffect} from 'react'
import Bloglist from './Bloglist'
import UseFetch from './UseFetch'




export default function Books() {

    const{data:blogs, error} = UseFetch(' http://localhost:8000/blogs')

  return (
   
    <div className="home text-center">
      <div className="bg"></div>
    <h2 className=" text-center m-3 text-decoration-underline">All books !</h2>    
  {error && <div>{error}</div>}
  { blogs && <Bloglist  blogs={blogs} />}

    </div>
  )
}
