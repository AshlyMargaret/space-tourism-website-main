import React from 'react'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import './Home.css'

function Home() {
  return (
    <div className='home'>

        <div className="headerSec">
           <Header/>
        </div>

        <section className='homeBaner'>
           <Banner/>
        </section>
        
    </div>
  )
}

export default Home