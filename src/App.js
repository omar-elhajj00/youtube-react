import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';

const App = () => (
    <BrowserRouter>
        <Box sx={{background:'#000'}}>
            Navbar
            {/* Routes is a built-in component by react router dom */}
            <Routes>
                <Route path="/" exact element={<Feed />} />
                {/* if we go to /video/123432 means we're going to go to a specific video page */}
                <Route path="/video/:id" element={<VideoDetail />} />
                {/* we can go to specific channel through /channel/1231  */}
                <Route path="/channel/:id" element={<ChannelDetail />} />
                {/* go to specific searchterm  */}
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
    )


export default App;