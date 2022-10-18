import React from 'react'
import {Box, Stack , Typography} from '@mui/material'
import facebook from '/src/images/icon-facebook.svg'
import instagram from '/src/images/icon-instagram.svg'
import pinterest from '/src/images/icon-pinterest.svg'
import twitter from '/src/images/icon-twitter.svg'
import {motion} from 'framer-motion'

const textVariants = {
hover:{
  scale: 1.2
}
}

const logoVariants ={
 

  initial:{
     opacity: .8
  },

  logohover:{
    scale: 1.1,
    opacity: 1
  }

}


function Footer() {
  return (
    <Box textAlign='center' p={4} backgroundColor='hsl(0, 0%, 0%)' color='hsl(0, 0%, 100%)' >
    
    <Typography variant='h4'>loopstudios</Typography>
      
      <Stack spacing={3.4} style={{marginTop:'30px'}}>

        <Typography
         component={motion.p} 
         variants={textVariants}
         whileHover='hover'
         >
          About
          </Typography>

        <Typography
        component={motion.p} 
        variants={textVariants}
        whileHover='hover'
        >
          Careers
          </Typography>

        <Typography
        component={motion.p} 
        variants={textVariants}
        whileHover='hover'
        >
          Events
          </Typography>

        <Typography
        component={motion.p} 
        variants={textVariants}
        whileHover='hover'
        >
          Products
          </Typography>

        <Typography
        component={motion.p} 
        variants={textVariants}
        whileHover='hover'
        >
          Supports
          </Typography>

      </Stack>
     
     <Stack
      direction='row' 
      spacing={3}
       style={{justifyContent:'center', 
       alignItems:'center',
        marginTop:'30px',
         marginBottom:'30px'}} >

      <motion.img 
      variants={logoVariants}
      initial='initial'
      whileHover='logohover'
      src={facebook}
       alt="Facebook logo" 
       style={{width:'30px', 
       height:'30px' }} />

      <motion.img 
       variants={logoVariants}
       initial='initial'
       whileHover='logohover'
      src={twitter}
       alt="Twitter logo" 
       style={{width:'30px',
        height:'30px'}}  />

      <motion.img 
       variants={logoVariants}
       initial='initial'
       whileHover='logohover'
      src={pinterest}
       alt="Pinterest logo"
        style={{width:'30px',
         height:'30px'}}  />

      <motion.img 
       variants={logoVariants}
       initial='initial'
       whileHover='logohover'
      src={instagram} 
      alt="Instagram logo"
       style={{width:'30px',
        height:'30px'}}  />

     </Stack>

     <Typography> © 2021 Loopstudios, All rights reserved.  </Typography>

    </Box>
  )
}

export default Footer
