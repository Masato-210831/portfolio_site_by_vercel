import React from "react";
import { List, styled, ListItem, ListItemText, Box } from "@mui/material";
import SectionHeader from "./SectionHeader";


const WorksWrapper = styled("section")({
  maxWidth: "1080px",
  padding: "48px 40px",
  margin: "0 auto",
});

const worksList = [
  {date:'2021/11/09', works:'Pythonを学びながら、Web制作のコミニティに参加'},
  {date:'2022/10/13', works:'本業の転職活動のため、IT関係から離れる'},
  {date:'2024/11/01', works:'本格的に機械学習を開始'},
  {date:'2024/01/08', works:'Signateのコンペティションで上位30%に入る'},
  {date:'2024/04/10', works:'初めての自作アプリ(未押印検出アプリ)を作成'},
]


const Works = () => {
  return (
    <>
    <WorksWrapper id="worksSection">
      <SectionHeader FirstWords={"Works"} SecondWords={"- 活動関係 -"}/>
        <Box maxWidth={'550px'}>
          <List component="nav" sx={{pt:0}}>
            {worksList.map((work, idx) => (
              idx === 0 ? (
                <ListItem key={work.date} divider sx={{p:0}}>
                  <ListItemText primary={work.date} sx={{display:'inline', flex:'none', pr:2}}/>
                  <ListItemText primary={work.works} />
                </ListItem>
              ):(
                <ListItem key={work.date} divider sx={{p:0, pt:2}}>
                  <ListItemText primary={work.date} sx={{display:'inline', flex:'none', pr:2}}/>
                  <ListItemText primary={work.works} />
                </ListItem>
              )
            ))}
          </List>
        </Box>
    </WorksWrapper>
    </>
  );
};

export default Works;
