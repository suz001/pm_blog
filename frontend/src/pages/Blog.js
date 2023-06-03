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
    <div className='card-info'> 
    <div>
    <button className='blog-category'>{output.category}</button>
    </div>

    <div>
    <Link to={`/blog/${output.id}`} className = "blog-title">{output.title} contine je;;p wefwefhwo ef hwgeu</Link>

    </div>

   
    
    <div>
    <h3 className='blog-author'>By {output.author}</h3>
    </div>
    </div>


   
   
   

   
  </div>


    ))}

      </div>
    </div>
  );

  
 }

}
export default Blog;
