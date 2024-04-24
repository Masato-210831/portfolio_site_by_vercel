import React ,{useEffect} from 'react'
import { List, ListItem, Link } from '@mui/material'
import OtherMainVisual from '../components/OtherMainVisual'
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'
import Footer from '../components/Footer'





const data = {name:"コーポレートサイト", imgPath:"imgs/portfolio_1.jpeg"}
const details = [
  { title: "担当範囲", description: "コーディング" },
  { title: "使用言語", description: "HTML/Sass/Javascript" },
  {
    title: "工夫したこと",
    description: (
      <List sx={{listStyleType:'disc', padding: 0, marginLeft: '20px'}}>
        <ListItem sx={{ display: 'list-item', pl:0, pb:0 }}>
          メインビデュアルに動画を埋め込んだこと
        </ListItem>
        <ListItem sx={{ display: 'list-item', pl:0, pb:0 }}>
          特定の要素にカーソルを重ねると変化が起きるようにしてこと
        </ListItem>
        <ListItem sx={{ display: 'list-item', pl:0, pb:0 }}>
          Javascriptを用いて、スクロールすると右下に Topに戻るボタンが現れるようにしたこと
        </ListItem>
      </List>
    ),
  },
  {
    title: "URL",
    description: (
      <Link
        href=" https://masato-210831.github.io/corporate_site_220217/"
      >
         https://masato-210831.github.io/corporate_site_220217/
      </Link>
    ),
  },
];

const WorkDetail_1 = () => {

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

export default WorkDetail_1
