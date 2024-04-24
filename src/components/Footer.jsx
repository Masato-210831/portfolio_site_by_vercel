import React from "react";
import { Box, styled, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as Scroll, animateScroll } from "react-scroll";
import { useNavItems } from "../context/NavContext";
import { useAppBase } from "../context/NavContext";

const FooterWrapper = styled("section")(({ theme }) => ({
  maxWidth: "1080px",
  padding: "48px 40px",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    padding: "48px 16px",
  },
}));


const Footer = ({ from }) => {
  const APP_BASE = useAppBase()

   // ナビゲーションの項目
  const navItems = useNavItems()

  // home用drawerのナビコンポーネント(Scroll)
  const HomeFootNav = () => {
    return (
      <>
        {/* fixedのHeaderにIdとScroll要素を使用したスムースはうまく行かなかったので、Headerだけ別処理、Scrollに合わせるため<a>で囲む */}
        <a>
          <Button
            key={navItems[0] + 0}
            sx={{
              color: "#fff",
              height: "100%",
              p: {sm:2, xs:1},
              fontSize: {sm:'16px', xs:'14px'},
            }}
            onClick={() => animateScroll.scrollToTop()}
          >
            {navItems[0]}
          </Button>
        </a>
        {navItems.slice(1).map((navItem) => (
          <Scroll
            key={navItem}
            to={navItem.toLowerCase() + "Section"}
            smooth={true}
            offset={-30}
          >
            <Button
              sx={{
                color: "#fff",
                height: "100%",
                px: {sm:2, xs:1},
                fontSize: {sm:'16px', xs:'14px'},
              }}
            >
              {navItem}
            </Button>
          </Scroll>
        ))}
      </>
    );
  };

  // home以外のページのNavリンクコンポーネント(HomeへのLink)
  const OtherFootNav = () => {
    return (
      <>
        {navItems.map((navItem) => (
          <Link
            key={navItem}
            to={{
              pathname: "/",
              hash: "#" + navItem.toLowerCase() + "Section",
            }}
            offset={-30}
          >
            <Button
              sx={{
                color: "#fff",
                height: "100%",
                p: {sm:2, xs:1},
                fontSize:{sm:'16px', xs:'14px'},
              }}
            >
              {navItem}
            </Button>
          </Link>
        ))}
      </>
    );
  };




  return (
    <Box component="footer" sx={{ bgcolor: "#868686" }}>
      <FooterWrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: {md:180, xs:140},
            height: "100%",
            border: "1px solid #fff;",
            textAlign: "center",
            mb:{md:0, xs:1}
          }}
        >
          <Typography
            variant="span"
            component="span"
            sx={{
              fontFamily: "bellota",
              fontSize: {md:56, xs:40},
              fontStyle: "italic",
              color: "#fff",
            }}
          >
            Masa
          </Typography>
        </Box>
        <Box variant="nav" display={"flex"} justifyContent={"flex-end"}>

          {from === 'home' ? <HomeFootNav/> : <OtherFootNav/> }

        </Box>
        
        <Divider sx={{ borderColor: "#fff" }} />

        <Box display={'flex'} justifyContent={"space-between"} width={1} sx={{ mt: {md:3, xs:2} }}>
          <Box>
            <a href="https://github.com/Masato-210831">
              <img src={APP_BASE + "imgs/GitHub-Mark-Light-32px.png"} alt="Git" />
            </a>
          </Box>
          <Box sx={{margin:'auto 0'}}>
            <Typography sx={{color:'#fff', fontSize:{md:16, sm:14, xs:12}}}>©︎ 2024 Masa Portfolio site</Typography>
          </Box>
        </Box>
      </FooterWrapper>
    </Box>
  );
};

export default Footer;
