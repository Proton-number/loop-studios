import React from 'react'
import {Box, Typography, Toolbar,ImageList, ImageListItem, ImageListItemBar, Stack, Button} from '@mui/material'
import deepEarth from  '/src/images/desktop/image-deep-earth.jpg'
import nightArcade from '/src/images/desktop/image-night-arcade.jpg'
import soccerTeam from   '/src/images/desktop/image-soccer-team.jpg'
import theGrid from '/src/images/desktop/image-grid.jpg'
import fromAbove from '/src/images/desktop/image-from-above.jpg'
import pocket from '/src/images/desktop/image-pocket-borealis.jpg'
import curiosity from '/src/images/desktop/image-curiosity.jpg'
import fishEye from '/src/images/desktop/image-fisheye.jpg'
import {motion} from 'framer-motion'



function Creation() {
  return (
    <Box p={10}>
      

      <Toolbar>

<Typography variant='h4' component='div' style={{textTransform:'uppercase'}}  sx={{flexGrow:3}}>
        our creations
    </Typography>

   <Button 
      component={motion.button}
      whileHover={{color:'white', backgroundColor: 'black', border:'2px solid white'}}
    size='large'
         variant='contained'
         textTransform ='uppercase' 
            style={{width:'20%', color:'black', backgroundColor: 'white', border:'1px solid black' }} disableElevation> see all</Button>
       
    


</Toolbar>

  <Stack>


  <ImageList  style={{gridTemplateColumns: 'repeat(4, 1fr)', padding:'20px', gridGap:'25px'}}>


  <>

<ImageListItem>
<motion.img
               whileHover={{filter:'brightness(70%)'}}
                src={deepEarth} 
                alt='DEEP EARTH'
                />
                  <ImageListItemBar
            title={'DEEP EARTH'}
           style={{
            backgroundColor: 'transparent',
            textAlign:'left',
           }}
          
          />
</ImageListItem>


      
<ImageListItem >
               <motion.img
               whileHover={{filter:'brightness(70%)'}}
                src={nightArcade} 
                alt='NIGHT ARCADE'
                />
                  <ImageListItemBar
            title={'NIGHT ARCADE'}
           style={{backgroundColor: 'transparent', textAlign:'left' }}
          />
             </ImageListItem>

             <ImageListItem>
               <motion.img
               whileHover={{filter:'brightness(70%)'}}
                src={soccerTeam} 
                alt='SOCCER TEAM VR'
                />
                  <ImageListItemBar
            title={'SOCCER TEAM VR'}
           style={{backgroundColor: 'transparent', textAlign:'left' }}
          />
             </ImageListItem>
      
       
             <ImageListItem>
               <motion.img
               whileHover={{filter:'brightness(70%)'}}
                src={theGrid} 
                alt='THE GRID'
                />
                  <ImageListItemBar
            title={'THE GRID'}
           style={{backgroundColor: 'transparent', textAlign:'left' }}
          />
             </ImageListItem>

             <ImageListItem>
               <motion.img
               whileHover={{filter:'brightness(70%)'}}
                src={fromAbove} 
                alt='FROM UP ABOVE VR'
                />
                  <ImageListItemBar
            title={'FROM UP ABOVE VR'}
           style={{backgroundColor: 'transparent', textAlign:'left' }}
          />
             </ImageListItem>
     
             <ImageListItem >
               <motion.img
               whileHover={{filter:'brightness(70%)'}}
                src={pocket} 
                alt='POCKET BOREALIS'
                />
                  <ImageListItemBar
            title={'POCKET BOREALIS'}
           style={{backgroundColor: 'transparent', textAlign:'left' }}
          />
             </ImageListItem>


             <ImageListItem >
               <motion.img
               whileHover={{filter:'brightness(70%)'}}
                src={curiosity} 
                alt='THE CURIOSITY'
                />
                  <ImageListItemBar
            title={'THE CURIOSITY'}
           style={{backgroundColor: 'transparent', textAlign:'left' }}
          />
             </ImageListItem>

             <ImageListItem>
               <motion.img
               whileHover={{filter:'brightness(70%)'}}
                src={fishEye} 
                alt='MAKE IT FISHEYE'
                />
                  <ImageListItemBar
            title={'MAKE IT FISHEYE'}
           style={{backgroundColor: 'transparent', textAlign:'left' }}
          />
             </ImageListItem>





  
  </>


  </ImageList>



  </Stack>



    </Box>
  )
}

export default Creation
