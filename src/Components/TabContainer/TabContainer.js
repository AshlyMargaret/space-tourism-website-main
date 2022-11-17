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
         <Box className='sss' sx={{ width: '100%', bgcolor: 'background.paper' }}>
           <Tabs className='sss' value={value} onChange={handleChange} centered>
           <Link to="/"><Tab className='sss' label="00 HOME" /></Link> 
            <Link to="/destination_page"><Tab label="01 DESTINATION" /></Link> 
            <Tab label="02 CREW" />
            <Tab label="03 TECHNOLOGY" />
          </Tabs>
        </Box>
    </div>
  )
}

export default TabContainer