import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BiotechIcon from "@mui/icons-material/Biotech";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ArticleIcon from "@mui/icons-material/Article";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid } from "@mui/material";
import InfoCard from "./InfoCard";
import IconButton from "@mui/material/IconButton";

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
      <Box
        marginTop="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="subtitle2" color="text.secondary">
          {props.launch_success ? "Success" : "Failure"}
        </Typography>
      </Box>
      <Box
        marginTop="auto"
        display="flex"
        justifyContent="start"
        alignItems="start"
      >
        {props.wiki_url !== null && (
          <IconButton onClick={handleWikiOnClick}>
            <ArticleIcon />
          </IconButton>
        )}
        {props.yt_url !== null && (
          <IconButton onClick={handleYtOnClick}>
            <YouTubeIcon />
          </IconButton>
        )}
      </Box>
      <Box
        sx={{
          padding: "0.5rem",
          background: "#282828",
          width: "100%",
          marginTop: "auto",
        }}
      >
        <InfoCard props={props} />
      </Box>
    </Card>
  );
}
