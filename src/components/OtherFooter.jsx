import React from "react";
import { Box, styled, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavItems } from "../context/NavContext";

const WorksWrapper = styled("section")({
  maxWidth: "1080px",
  padding: "48px 40px",
  margin: "0 auto",
});

const OtherFooter = () => {

  // ナビゲーションの項目
  const navItems = useNavItems()

  return (
    <Box component="footer" sx={{ bgcolor: "#868686" }}>
      <WorksWrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 180,
            height: "100%",
            border: "1px solid #fff;",
            textAlign: "center",
          }}
        >
          <Typography
            variant="span"
            component="span"
            sx={{
              fontFamily: "bellota",
              fontSize: 56,
              fontStyle: "italic",
              color: "#fff",
            }}
          >
            Masa
          </Typography>
        </Box>
        <Box variant="nav" display={"flex"} justifyContent={"flex-end"}>
          {/* fixedのHeaderにIdとScroll要素を使用したスムースはうまく行かなかったので、Headerだけ別処理、Scrollに合わせるため<a>で囲む */}
          {navItems.map((navItem) => (
            <Link
              key={navItem}
              to={"/#" + navItem.toLowerCase() + "Section"}
              offset={-30}
            >
              <Button sx={{ color: "#fff", height: "100%", p: 2 }}>
                {navItem}
              </Button>
            </Link>
          ))}
        </Box>

        <Divider sx={{ borderColor: "#fff" }} />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={1}
          sx={{ mt: 3 }}
        >
          <Box>
            <a href="https://github.com/Masato-210831">
              <img src="./imgs/GitHub-Mark-Light-32px.png" alt="Git" />
            </a>
          </Box>
          <Box>
            <Typography sx={{ color: "#fff" }}>
              ©︎ 2024 Masa Portfolio site
            </Typography>
          </Box>
        </Box>
      </WorksWrapper>
    </Box>
  );
};

export default OtherFooter;
