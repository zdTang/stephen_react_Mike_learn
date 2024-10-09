import SearchBar from './components/SearchBar';
import SearchImages from './api';
import ImageList from './components/ImageList';
import { useState } from 'react';
function App() {
  const [images,setImages] = useState([]);
  const handleSubmit = async (term)=>{
    console.log('Do a search with',term);
    const result = await SearchImages(term);
    console.log(result.data.results);
    setImages(result.data.results);
  }
  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList ImageList={images}/>
    </div>
  );
}

export default App;
