import React, {useState} from 'react'
import './Top.css'
import {Box, Typography, Toolbar, IconButton, Drawer, Stack} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Top() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  return (
    <Box id='top-container' position='relative'  color='hsl(0, 0%, 100%)' >
   

    <Toolbar >

    <Typography variant='h4' component='div'  sx={{flexGrow:1}}>
            loopstudios
        </Typography>

    <IconButton size='small' edge='start' color='inherit' aria-label='logo' onClick={()=> setisDrawerOpen(true)} >
      <MenuIcon />
        </IconButton>


    </Toolbar>

    {/* DRAWER FOR SIDE MENU */}

    <Drawer anchor='left' open={isDrawerOpen} onClose={() => setisDrawerOpen(false)} >

<Box  width='300px' textAlign='center' role='presentation'>

<Toolbar>

<Typography variant='h4' component='div' sx={{flexGrow:1}}>
  loopstudios
</Typography>

<IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={()=> setisDrawerOpen(false)} >
      <CloseIcon   />
        </IconButton>

</Toolbar>

<Stack  style={{textTransform:'uppercase', textAlign:'left', padding:'20px' }}>
    <Typography variant='h6' >About</Typography>
    <Typography  variant='h6' >Career</Typography>
    <Typography variant='h6' >Events</Typography>
    <Typography variant='h6' >Products</Typography>
    <Typography variant='h6' >Support</Typography>
   </Stack>

  
</Box>

</Drawer>

{/* END OF DRAWER */}

    <Box  p={1.8} position= 'absolute' left= '0' right= '0' top= '10em' >
    <Box component='div' border='2px solid white' style={{overflow:'hidden'}} p={3.2} >
      
      <Typography variant='h3' fontSize='43px'  textTransform ='uppercase'  >
        immersive experiences that deliver
      </Typography>

    </Box>
    </Box>


    </Box>
  )
}

export default Top
