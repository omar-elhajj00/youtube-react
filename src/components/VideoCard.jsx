import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  console.log(videoId, snippet);
  return (
    <Card 
      sx={{
        width: {xs: '100%',sm: '358px', md: '320px'},
        boxShadow: 'none',
        borderRadius: 0 
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* make sure to put these question marks before every dot because that way we're not going to get any errors, it's just going to be undefined */}
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}    
          sx={{
            width:{xs: '100%', sm:'358px', md: '320px'},
            height:180 
          }}
          /> 
          <CardContent 
            sx={{
              backgroundColor: '#1e1e1e',
              height: "106px"
            }}>
              {/* link to video id */}
              <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                  {snippet?.title.slice(0,60) ||demoVideoTitle.slice(0,60)} {/* slice from 0 to 60 because some titles are going to be a bit too long */}
                </Typography>
              </Link>
              {/* link to channel Id */} 
              <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                  {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)} {/* slice from 0 to 60 because some titles are going to be a bit too long */}
                  <CheckCircle 
                    sx={{
                      fontSize: 14,
                      color: 'gray',
                      ml: '5px'
                    }} />
                </Typography>
                
              </Link>
          </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard