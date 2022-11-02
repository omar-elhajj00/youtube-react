import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  //how do we get access to that id from inside of our code, that's exactly what we use the useParams for
  const { id } = useParams();

  //useEffect is going to render as soon as our component opens
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    //instead of channel we want to set the search and then channel id
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));

  }, [id]); //useEffect will rerender whenever the id changes 


  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,255,255,1) 0%, rgba(255,0,245,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'

        }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>

      <Box display="flex" p="2">
          <Box sx={{ mr: { sm: '100px'}}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail 