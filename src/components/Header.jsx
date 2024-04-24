import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Link as Scroll, animateScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useNavItems } from "../context/NavContext";
import DrawerBtn from "./DrawerBtn";




const Header = ({ from }) => {
  // ナビゲーションの項目
  const navItems = useNavItems();

  // タブレット以下用のハンバガーボタンの状態管理
  const hunbergerBtnShow = useMediaQuery("(max-width:767px)");

  // home用drawerのナビコンポーネント(Scroll)
  const HomeScrollNav = () => {
    return (
      <>
        {/* fixedのHeaderにIdとScroll要素を使用したスムースはうまく行かなかったので、Headerだけ別処理、Scrollに合わせるため<a>で囲む */}
        <a>
          <Button
            key={navItems[0] + 0}
            sx={{
              color: "#000",
              height: "100%",
              px: 2,
              fontSize: { md: 16, xs: 14 },
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
                color: "#000",
                height: "100%",
                px: 2,
                fontSize: { md: 16, xs: 14 },
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
  const OtherLinkNav = () => {
    return (
      <>
        {navItems.map((navItem) => (
          <Link
            key={navItem}
            to={{
              pathname: "/",
              hash: "#" + navItem.toLowerCase() + "Section",
            }}
          >
            <Button
              sx={{
                color: "#000",
                height: "100%",
                px: 2,
                fontSize:{md:16, xs:14},
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
    <AppBar
      id="homeSection"
      component="header"
      sx={{
        display: "fixed",
        bgcolor: "#fff",
        justifyContent: "space-between",
        height: { md: 72, xs: 64 },
        width: 1,
        color: "black",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1080px",
          width: 1,
          px: { md: 5 },
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { md: 180, xs: 140 },
            height: "100%",
            border: 1,
            textAlign: "center",
          }}
        >
          <Typography
            variant="span"
            component="span"
            sx={{
              fontFamily: "bellota",
              fontSize: { md: 56, xs: 40 },
              fontStyle: "italic",
            }}
          >
            Masa
          </Typography>
        </Box>

        {/* タブレット以下のレスポンシブ対応 */}
        {!hunbergerBtnShow && (
          <Box height={"100%"}>
            {from === 'home' ?  <HomeScrollNav /> : <OtherLinkNav/> }
          </Box>
        )}

        {/* ハンバーガーボタン関係 */}
        {hunbergerBtnShow && <DrawerBtn from={from} /> }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
