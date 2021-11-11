import React from 'react'
import {Grid} from "@material-ui/core";

import VideoItem from '../VideoItem'

const VideoList = ({videos,onVideoSelect}) => {
  return (
    <Grid container spacing={5}>
    {
      videos.map((video,index) => (
          <VideoItem key={index} video={video} onVideoSelect={onVideoSelect}/>
        )
      )
    }
    </Grid>
  )
}

export default VideoList
