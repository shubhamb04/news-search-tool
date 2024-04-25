import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={8}>
          <TextField
            fullWidth
            variant='outlined'
            label='Enter Search Term'
            value={searchTerm}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
