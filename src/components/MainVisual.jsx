import { Box, styled, useMediaQuery, useTheme } from '@mui/material'
// import {styled} from '@mui/system'
import React from 'react'
import { useAppBase } from '../context/NavContext';

const BehindBox = styled('div')(({theme}) => ({
  width: '640px',
  height: '280px',
  background: '#d3d3d3',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% - 32px)',
  }
}));

const SiteNameBox = styled('div')(({theme}) => ({
  width: '616px',
  height: '258px', 
  background:' #fff',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% - 24px)',
  }
}));

const SiteName = styled('h1')(({theme}) => ({
  width: '100%', 
  textAlign: 'center',
  fontFamily: "Myriad Pro",
  fontWeight: 'normal', 
  letterSpacing: '12px',
  [theme.breakpoints.down('md')]: {
    lineHeight:'64px'
  },
  [theme.breakpoints.down('sm')]: {
    lineHeight:'50px',
    fontSize:'22px',
  }
}))

const MainVisual = () => {
  const APP_BASE = useAppBase()

  
  const theme = useTheme()
  const smallResponse = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box id='homeSection' width={1} height={'600px'} mt={{md:9, xs:7}} sx={{position:'relative'}}>
      <img src={APP_BASE + "imgs/MainVisual.jpg"} alt="MainVisual" style={{objectFit:'cover', position:'absolute', width:'100%', height:'100%'}} />
      <BehindBox>
      <SiteNameBox>
        <SiteName>{smallResponse ?
        (<>Masa’s <br/> Portfolio Site</>) :
        "Masa’s Portfolio Site"}</SiteName>
      </SiteNameBox>
      </BehindBox>
    </Box>
  )
}

export default MainVisual
