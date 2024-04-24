import React from "react";
import {
  List,
  styled,
  ListItem,
  Box,
  Typography,
} from "@mui/material";
import SectionHeader from "./SectionHeader";

const WorksWrapper = styled("section")(({ theme }) => ({
  maxWidth: "1080px",
  padding: "48px 40px",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    padding: "48px 16px",
  },
}));

const worksList = [
  { date: "2024/04/10", works: "初めての自作アプリ(未押印検出アプリ)が完成!!" },
  { date: "2024/01/08", works: "Signateのコンペティションで上位30%に入る" },
  { date: "2023/11/01", works: "転職に向けて本格的にAI関係の学習を開始" },
  { date: "2021/11/09", works: "プログラミングスクールでWeb制作の学習を開始"},
];

const Works = () => {
  return (
    <>
      <WorksWrapper id="worksSection">
        <SectionHeader FirstWords={"Works"} SecondWords={"- 活動関係 -"} />
        <Box maxWidth={"550px"}>
          <List component="nav" sx={{ pt: 0 }}>

            {/* workリスト */}
            {worksList.map((work, idx) =>
              idx === 0 ? (
                <ListItem  key={work.date} divider sx={{ p: 0, flexDirection:{sm:'row', xs:'column'}, alignItems:{sm:'center', xs:'start'}, '&::before': { content: 'none' } }}>
                  <Typography sx={{ pr: 2, fontSize: { md: 16, xs: 12 } }}>
                    {work.date}
                  </Typography>
                  <Typography sx={{ fontSize: { md: 16, xs: 14 } }}>
                    {work.works}
                  </Typography>
                </ListItem>
              ) : (
                <ListItem key={work.date} divider sx={{ p: 0, pt: 2, flexDirection:{sm:'row', xs:'column'}, alignItems:{sm:'center', xs:'start'},'&::before': { content: 'none' }  }}>
                  <Typography sx={{ pr: 2, fontSize: { md: 16, xs: 12 } }}>
                    {work.date}
                  </Typography>
                  <Typography sx={{ fontSize: { md: 16, xs: 14 } }}>
                    {work.works}
                  </Typography>
                </ListItem>
              )
            )}

          </List>
        </Box>
      </WorksWrapper>
    </>
  );
};

export default Works;
