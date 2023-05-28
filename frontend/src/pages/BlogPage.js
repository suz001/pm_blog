import {useParams} from "react-router-dom"


import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import axios from 'axios';

class BlogPage extends Component{
  render(){
    console.log(this.props)
    return(
      <div>
      <Navbar/>
     
      <div>{}</div>
      </div>
    )
  }
}

export default BlogPage;