import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';
import { Navbar, VideoDetail, ChannelDetail, Feed, SearchFeed } from './components';

const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <Navbar />
            {/* Routes in built in component by react outer dom */}
            <Routes>
                <Route path="/" exact element={<Feed />} />
                {/* if we go to /video and then some random sequence of numbers or letter /21f32 , we're going to go to specific video page, and we can render a new element <VideoDetail /> */}
                <Route path="/video/:id" element={<VideoDetail />}/>
                {/* if we're going to go to specific channel */}
                <Route path="/channel/:id" element={<ChannelDetail />} />
                {/* if we're going to have a specific search term */}
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App