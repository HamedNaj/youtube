import React from 'react'
import {Grid, Paper, Typography} from "@material-ui/core";

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={6} style={{diplay: 'flex', alignItems: 'center',justifyContent:'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" style={{width:'100%'}}/>
        <Typography variant={'subtitle1'} style={{padding:'0 10px'}}><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem
