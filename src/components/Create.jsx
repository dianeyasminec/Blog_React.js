import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default function Create() {

const[title, setTitle] = useState('');
const[body, setBody] = useState('');
const[author, setAuthor] = useState('diane');
const history = useHistory()


function handleSubmit(e){
  e.preventDefault();
  const blog = {title, body, author}
  // console.log(blog)
  fetch(' http://localhost:8000/blogs', {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(blog)
  })
  .then(()=>{
    console.log('new blog added')
    history.push('/')
  })
}

  return (
    
    <div  className="create">
      
        <form onSubmit={handleSubmit}>
          <label>Blog title: </label>
          <input
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          type="text"
          required/>
          <label>Blog body: </label>
          <textarea
          value={body}
          onChange={(e)=> setBody(e.target.value)}
          required>
          </textarea>
          <label>Blog author: </label>
          <select
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}>
            <option value="Junot Diaz">Junot Diaz</option>
            <option value="Diane">Diane</option>
            
          </select>
          <Button 
          variant="outline-dark">
            Add Blog
          </Button>
          
        </form>
    </div>
   
  )
}
