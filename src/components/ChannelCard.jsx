import React from 'react';
import {Box, CardContent, CardMedia, Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';
const ChannelCard = ({channelDetail}) => (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',

      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      
      </Link>ChannelCard</Box>
  )


export default ChannelCard