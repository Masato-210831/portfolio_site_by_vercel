import React ,{useEffect} from 'react'
import { List, ListItem, Link } from '@mui/material'
import OtherMainVisual from '../components/OtherMainVisual'
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'
import Footer from '../components/Footer'


const data = {name:"スニーカーサイト", imgPath:"imgs/portfolio_2.jpeg"}
const details = [
  { title: "担当範囲", description: "コーディング" },
  { title: "使用言語", description: "HTML/Sass/Javascript" },
  {
    title: "工夫したこと",
    description: (
      <List sx={{listStyleType:'disc', padding: 0, marginLeft: '20px'}}>
        <ListItem sx={{ display: 'list-item', pl:0, pb:0 }}>
          三種類のスニーカー主体の動画をランダムで表示するようにしたこと
        </ListItem>
        <ListItem sx={{ display: 'list-item', pl:0, pb:0 }}>
          Javascriptを用いて、<br/>スライダーや画像フェードを適用したこと
        </ListItem>
      </List>
    ),
  },
  {
    title: "URL",
    description: (
      <Link
        href="https://masato-210831.github.io/media_site_220223/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://masato-210831.github.io/media_site_220223/
      </Link>
    ),
  },
];

const WorkDetail_2 = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <Header/>
      <OtherMainVisual/>
      <ProductShow data={data} details={details}/>
      <Footer/>
    </>
  )
}

export default WorkDetail_2
