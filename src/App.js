import React, {useState, useEffect} from 'react'
import {Grid} from "@material-ui/core";

import youtube from './api/youtube'

import {SearchBar, VideoList, VideoDetail} from './components/index'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const lastSearchTerm = localStorage.getItem('LAST_SEARCH_YOUTUBE')
  useEffect(() => {
    onFormSubmit(lastSearchTerm)
  }, [])

  const onFormSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        q: searchTerm
      }
    })
    setSelectedVideo(response.data.items[0])
    setVideos(response.data.items)
    localStorage.setItem('LAST_SEARCH_YOUTUBE', searchTerm)
  }
  const onVideoSelect = (item) => {
    setSelectedVideo(item)
  }
  return (
    <Grid container spacing={5} justifyContent={'center'} style={{height:'100vh', width:'100%'}}>
      <Grid item xs={12}>
        <Grid container spacing={10} >
          <Grid item xs={12} style={{height:'15vh'}}>
            <SearchBar onFormSubmit={onFormSubmit}/>
          </Grid>
          <Grid item xs={8} style={{height:'85vh'}}>
            <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4} style={{height:'80vh',overflowY:'scroll' , paddingTop:'0px', marginTop:'40px'}}>
            <VideoList videos={videos.filter(video => {return video.id.videoId !== selectedVideo.id.videoId})} onVideoSelect={onVideoSelect}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
