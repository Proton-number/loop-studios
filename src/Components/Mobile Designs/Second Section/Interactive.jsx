import React from 'react'
import {Box, Typography, Toolbar, IconButton} from '@mui/material'
import vrGuy from '/src/images/mobile/image-interactive.jpg'

function Interactive() {
  return (
    <Box textAlign='center' marginBottom='120px' >

      <img src={vrGuy} alt="a man with a vr headset" style={{height: '236px' , width: '310px', marginBottom: '20px'}}/>
      
   <Typography variant='h4' textTransform ='uppercase' > The Leader in interractive vr</Typography>

   <Typography variant='body2' p={3.4} lineHeight='2em' >Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</Typography>

    </Box>
  )
}

export default Interactive
