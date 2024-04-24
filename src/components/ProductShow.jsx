import React from "react";
import { styled, Box, Typography, Link, List, ListItem } from "@mui/material";
import SectionHeader from "./SectionHeader";
import { useAppBase } from "../context/NavContext";

const WorksWrapper = styled("section")(({theme}) => ({
  maxWidth: "1080px",
  padding: "48px 40px",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    padding: "48px 16px",
  },
}));

const ProductShow = ({data, details}) => {
  
  const APP_BASE = useAppBase()

  return (
    <WorksWrapper>
      <SectionHeader FirstWords={data.name} />
      <Box display={"flex"} sx={{flexDirection:{sm:'row', xs:'column'}}}>

        <Box sx={{ mr: 10, mb:{sm:0, xs:3} , maxWidth: "496px"}}>
          <img
            src={APP_BASE + data.imgPath}
            alt="product"
            style={{ maxWidth: "100%", border:'1px solid #000', boxShadow:'3px 3px 3px rgba(0, 0, 0, 0.2)'  }}
          />
        </Box>


        <Box>
          {details.map((item, index) => (
            <Box key={item + index} sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                component="dt"
                sx={{ fontWeight: "bold" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" component="dd">
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </WorksWrapper>
  );
};

export default ProductShow;
