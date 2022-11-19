import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './TabContainer.css'
import { Link } from 'react-router-dom';
 


function TabContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    }
  return (
    <div className='tabContainer'>
         <Box className='sss' sx={{ width: '100%' }}>
           <Tabs className='sss' value={value} onChange={handleChange} centered>
           <Link to="/"><Tab className='sss' label="00 HOME" sx={{color:'white'}} /></Link> 
            <Link to="/destination_page"><Tab label="01 DESTINATION" sx={{color:'white'}} /></Link> 
            <Link to="/crew_page"><Tab label="02 CREW" sx={{color:'white'}}/></Link> 
            <Link to="/technology_page"><Tab label="03 TECHNOLOGY" sx={{color:'white'}} /></Link>
          </Tabs>
        </Box>
    </div>
  )
}

export default TabContainer