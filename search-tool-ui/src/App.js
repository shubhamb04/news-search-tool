import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './SearchBar';

import GroupResultsBySection from './GroupResultsBySection';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`/api/search?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error Fetching search results: ', error);
    }
  };
  return (
    <Container maxWidth='md'>
      <Typography variant='h4' gutterBottom>
        New Search Tool
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {/* <SearchResult results={searchResults} /> */}
      <GroupResultsBySection results={searchResults} />
    </Container>
  );
}

export default App;
