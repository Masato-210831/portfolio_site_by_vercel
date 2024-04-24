import { Box, Typography} from '@mui/material'
import {styled} from '@mui/system'
import React from 'react'


const SiteName = styled('h1')(({theme}) => ({
  width: '100%', 
  textAlign: 'center',
  fontFamily: "Myriad Pro",
  fontWeight: 'normal', 
  letterSpacing: '12px',
  fontSize:'64px',
  margin:0,
  [theme.breakpoints.down('md')]: {
   fontSize:'36px'
  },
}))




const OtherMainVisual = () => {
  return (
    <Box width={1} height={'300px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={9} sx={{ bgcolor:'#F2F2F2'}}>
        <SiteName>Work Details</SiteName>
        <Typography sx={{fontFamily: "Myriad Pro", fontSize:'24px', letterSpacing:'12px'}} > -作品の詳細-</Typography>
    </Box>
  )
}

export default OtherMainVisual
