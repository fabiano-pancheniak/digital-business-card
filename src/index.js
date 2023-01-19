import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import profileImage from './images/profile-image.png';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'))

function App(){
  return(
    <div className='container'>
       <img src={profileImage} alt="profile image" />
       <Main />
    </div>
  )
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
