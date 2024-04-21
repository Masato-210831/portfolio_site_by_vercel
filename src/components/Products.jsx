import React from "react";
import { Box, styled, Grid} from "@mui/material";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { useAppBase } from "../context/NavContext";


// const webImgs = [{img:'./imgs/portfolio_1.jpeg', link:'/details_1'}, {img:'/imgs/portfolio_2.jpeg', link:'/details_2'}, {img:'./imgs/portfolio_3.jpg', link:'/details_3'}]
const webImgs = [{img:'imgs/portfolio_2.jpeg', link:'/details_2'}, {img:'imgs/portfolio_3.jpg', link:'/details_3'},  {img:'imgs/portfolio_4.jpg', link:'/details_4'}]
const appImgs = [{img:'imgs/webapp_1.jpeg', link:'/appdetails_1'}]

const WorksWrapper = styled("section")({
  maxWidth: "1080px",
  padding: "48px 40px",
  margin: "0 auto",
});
const WorksWrapperLast = styled("section")({
  maxWidth: "1080px",
  padding: "48px 40px 72px",
  margin: "0 auto",
});

const ImgFolder = styled("div")({
  width: '100%',
  position: 'relative',
  '&:hover img': {
    transform: 'scale(1.05)',
  }
})


const Products = () => {

  const APP_BASE = useAppBase()

  return (
    <Box bgcolor={"#F2F2F2"} width={"100%"}>
      <WorksWrapper id="productsSection">
        <SectionHeader FirstWords={"Products"} SecondWords={"- Web制作 -"} />
        <Grid container spacing={4}>
          {webImgs.map(({img, link}) => (
            <Grid key={img} item xs={4}>
              <Link to={link}>
                <ImgFolder>
                  <img src={APP_BASE + img} alt="product" style={{width:'100%', boxShadow:'0px 3px 4px rgba(0, 0, 0, 0.3)'}} />
                </ImgFolder>
              </Link>
            </Grid>
          ))}
        </Grid>
      </WorksWrapper>
      <WorksWrapperLast>
        <SectionHeader FirstWords={"Products"} SecondWords={"- Webアプリ -"} />
        <Grid container spacing={2}>
          {appImgs.map(({img, link}) => (
            <Grid key={img} item xs={4}>
              <Link to={link}>
                <ImgFolder>
                  <img src={ APP_BASE + img} alt="product" style={{width:'100%', boxShadow:'0px 3px 4px rgba(0, 0, 0, 0.3)'}} />
                </ImgFolder>
              </Link>
            </Grid>
          ))}
        </Grid>
      </WorksWrapperLast>
    </Box>
  );
};

export default Products;
