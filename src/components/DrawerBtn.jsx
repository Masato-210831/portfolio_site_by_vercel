import { useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link as Scroll, animateScroll } from "react-scroll";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavItems } from "../context/NavContext";

const DrawerBtn = ({ from }) => {
  const [btnState, setBtnState] = useState(false);

  // ナビゲーションの項目
  const navItems = useNavItems();


  // home用drawerのナビコンポーネント(Scroll)
  const HomeScrollNav = () => {
    return (
      <>
      {/* fixedのHeaderにIdとScroll要素を使用したスムースはうまく行かなかったので、Headerだけ別処理、Scrollに合わせるため<a>で囲む */}
      <a>
          <Button
            key={navItems[0] + 0}
            sx={{
              color: "#fff",
              height: "100%",
              px: 2,
              py: 0,
              mb: 3,
            }}
            onClick={() => animateScroll.scrollToTop()}
          >
            {" "}
            {navItems[0]}{" "}
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
                px: 2,
                py: 0,
                mb: 3,
              }}
            >
              {navItem}
            </Button>
          </Scroll>
        ))}
      </>
    )
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
                color: "#fff",
                height: "100%",
                px: 2,
                py: 0,
                mb: 3,
              }}
            >
              {navItem}
            </Button>
          </Link>
        ))}
      </>
    )
  }


  return (
    <>
      {/* ハンバーガーボタン関係 */}
      <Button disableRipple sx={{ color: "black", borderRadius: "5px" }}>
        <MenuIcon
          onClick={() => setBtnState((prev) => !prev)}
          sx={{
            fontSize: "40px",
            borderRadius: "5px",
            "&:active": { bgcolor: "gray", color: "#fff" },
          }}
        />
      </Button>

      {/* drawer */}
      {btnState && (
        // Drawer外の背景
        <Box
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "#000",
            opacity: ".3",
          }}
          onClick={() => {
            setBtnState((prev) => !prev);
          }}
        ></Box>
      )}
      <Box
        sx={{
          width: { sm: 250, xs: 200 },
          position: "fixed",
          top: 0,
          bottom: 0,
          right: btnState ? 0 : -250,
          backgroundColor: "#000",
          opacity: 0.8,
          transition: "right 0.3s",
          zIndex: 1200,
        }}
      >
        {/* Drawerの中身 */}
        <Box sx={{ textAlign: "center", mt: "20%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 90,
              height: "100%",
              border: 1,
              textAlign: "center",
              color: "#fff",
              margin: "0 auto 24px",
            }}
          >
            <Typography
              variant="span"
              component="span"
              sx={{
                fontFamily: "bellota",
                fontSize: 28,
                fontStyle: "italic",
              }}
            >
              Masa
            </Typography>
          </Box>

          {/* ホーム用のナビゲーション(スクロール用) */}
          <Box display={"flex"} flexDirection={"column"} height={"100%"}>
            {from === 'home' ? <HomeScrollNav/> : <OtherLinkNav/> }
          </Box>
          
        </Box>
      </Box>
    </>
  );
};

export default DrawerBtn;
