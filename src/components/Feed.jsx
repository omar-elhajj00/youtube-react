import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';

import { SideBar, Videos} from './';
import {fetchFromAPI} from '../utils/fetchFromAPI';



const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  // useEffect is a lifecycle hook in which the code in this function will only run when we change the second parameter 
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)//all the string inside `` are called template string
      .then((data) => {
        console.log(data);
        setVideos(data.items)
      } ) //.then contain what will be result of the promise
       
  },[selectedCategory]);//recall the fetchFromApi function whenerver we change the selected category 


  return (
    <Stack
      sx={{
        flexDirection: {sx: 'column',md:'row' } //on medium devices and larger the flexDirection property is going to set to row 
      }}
    >
      <Box 
        sx={{
          height: {sx: 'auto',md:'92vh'},
          borderRight: '1px solid #3d3d3d',
          px: {sx: 0, md: 2}
        }}  
      >
        <SideBar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1.5,
            color: '#fff'
          }}
          >
          Copy Right 2022 Omar El Hajj
        </Typography>

      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
           {selectedCategory} <span style={{color: '#f31503'}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    
    </Stack>    
  )
}

export default Feed