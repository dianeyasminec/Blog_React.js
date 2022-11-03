import React from 'react'
import {useParams, useHistory} from 'react-router-dom';
import useFetch from './UseFetch';
import { Button } from 'react-bootstrap';


export default function BlogDetails() {
    const {id} = useParams()
    const{data: blog, error} = useFetch(' http://localhost:8000/blogs/' + id)
    const history = useHistory()

function handleClick(){
  fetch(' http://localhost:8000/blogs/' + blog.id, {
    method: 'DELETE'
  })
  .then(()=>{
history.push('/')
  })
}

  return (
    <div className="blog-details">
        {error && <div>{error}</div>}

        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.description}</div>
                <Button 
                variant='outline-danger'
                onClick={handleClick}>delete</Button>
            </article>    
        )}


    </div>
  )
}
