import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';

import { SideBar, Videos} from './';
import {fetchFromAPI} from '../utils/fetchFromAPI';



const Feed = () => {
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
        <SideBar />
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
           New <span style={{color: '#f31503'}}>videos</span>
        </Typography>
        <Videos videos={[]}/>
      </Box>
    
    </Stack>    
  )
}

export default Feed