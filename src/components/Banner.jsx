import React from 'react'
import "./style.css"

const Banner = () => {
  return (
    <>
      <section class="showcase">
  <img src="https://images.unsplash.com/photo-1505410603994-c3ac6269711f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Picture" />
  <div class="overlay">
    <h2><span className="Twenty">20%</span><span>Discount</span></h2>
    <h3 className='offer'>
      Stay with us to get the best offers...
    </h3>
  </div>
</section>
    </>
  )
}

export default Banner
