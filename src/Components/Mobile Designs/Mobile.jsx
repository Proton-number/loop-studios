import React from 'react'
import Creations from './Creations/Creations'
import Footer from './Footer/Footer'
import Interactive from './Second Section/Interactive'
import Top from './Top/Top'
import './Mobile.css'
import {Box} from '@mui/material'

function Mobile() {
  return (
    <Box id='mobile-view'>
  <Top />
  <Interactive />
  <Creations />
  <Footer />
    </Box>
  )
}

export default Mobile
