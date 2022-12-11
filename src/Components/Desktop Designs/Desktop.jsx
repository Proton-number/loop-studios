import React from 'react'
import DesktopTop from './TopDesktop/DesktopTop'
import './Desktop.css'
import InterractiveDesktop from './Second-section desktop/InterractiveDesktop'
import Creation from './DesktopCreations/Creation'
import DesktopFooter from './Desktop Footer/DesktopFooter'

function Desktop() {
  return (
    <>
      <DesktopTop />
      <InterractiveDesktop />
       <Creation />
       <DesktopFooter />
    </>
  )
}

export default Desktop
