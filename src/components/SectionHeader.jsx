import { Typography, styled } from "@mui/material";
import React from "react";

const SectionHeading = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "32px",
  position: "relative",
  borderBottom: "2px solid #000",
  maxWidth: "fit-content",
});

const SectionHeader = ({ FirstWords, SecondWords }) => {
  return (
    <>
      <SectionHeading>
        {/* SecondWrodsがない場合の分岐 */}
        {SecondWords !== undefined ? (
          <>
            <Typography
              variant="h2"
              fontWeight={600}
              sx={{ mr: "18px", fontSize:{md:'36px', xs:'32px'} }}
            >
              <Typography variant="span" sx={{ color: "#FEAF00" }}>
                {FirstWords[0]}
              </Typography>
              {FirstWords.slice(1)}
            </Typography>
            <Typography sx={{fontSize:{xs:'14px'}}}>{SecondWords}</Typography>
          </>
        ) : (
          <>
            <Typography
              variant="h2"
              fontWeight={600}
              sx={{fontSize:{md:'36px', xs:'26px'}}}
            >
              <Typography variant="span" sx={{ color: "#FEAF00" }}>
                {FirstWords[0]}
              </Typography>
              {FirstWords.slice(1)}
            </Typography>
          </>
        )}
      </SectionHeading>
    </>
  );
};

export default SectionHeader;
