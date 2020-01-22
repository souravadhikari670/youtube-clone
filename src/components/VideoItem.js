import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
const VideoItem = ({video, onVideoSelect}) => {
    return(
        <Grid item xs={12}>
            <Paper style={{display:"flex", slignItems:"center", cursor:"pointer"}} onClick={()=>onVideoSelect(video)}> 
                <img style={{marginRight:"20px"}} alt="thumbnails" src={video.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1"><strong>{video.snippet.title}</strong></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem