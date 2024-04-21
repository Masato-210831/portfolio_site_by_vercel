import React ,{useEffect} from 'react'
import { List, ListItem, Link } from '@mui/material'
import OtherHeader from '../components/OtherHeader'
import OtherMainVisual from '../components/OtherMainVisual'
import ProductShow from '../components/ProductShow'
import OtherFooter from '../components/OtherFooter'


const data = {name:"初代ポートフォリオサイト", imgPath:"imgs/portfolio_4.jpg"}

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
  'Figmaでデザインカンプを作成したこと',
  '幾何学模様とメインカラーのオレンジを意識したこと',
]




const details = [
  { title: "担当範囲", description: actsList },
  { title: "使用技術", description: "HTML/Sass/Javascript/Figma/WordPress" },
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
    description: (
      <Link
        href="https://masato-210831.github.io/my_portfolio_site/index.html"
      >
        https://masato-210831.github.io/my_portfolio_site/index.html
      </Link>
    ),
  },
];

const WorkDetail_4 = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <OtherHeader/>
      <OtherMainVisual/>
      <ProductShow data={data} details={details}/>
      <OtherFooter/>
    </div>
  )
}

export default WorkDetail_4
