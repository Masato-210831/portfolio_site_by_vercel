import { Box, Typography, AppBar, Toolbar, Button, useMediaQuery, styled } from "@mui/material";
import { Link as Scroll, animateScroll } from "react-scroll";
import { useNavItems } from "../context/NavContext";
import DrawerBtn from "./DrawerBtn";




const Header = () => {
  const hunbergerBtnShow = useMediaQuery('(max-width:767px)')


  
  // ナビゲーションの項目
  const navItems = useNavItems()

  return (

    <AppBar
      id="homeSection"
      component='header'
      sx={{
        display: "fixed",
        bgcolor: "#fff",
        justifyContent: "space-between",
        height: 72,
        width:1,
        color:'black'
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent:"space-between",
          maxWidth: '1080px',
          width:1,
          px: {sm:5},
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent:'center',
            alignItems:'center',
            width: 180,
            height: "100%",
            border: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="span" component='span' sx={{ fontFamily:'bellota',fontSize: 56, fontStyle: "italic" }}>
            Masa
          </Typography>
        </Box>

        {!hunbergerBtnShow &&
          <Box height={'100%'}>
            {/* fixedのHeaderにIdとScroll要素を使用したスムースはうまく行かなかったので、Headerだけ別処理、Scrollに合わせるため<a>で囲む */}
            <a>
              <Button key={navItems[0] + 0} sx={{color:'black', height:'100%',px:2}} onClick={() => animateScroll.scrollToTop()}> {navItems[0]} </Button>
            </a>
            {navItems.slice(1).map(navItem => (
              <Scroll key={navItem} to={navItem.toLowerCase() + 'Section'}  smooth={true} offset={-30}>
                <Button sx={{color:'black', height:'100%',px:2}}> {navItem} </Button>
              </Scroll>
            ))}
          </Box>
        }


        {/* ハンバーガーボタン関係 */}
        <DrawerBtn hunbergerBtnShow={hunbergerBtnShow}/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
