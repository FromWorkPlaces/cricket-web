import { useState } from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import MUXPlayer from './components/MUXPlayer';
import FirebaseTesting from './components/FirebaseTesting';

function App() {

  const [videoId, setVideoId] = useState(null)
  
  return (
    <div className="App">
      <MUXPlayer/>
      <FirebaseTesting/>
      
      {/* <div>
        {videoId && <VideoPlayer videoId={videoId}/>}
      </div>
      <button onClick={() => setVideoId('diablo')}>Play Diablo</button>
      <button onClick={() => setVideoId('sekiro')}>Play Sekiro</button>
      <button onClick={() => setVideoId('witcher')}>Play Witcher</button>
      <button onClick={() => setVideoId('eldenring')}>Play Elden Ring</button> */}
    </div>
  );
}

export default App;
