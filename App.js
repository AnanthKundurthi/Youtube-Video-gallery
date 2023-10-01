import React from 'react';
import './videoGallery.css';
import VideoGallery from './videoGallery';

function App() {
  return (
    <div className="App" >
      <div className="channel-name-header">
      <img className="main-logo" src='https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj' />
      <span><a className='main-channel-name' href='https://www.youtube.com/@sharonprardhanamandhiram' target='blank'>Sharon Prardhana Mandhiram </a></span>
      </div>
      <p className='Channel-description'>Praise The Lord. Welcome Everyone to SHARON PRARDHANA MANDHIRAM (Pothureddypalli) Official YouTube channel. Dear viewers watch Bro.Kanaka Chari Powerful Worship Songs, Spiritual growth and Life changing Messages preaching in Sunday Services, Gospel Crusades and in everyday Live programs.</p>
      <div className='youtube-tags'>
        <a href='home'>Home</a>
        <a href='videos'>Videos</a>
        <a href='live'>Live</a>
        <a href='shorts'>Shorts</a>
        <a href='playlists'>Playlists</a>
        <a href='community'>Community</a>
        <a href='channels'>Channels</a>
        <a href='about'>About</a>
      </div>

      <VideoGallery />
    </div>
  );
}

export default App;
