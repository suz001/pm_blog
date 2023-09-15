import React from 'react'
import Navbar from '../components/Navbar';


function Home() {

  return (
    <div data-testid="home1">
      <Navbar/>

      <section className='homesection'>
        <h1 className='scroll_0'> Hey everyone, welcome to PurpleMelon!</h1>
     
        </section>
        


      <section className='homesection'>
      <p className='scroll_1'> 
        PurpleMelon is a blogging platform discussing all things about
        algorithms, data analysis, and mathematical concepts.
       
      <br></br>
      We aim to procide you with a wealth of knowledge in these interconnected fields.
      </p>
      </section>

      <section className='homesection'>
      <div className='scroll_2'>
      <div className="playful" aria-label="Wash your hands">
      <span aria-hidden="true">L</span>
       <span aria-hidden="true">e</span>
      <span aria-hidden="true">t</span>
      <span aria-hidden="true">'</span>
      <span aria-hidden="true">s</span>
      <span aria-hidden="true"> </span>
      <span aria-hidden="true">S</span>
      <span aria-hidden="true">t</span>
      <span aria-hidden="true">a</span>
      <span aria-hidden="true">r</span>
      <span aria-hidden="true">t</span>
      <span aria-hidden="true">!</span>

</div>
</div>
</section>
        </div>
       
  )
}

export default Home