import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import SectionHeading from './SectionHeader'
import { useAppBase } from '../context/NavContext'

const AboutWrapper = styled('section')(({theme}) => ({
  maxWidth: '1080px',
  padding: '48px 40px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding:'48px 16px',
  }
}));




const About = () => {

  const APP_BASE = useAppBase()

  return (
  <>
    <AboutWrapper id='aboutSection'>
      <SectionHeading FirstWords={'About'} SecondWords={'- 私のことについて -'}/>
    <Box display={'flex'} justifyContent={'space-between'} width={'100%'} sx={{flexDirection:{sm:'row',xs:'column-reverse'} }}>
      <Box sx={{flex:{md:3, xs:2}, pr:5}}>
        <Typography variant='p' component='p' sx={{lineHeight:'35px', letterSpacing:'0.8px', fontSize:{md:'16px' ,xs:'14px'}}}>はじめましてMasaと申します。<br/>プログラミングを通して仕事がしたいと思い、2021年からWeb制作やPythonを使用したデータサイエンスの学習を開始しました。<br/>現在はPythonを主軸にデータ解析、機械学習などの学習を進めています。</Typography>
      </Box>
      <Box sx={{flex:1, width:{sm:1, xs:'80%'}, py:2, px:3, mb:{sm:0, xs:2}, mx:'auto'}}>
        <img src={APP_BASE + "imgs/person.png"} alt="my_photo" style={{width:'100%'}}/>
      </Box>
    </Box>
    </AboutWrapper>
  </>
  )
}

export default About
