import React ,{useEffect} from 'react'
import { List, ListItem, Link, Box } from '@mui/material'
import OtherMainVisual from '../components/OtherMainVisual'
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'
import Footer from '../components/Footer'


const data = {name:"ポートフォリオサイト", imgPath:"imgs/portfolio_4.jpg"}

// 担当
const acts = ['デザインカンプの作成', 'コーディング']
const actsList = (
<List sx={{ p: 0}}>
  {acts.map(act => (
    <ListItem key={act} sx={{ display: 'list-item', pl:0, pb:0 }}>
      {act}
    </ListItem>
  ))}
</List>
);

// 工夫したこと
const goodTextList = [
  '幾何学模様とメインカラーのオレンジを意識したこと',
  'Fontや画像がサイトのイメージに合うように用意したと',
  'Figmaでデザインカンプを作成したこと',
  'すべてのページがレスポンシブ対応したこと',
  'タブレット以下で表示するハンバガーボタンとDrawerもサイトのイメージに合うように作成したこと',
  'Reactの関数コンポーネント、状態管理の便利さに気づいてReactで就活用に改修したこと'
]


// URL
const siteUrl = 
[
  {Detail:'↓旧サイト（HTML/Sass/Javascript）' ,url:'https://masato-210831.github.io/my_portfolio_site/index.html'}, 
  {Detail:'↓現在のサイト（React/Vite）' ,url:'https://portfolio-site-by-vercel.vercel.app/'}
];

const urlList = (
  <List sx={{padding: 0}}>
  {siteUrl.map((url) => (
    <Box key={url.Detail}>
      <ListItem sx={{ display: 'list-item', pl:0, pb:0}}>
        {url.Detail}
      </ListItem>
      <Link href={url.url}>
        {url.url}
      </Link>
    </Box>
  ))}
</List>
);



const details = [
  { title: "担当範囲", description: actsList },
  { title: "使用技術", description: ["HTML/Sass/Javascript/Figma/WordPress/React/Vite"] },
  {
    title: "工夫したこと",
    description: (
      <List sx={{listStyleType:'disc', padding: 0, marginLeft: '20px'}}>
        {goodTextList.map(text => (
          <ListItem key={text} sx={{ display: 'list-item', pl:0, pb:0}} >
            {text}
        </ListItem>
        ))}
      </List>
    ),
  },
  {
    title: "URL",
    description: urlList,
  },
];

const WorkDetail_4 = () => {

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

export default WorkDetail_4
