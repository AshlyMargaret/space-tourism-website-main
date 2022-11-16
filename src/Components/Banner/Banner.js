import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
          <div className="leftSide">
            <div className="leftSideDesc">
            <h3>SO,YOU WANT TO TRAVEL TO</h3>
            <h1>SPACE</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>           
          </div>
          <div className="rightSide">
             <div className="explore">
               <h2>EXPLORE</h2>
             </div>
          </div>          
    </div>
  )
}

export default Banner