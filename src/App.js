import React, {useState} from 'react';
import BucketList from "./components/BucketList";
import Bucket from "./components/Bucket";

import './App.css';

function App() {
  const [bucket, setBucket] = useState(({
    bucket: [
      {
        name: 'Go to Ukraine',
        id: 122,
        completed: false
      },
      {
        name: 'Find other half',
        id: 123,
        completed: false
      },
      {
        name: 'Live happily ever after',
        id: 124,
        completed: false
      }
    ]
  }));
  
  return (
    console.log(bucket),
    <div className="App">
      <header className="App-header">
        <h1>Bucket List with Hooks</h1>
      </header>
      <BucketList />
      <Bucket />
    </div>
  );
}

export default App;
