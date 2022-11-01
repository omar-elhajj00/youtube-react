import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl } from '../utils/constants';
const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  console.log(videoId, snippet);
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* make sure to put these question marks before every dot because that way we're not going to get any errors, it's just going to be undefined */}
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width:358,
            height:180 
          }}
          /> 
          <CardContent 
            sx={{
              backgroundColor: '#1e1e1e',
              height: "106px"
            }}>
              <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography>
                  {snippet?.title.slice(0,60)} {/* slice from 0 to 60 because some titles are going to be a bit too long */}
                </Typography>
              </Link>
          </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard