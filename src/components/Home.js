// import React,{useState, useEffect} from 'react'
import Bloglist from './Bloglist'
import UseFetch from './UseFetch'




export default function Home() {

    const{data:blogs, error} = UseFetch(' http://localhost:8000/blogs')

  return (
   
    <div className="home">
      <div className="bg"></div>
    <h2>All books !</h2>    
  {error && <div>{error}</div>}
  { blogs && <Bloglist  blogs={blogs} />}

    </div>
  )
}
