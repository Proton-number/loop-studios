import React from 'react'
import {Box, Stack , Typography, ImageList, ImageListItem, ImageListItemBar, Button} from '@mui/material'
import {motion} from 'framer-motion'
import deepEarth from  '/src/images/image-deep-earth.jpg'



function Creations() {
  return (
    <Box textAlign='center' marginBottom='120px'  >
      
     <Typography  variant='h4' textTransform ='uppercase' >Our creations</Typography>


       <Stack>

        <ImageList style={{display:'flex', flexDirection: 'column', padding:'20px', gridGap:'25px'}}>
        
        
             <ImageListItem    >
               <img
                src={deepEarth} 
                alt='DEEP EARTH'
                />
                  <ImageListItemBar
            title={'DEEP EARTH'}
           style={{backgroundColor: 'transparent', textAlign:'left' }}
          />
             </ImageListItem>
      

        </ImageList>

       </Stack>

         <Button
         size='large'
         variant='contained'
         textTransform ='uppercase' 
         style={{width:'50%', color:'black', backgroundColor: 'white', border:'2px solid black' }}
         disableElevation> see all </Button>
       

    </Box>
  )
}

export default Creations



// const itemData = [

//     {
//           img: '/src/images/image-deep-earth.jpg',

//           title:'DEEP EARTH'
//     },

//     {
//         img: '/src/images/image-night-arcade.jpg',

//         title:'NIGHT ARCADE'
//     },

//    {
//     img: '/src/images/image-soccer-team.jpg',

//     title:'SOCCER TEAM VR'
//   },

//   {
//     img: '/src/images/image-grid.jpg',

//     title:'THE GRID'
//   },

//   {
//     img: '/src/images/image-from-above.jpg',

//     title:'FROM UP ABOVE VR'
//   },

//   {
//     img: '/src/images/image-pocket-borealis.jpg',

//     title:'POCKET BOREALIS'
//  },


//   {
//     img: '/src/images/image-curiosity.jpg',

//     title:'THE CURIOSITY'
//   },

//    {

//     img: '/src/images/image-fisheye.jpg',

//     title:'MAKE IT FISHEYE'

// },


// ]