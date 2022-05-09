import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import InfoCard from "./InfoCard";
import LaunchInfo from "./LaunchInfo";

export default function MediaControlCard(props) {
  const handleWikiOnClick = () => window.open(props.wiki_url, "_blank");
  const handleYtOnClick = () => window.open(props.yt_url, "_blank");

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: 1,
        width: "18rem",
        height: "30rem",
      }}
    >
      <Box backgroundColor="#333" paddingLeft="0.5rem" width="20%">
        <Typography variant="subtitle2" color="text.secondary">
          #{props.number}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <CardMedia
          component="img"
          sx={{ width: 150, height: "auto", marginTop: "2rem" }}
          image={props.img_url}
        />
      </Box>
      {!props.upcoming && (
        <LaunchInfo
          props={props}
          handleWiki={handleWikiOnClick}
          handleYt={handleYtOnClick}
        />
      )}
      <InfoCard props={props} />
    </Card>
  );
}
