import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);

  //how do we get access to that id from inside of our code, that's exactly what we use the useParams for
  const { id } = useParams();

  //useEffect is going to render as soon as our component opens
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet$id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

  }, [id]); //useEffect will rerender whenever the id changes 


  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail 