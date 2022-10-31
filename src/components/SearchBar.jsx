import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';

import {Search} from '@mui/icons-material';

const SearchBar = () => {
  return (
    // paper is a simple div has a white background and some elevation ,it appears like it's floating on the top
    <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: {sm: 5} //margin right only for small devices set to 5 ,this is phenomenal 
        }}
    >
        <input 
            className="search-bar"
            type="text" 
            value=""
            onChange={() => {}}
        />
        <IconButton 
            type="submit"
            sx={{
                p: '10px',
                color: 'red',
            }}
        >
            <Search />
        </IconButton>
        

    </Paper>
  )
}

export default SearchBar