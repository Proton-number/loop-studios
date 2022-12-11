import React from 'react'
import {Box, Typography ,Stack} from '@mui/material'
import vrGuy from '/src/images/desktop/image-interactive.jpg'


function InterractiveDesktop() {
  return (
    <Box position='relative' p={16} >
      


     <Box>
      <img src={vrGuy} style={{width:'60%'}} />
     </Box>


      <Box position='absolute' textAlign='inherit'   right= '305px' top= '16em' style={{width:'24%', backgroundColor:'hsl(0, 13%, 94%)'}} p={8.7}>


      <Typography variant='h4' textTransform ='uppercase' > The Leader in interractive vr</Typography>

<Typography variant='body2' p={3.4} lineHeight='2em' >Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</Typography>


      </Box>

    </Box>
  )
}

export default InterractiveDesktop
