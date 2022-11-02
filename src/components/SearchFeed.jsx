import React, {useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import { useParams } from 'react-router-dom';

import { Videos} from './';
import {fetchFromAPI} from '../utils/fetchFromAPI';



const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  // useEffect is a lifecycle hook in which the code in this function will only run when we change the second parameter 
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)//all the string inside `` are called template string
      .then((data) => {
        console.log(data);
        setVideos(data.items)
      } ) //.then contain what will be result of the promise
       
  },[searchTerm]);//recall the fetchFromApi function whenerver we change the search term


  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
            Search Results for: <span style={{color: '#f31503'}}>{searchTerm}</span> Videos
        </Typography>
        <Videos videos={videos}/>
    </Box>  
  )
}

export default SearchFeed