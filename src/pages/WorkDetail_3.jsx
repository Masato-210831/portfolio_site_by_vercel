import React ,{useEffect} from 'react'
import { List, ListItem, Link } from '@mui/material'
import OtherMainVisual from '../components/OtherMainVisual'
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'
import Footer from '../components/Footer'


const data = {name:"DESIGN FOR SMILE", imgPath:"imgs/portfolio_3.jpg"}
const details = [
  { title: "担当範囲", description: "コーディング" },
  { title: "使用言語", description: "HTML/Sass/Javascript" },
  {
    title: "工夫したこと",
    description: (
      <List sx={{listStyleType:'disc', padding: 0, marginLeft: '20px'}}>
        <ListItem sx={{ display: 'list-item', pl:0, pb:0}} >デザインコンプからサイトを制作したこと</ListItem>
        <ListItem sx={{ display: 'list-item', pl:0, pb:0 }}>
          要素の重なりを各レスポンシブデザインで崩れないように制御したこと
        </ListItem>
        <ListItem sx={{ display: 'list-item', pl:0, pb:0 }}>
          Javascriptを用いて、headerやハンバーガーボタンに動きをつけたこと
        </ListItem>
      </List>
    ),
  },
  {
    title: "URL",
    description: (
      <Link
        href="https://masato-210831.github.io/site-coding_20220304/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://masato-210831.github.io/site-coding_20220304/index.html
      </Link>
    ),
  },
];

const WorkDetail_3 = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header/>
      <OtherMainVisual/>
      <ProductShow data={data} details={details}/>
      <Footer/>
    </div>
  )
}

export default WorkDetail_3
