import React from 'react'
import DesktopTop from './TopDesktop/DesktopTop'
import './Desktop.css'
import InterractiveDesktop from './Second-section desktop/InterractiveDesktop'
import Creation from './DesktopCreations/Creation'
import DesktopFooter from './Desktop Footer/DesktopFooter'
import {Box} from '@mui/material'


function Desktop() {
  return (
    <Box id='desktop-view'>
      <DesktopTop />
      <InterractiveDesktop />
       <Creation />
       <DesktopFooter />
    </Box>
  )
}

export default Desktop
