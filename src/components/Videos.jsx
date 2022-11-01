import React from 'react';
import {Stack , Box} from "@mui/material";

import {VideoCard, ChannelCard} from './';

const Videos = ({videos}) => {
  return (
    
    <Stack 
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      >
        {videos.map((item, idx) => (
          <Box key={idx}>
            {/* if the item has an id and then the id points to the video id, that means that it is a video so we can say and and and then we want to render a videocard component */}
            {item.id.videoId && <VideoCard video={item} /> }
            {/* if the item has an id and then id points to channel id ,  it means it is a channel */}
            {item.id.channelId && <ChannelCard channelDetail={item} /> }


          </Box>
        )

        )}
    </Stack>
  )
}

export default Videos