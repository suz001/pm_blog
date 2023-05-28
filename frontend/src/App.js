import axios from 'axios';
import React from 'react';
import Navbar from './components/Navbar';

class App extends React.Component{
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
    <header>Data Generated From Django</header>
    <hr></hr>
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
export default App;
