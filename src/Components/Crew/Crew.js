import React from 'react'
import Header from '../Header/Header'
import './Crew.css'
import Crew1 from '../../images/starter-code/assets/crew/image-anousheh-ansari.png'
import Crew2 from '../../images/starter-code/assets/crew/image-douglas-hurley.png'
import Crew3 from '../../images/starter-code/assets/crew/image-mark-shuttleworth.png'
import Crew4 from '../../images/starter-code/assets/crew/image-victor-glover.png'

import Carousel from 'nuka-carousel';

import { nextButtonDisabled, prevButtonDisabled } from 'nuka-carousel/lib/default-controls'



function Crew() {
  return (
    <div className='crew'>
        <div className="crewHeader">
            <Header/>
        </div>
        <div className="crewTitle">
            <h3>02  MEET YOUR CREW</h3>
        </div>
        
        <div className="crewDetails">
           
            <Carousel  defaultControlsConfig={{
    nextButtonText: nextButtonDisabled,
    prevButtonText: prevButtonDisabled,
    pagingDotsStyle: {
      fill: 'white',
      padding: '10px'
    }
  }} >
            <div className="div">
             <div className="crewDesc">
               <h2>FLIGHT ENGINEER</h2>
               <h1>Anousheh Ansari</h1>
               <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
            </div>
            <div className="crewImage">
             <img src={Crew1} />
            </div>
            </div>

            <div className="div">
             <div className="crewDesc">
               <h2>FLIGHT ENGINEER</h2>
               <h1>Douglas Hurley</h1>
               <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            <div className="crewImage">
             <img src={Crew2} />
            </div>
            </div>

            <div className="div">
             <div className="crewDesc">
               <h2>FLIGHT ENGINEER</h2>
               <h1>Mark Shuttleworth</h1>
               <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
            </div>
            <div className="crewImage">
             <img src={Crew3} />
            </div>
            </div>

            <div className="div">
             <div className="crewDesc">
               <h2>FLIGHT ENGINEER</h2>
               <h1>Victor Glover</h1>
               <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
            </div>
            <div className="crewImage">
             <img src={Crew4} />
            </div>
            </div>
            </Carousel>
            
        </div>
 
       
    </div>
  )
}

export default Crew