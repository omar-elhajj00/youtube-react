import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { ImportantDevices } from '@mui/icons-material';
import { Typography, Stack, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {Video} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const {id} =useParams();

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=> )
  },[id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer />

          </Box>
        </Box>
      </Stack>      
    </Box>
  )
}

export default VideoDetail