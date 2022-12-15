import React from 'react'
import {Box, Stack , Typography} from '@mui/material'
import facebook from '/src/images/icon-facebook.svg'
import instagram from '/src/images/icon-instagram.svg'
import pinterest from '/src/images/icon-pinterest.svg'
import twitter from '/src/images/icon-twitter.svg'
import {motion} from 'framer-motion'


function DesktopFooter() {
  return (
    <Stack 
    direction='row'
    backgroundColor='hsl(0, 0%, 0%)' 
    color='hsl(0, 0%, 100%)'
    height='4em'
    style={{justifyContent:'space-between'}}
     p={6.4} >
      
     <Box>

     <Typography variant='h5' >loopstudios</Typography>

      <Stack
       direction='row' 
       spacing={3}
       style={{marginTop:'20px'}}
      >

<Typography
      component={motion.h4} 
      whileHover={{textDecoration:'underline', y:-5}}
      transition={{delay: .2 }}
      
       variant='p'
         >
          About
          </Typography>

        <Typography
       variant='p'
       component={motion.h4} 
       whileHover={{textDecoration:'underline', y:-5}}
       transition={{delay: .2 }}
        >
          Careers
          </Typography>

        <Typography
       variant='p'
       component={motion.h4} 
       whileHover={{textDecoration:'underline', y:-5}}
       transition={{delay: .2 }}
        >
          Events
          </Typography>

        <Typography
       variant='p'
       component={motion.h4} 
      whileHover={{textDecoration:'underline', y:-5}}
      transition={{delay: .2 }}
        >
          Products
          </Typography>

        <Typography
       variant='p'
       component={motion.h4} 
       whileHover={{textDecoration:'underline', y:-5}}
       transition={{delay: .2 }}
        >
          Supports
          </Typography>


      </Stack>

     </Box>


      {/* FIRST HALF OF THE FOOTER  */}

     
     <Box>
        
     <Stack
      direction='row' 
      spacing={3}
      // style={{marginLeft:'80px'}}
     >

      <motion.img 
      whileHover={{filter:'brightness(70%)'}}
      src={facebook}
       alt="Facebook logo" 
       style={{width:'30px', 
       height:'30px' }} />

      <motion.img
      whileHover={{filter:'brightness(70%)'}}
      src={twitter}
       alt="Twitter logo" 
       style={{width:'30px',
        height:'30px'}}  />

      <motion.img 
      whileHover={{filter:'brightness(70%)'}}
      src={pinterest}
       alt="Pinterest logo"
        style={{width:'30px',
         height:'30px'}}  />

      <motion.img 
      whileHover={{filter:'brightness(70%)'}}
      src={instagram} 
      alt="Instagram logo"
       style={{width:'30px',
        height:'30px'}}  />

     </Stack>

     <Typography 
       style={{marginTop:'20px'}}
     >
       © 2021 Loopstudios, All rights reserved.  </Typography>

     </Box>



    </Stack>
  )
}

export default DesktopFooter
