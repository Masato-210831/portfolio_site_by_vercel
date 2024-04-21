import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavItems } from "../context/NavContext";


const OtherHeader = () => {
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

        <Box height={'100%'}>
          {navItems.map(navItem => (
            <Link key={navItem} to={{pathname:'/', hash:'#' + navItem.toLowerCase() + 'Section'}}>
              <Button sx={{color:'black', height:'100%',px:2}}> {navItem} </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default OtherHeader;
