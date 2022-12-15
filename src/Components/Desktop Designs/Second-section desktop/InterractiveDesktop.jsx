import React from 'react'
import {Box, Typography ,Stack, autocompleteClasses} from '@mui/material'
import vrGuy from '/src/images/desktop/image-interactive.jpg'

function InterractiveDesktop() {
  return (
    <Box position='relative' p={16} >
      


     <Box>
      <img src={vrGuy} style={{maxWidth:'60%', height:'auto', padding: 0, margin: 0}} /> 

   

     </Box>


      <Box 
      sx={{
        width:{
          xs: 100,
          sm:200,
          md: 300,
          lg:400,
          xl: 500
        }
      }}
       position='absolute' 
       textAlign='inherit'   
       right= '305px' 
       top= '16em' 
       style={{
         backgroundColor:'hsl(0, 13%, 94%)'
         }} 
         p={8.7}>


      <Typography variant='h4' textTransform ='uppercase' > The Leader in interractive vr</Typography>

<Typography variant='body2' p={3.4} lineHeight='2em' >Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</Typography>


      </Box>

    </Box>
  )
}

export default InterractiveDesktop
