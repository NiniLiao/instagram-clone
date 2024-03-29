import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
    
      <h1>Hello Clever Programmer, Let's build an Instagram Clone with React</h1>
      
      <Post />
      <Post />
      <Post />
    
    </div>
  );
}

export default App;
