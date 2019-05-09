import React from 'react';

import PostList from '../src/components/PostContainer/PostList';
import SearchBar from '../src/components/SearchBar/SearchBar';


function App() {
  return (
    <div>
      <SearchBar />
      <PostList />
    </div>
  );
}

export default App;
