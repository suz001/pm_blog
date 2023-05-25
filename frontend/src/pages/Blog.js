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

      </div>


    ))}


    </div>
  )
 }

}
export default Blog;
