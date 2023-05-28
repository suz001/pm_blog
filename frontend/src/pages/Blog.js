import axios from 'axios';
import React from 'react';
import Navbar from '../components/Navbar';
import '../css/Bloglist.css';
import {Link} from "react-router-dom";

class Blog extends React.Component{
  state = { details:[],}
  componentDidMount(){

  let data;
  axios.get('http://localhost:8000')
  .then(res => {
    data = res.data;
    this.setState({
      details: data
    });
  })
  .catch(err => {})
}




 render(){
  return (
    <div>
     <Navbar/>
    <div className='blogs'>
    {this.state.details.map((output,id)=>(
    
    <div className='cards' key={id}>
    <div>
    <img className = "blog-image" src={output.image} alt=""/>

    </div>


    <div>
    <Link to={'/blog/'+id} className = "blog-title">{output.title}</Link>
   <a>{}</a>
    </div>

    <div>
    <h3 className='blog-content'>{output.content}</h3>
    </div>
    
    <div>
    <h3 className='blog-author'>{output.author}</h3>
    </div>
    
    <div>
    <h3 className='blog-create'>{output.created_at}</h3>
    </div>
    
    <div>
    <h3 className='blog-update'>{output.updated_at}</h3>
    </div>

    <div>
    <h3 className='blog-category'>{output.category}</h3>
    </div>
   
   

   
  </div>


    ))}

      </div>
    </div>
  );

  
 }

}
export default Blog;
