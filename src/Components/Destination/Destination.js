import React from 'react'
import Header from '../Header/Header'
import './Destination.css'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useState} from 'react'


function Destination() {

 
 
   const destinations = [
      {
        name: "Moon",
        images: require("../../images/starter-code/assets/destination/image-moon.png"),
        // {
          // "png": "../../images/starter-code/assets/destination/image-moon.png",
          // "webp": "../../images/starter-code/assets/destination/image-moon.webp"
          
        // },
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days"
      },
      {
        name: "Mars",
         images:require("../../images/starter-code/assets/destination/image-mars.png")
        //  {
        //   "png": "./assets/destination/image-mars.png",
        //   "webp": "./assets/destination/image-mars.webp"
        // }
        ,
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months"
      },
      {
        name: "Europa",
        images: require("../../images/starter-code/assets/destination/image-europa.png")
        // {
        //   "png": "./assets/destination/image-europa.png",
        //   "webp": "./assets/destination/image-europa.webp"
        // }
        ,
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years"
      },
      {
        name: "Titan",
        images: require("../../images/starter-code/assets/destination/image-titan.png")
        // {
        //   "png": "./assets/destination/image-titan.png",
        //   "webp": "./assets/destination/image-titan.webp"
        // }
        ,
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years"
      }
    ]

    const [state, setstate] = useState(destinations[0])

    const handleSubmit = (e)=>{
         const destinationName = e.target.name
         console.log("destinationName",destinationName);
         destinations.filter((object)=>{
         if(object.name === destinationName){
          console.log("objectName",object);
          setstate(object)
          return state
         }
         return null

         }
         )
    }

  return (
    <div className='destination'>
      <div className="destinationHeader">
        <Header/>
      </div>
      <div className="destinationBanner">
        <div className="leftDestination">
           <div className="destinatonTitle">
            <h3>01 PICK YOUR DESTINATION</h3>
           </div>
           <div className="destinationImg">
            <img  src={state.images} alt="Moon" />
           </div>
        </div>
        <div className="rightDestination">
          <div className="rightDestinationAlign">
            <div className="destinationTab">
            <Box className='sss' sx={{ width: '100%'  }}>
              <Tabs className='sss' onClick = {handleSubmit} centered>
               <Tab className='sss' label="MOON" name="Moon" sx={{color:'white'}}/>
               <Tab label="MARS" name="Mars" sx={{color:'white'}} />
               <Tab label="EUROPA" name="Europa"  sx={{color:'white'}}/>
               <Tab label="TITAN" name="Titan"  sx={{color:'white'}} />
             </Tabs>
            </Box>
            {/* <a onClick={handleSubmit} href="#" name="Moon" >Moon</a>
            <a onClick={handleSubmit} href="#" name="Mars">Mars</a>
            <a onClick={handleSubmit} href="#" name="Europa">Europa</a>
            <a onClick={handleSubmit} href="#" name="TITAN">TITAN</a> */}
            </div>
            <div className="destinationHeading">
            <h1>{state.name}</h1>
            </div>
            <div className="destinationPara">
            <p>{state.description}</p>
            </div>
            <div className="destinationDetails">
            <div className="destinationDistance">
              <h3>AVG.DISTANCE</h3>
              <h1>{state.distance}</h1>
            </div>
            <div className="destinationTime">
              <h3>EST.TRAVEL TIME</h3>
              <h1>{state.travel}</h1>
            </div>
            </div>            
        </div>
      </div>
      </div>

    </div>
  )
}

export default Destination