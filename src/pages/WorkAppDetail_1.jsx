import React ,{useEffect} from 'react'
import { List, ListItem, Link, Typography, Box } from '@mui/material'
import OtherMainVisual from '../components/OtherMainVisual'
import ProductShow from '../components/ProductShow'
import Header from '../components/Header'
import Footer from '../components/Footer'


// アプリの名前、画像
const data = {name:"未押印検知アプリ", imgPath:"./imgs/webapp_1.jpeg"}

// 担当
const acts = ['アノテーション付き学習データの作成', 'モデルの学習', 'フロントエンドの構築', 'バックエンドの構築', 'GCPへのデプロイ']
const actsList = (
<List sx={{ p: 0}}>
  {acts.map(act => (
    <ListItem key={act} sx={{ display: 'list-item', pl:0, pb:0 }}>
      {act}
    </ListItem>
  ))}
</List>
);

// 使用技術
const techniques = [
  {object:'バックエンド' ,skills:'Poetry/Python/FastAPI'}, 
  {object:'フロントエンド' ,skills:'React/Vite/Material-UI'},
  {object:'機械学習関連',skills:'YOLO/labelImage/ONNX'},
  {object:'環境構築',skills:'Docker/Firebase/GCP(Cloud Run)'}
];
const techList = (
  <List sx={{padding: 0}}>
  {techniques.map((tech) => (
    <Box key={tech.object}>
      <ListItem sx={{ display: 'list-item', pl:0, pb:0}}>
        {tech.object}
      </ListItem>
      <Typography sx={{mt:0.5, pl:2, pb:0.5, fontSize:14}}>
        {tech.skills}
      </Typography>
    </Box>
  ))}
</List>
);

const goodTextList = [
  '学習させたYOLOモデルをONNXに変換したので、前処理・後処理を自作したこと',
  '画像ファイルだけでなくPDFファイルも検出可能にしたこと',
  'なるべく無料枠で済むようにGCPにデプロイしたこと'
]


const details = [
  { title: "担当範囲", description: actsList },
  { title: "使用技術", description: techList },
  {
    title: "工夫したこと",
    description: (
      <List sx={{listStyleType:'disc', padding: 0, marginLeft: '20px'}}>
        {goodTextList.map(text => (
        <ListItem key={text} sx={{ display: 'list-item', pl:0, pb:0 }}>
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
        href="https://masa-devs.net/"
      >
         https://masato-210831.github.io/corporate_site_220217/
      </Link>
    ),
  },
  {
    title:"アプリ用サンプル置き場",
    description:(
      <Link href="https://drive.google.com/drive/folders/14SU1kJ6NFKjfBMrKyq6F1ZGJgTra1MPT" >
      サンプル置き場 (ファイル共有用Googleドライブ)
      </Link>
    )
  }
];

const WorkAppDetail_1 = () => {

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

export default WorkAppDetail_1
