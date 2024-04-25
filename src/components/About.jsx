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
        <Typography variant='p' component='p' sx={{lineHeight:'35px', letterSpacing:'0.8px', fontSize:{md:'16px' ,xs:'14px'}}}>
          はじめまして、Masaと申します。<br/>2021年からWeb制作とデータサイエンスの学習を始め、現在はデータサイエンティストを目指してPythonを中心にデータ解析・機械学習などの学習をしています。<br/>
          将来的にはデータサイエンスとWeb開発を組み合わせた分野で活躍したいです。<br/>
          自作アプリも完成させ、今は就職活動中です。<br/>
          新しい技術やデータサイエンスのプロジェクトに積極的に取り組める環境の会社で働きたいと考えています。
        </Typography>
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
