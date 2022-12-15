import React from 'react'
import './DesktopTop.css'
import {Box, Typography, Toolbar} from '@mui/material'
import {motion} from 'framer-motion'


function DesktopTop() {
  return (
    <Box id='top-desktop' position='relative'  color='hsl(0, 0%, 100%)' p={3.5} >
    

    <Toolbar>

    <Typography 
    variant='h4' 
    component='h2' 
    className='hello'
     sx={{flexGrow:3}}>
            loopstudios
        </Typography>

        <Typography 
        component={motion.h2} 
        whileHover={{textDecoration:'underline', y:-5}}
        transition={{delay: .3 }}
        variant='p'   
        sx={{flexGrow:.4}}>
            About
        </Typography>

        <Typography 
        component={motion.h2} 
        whileHover={{textDecoration:'underline', y:-5}}
        transition={{delay: .3 }}
        variant='p'   
        sx={{flexGrow:0.4}}>
            Careers
        </Typography>

        <Typography 
        component={motion.h2} 
        whileHover={{textDecoration:'underline', y:-5}}
        transition={{delay: .3 }}
        variant='p'   
          sx={{flexGrow:.4}}>
            Events
        </Typography>

        <Typography 
        component={motion.h2} 
        whileHover={{textDecoration:'underline', y:-5}} 
        transition={{delay: .3 }}
        variant='p'     
         sx={{flexGrow:.4}}>
            Products
        </Typography>

        <Typography 
        component={motion.h2} 
        whileHover={{textDecoration:'underline', y:-5}} 
        transition={{delay: .3 }}
        variant='p'    
         sx={{flexGrow:.4}}>
          Support
        </Typography>


    </Toolbar>


    <Box  p={3.8} position= 'absolute' left= '0' right= '0' top= '8em' style={{width:'33em'}}>
    <Box component='div' border='2px solid white' style={{overflow:'hidden'}} p={3.2} >
      
      <Typography variant='h3' fontSize='43px'  textTransform ='uppercase'  >
        immersive experiences that deliver
      </Typography>

    </Box>
    </Box>



    </Box>
  )
}

export default DesktopTop
