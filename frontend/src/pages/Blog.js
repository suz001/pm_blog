import axios from 'axios';
import React from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

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
     <ProductList/>
    {this.state.details.map((output,id)=>(
      <div key={id}>
        <h2>{output.title}</h2>
        <h3>{output.content}</h3>
        <h3>{output.author}</h3>
        <h3>{output.created_at}</h3>
        <h3>{output.updated_at}</h3>
        <h3>{output.category}</h3>
        <img src={output.image}/>
        <a>{id}</a>
        
       
      </div>


    ))}


    </div>
  );

  
 }

}
export default Blog;
