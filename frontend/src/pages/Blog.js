import axios from 'axios';
import React from 'react';
import Navbar from '../components/Navbar';
import '../css/Bloglist.css';

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

  function imageUrl(){

    document.getElementById('imageBox').src = "http://127.0.0.1:8000/media/blog/test1.jpg";
  
  }
 
}




 render(){
  return (
    <div>
     <Navbar/>
    <div className='blogs'>
    {this.state.details.map((output,id)=>(
      <div className='cards' key={id}>
        <div>
        <img className = "blog-image" src={output.image}/>
        </div>


        <div>
        <h2 className = "blog-title">{output.title}</h2>
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
