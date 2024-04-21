import { Box} from '@mui/material'
import {styled} from '@mui/system'
import React from 'react'
import { useAppBase } from '../context/NavContext';

const BehindBox = styled('div')({
  width: '640px',
  height: '280px',
  background: '#d3d3d3',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
});

const SiteNameBox = styled('div')({
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
  alignItems:'center'
});

const SiteName = styled('h1')({
  width: '100%', 
  textAlign: 'center',
  fontFamily: "Myriad Pro",
  fontWeight: 'normal', 
  letterSpacing: '12px',
})

const MainVisual = () => {

  const APP_BASE = useAppBase()

  return (
    <Box id='homeSection' width={1} height={'600px'} mt={9} sx={{position:'relative'}}>
      <img src={APP_BASE + "imgs/MainVisual.jpg"} alt="MainVisual" style={{objectFit:'cover', position:'absolute', width:'100%', height:'100%'}} />
      <BehindBox>
      <SiteNameBox>
        <SiteName>Masa’s Portfolio Site</SiteName>
      </SiteNameBox>
      </BehindBox>
    </Box>
  )
}

export default MainVisual
