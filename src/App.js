import { useState } from 'react';
import './App.css';



function App() {


  let [likes, setLikes] = useState(0);
  
  function updateLikes(){
    setLikes(likes +1);
  }
  
  return (
    <>
  
    
  <button onClick={updateLikes} type="buttton">{`${likes} ${(likes === 1) ? 'Like': 'Likes'}`}</button>
  
      </>
  );
}

export default App;
