import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import YouTubeIcon from "@mui/icons-material/YouTube";

const LaunchInfo = (props) => {
  return (
    <>
      <Grid marginTop="auto" paddingTop="2rem" container>
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          {props.props.wiki_url !== null && (
            <IconButton onClick={props.handleWiki}>
              <ArticleIcon />
            </IconButton>
          )}
          {props.yt_url !== null && (
            <IconButton onClick={props.handleYt}>
              <YouTubeIcon />
            </IconButton>
          )}
        </Grid>
        <Grid
          item
          paddingRight="0.5rem"
          xs={6}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          {props.props.launch_success ? (
            <Typography variant="subtitle2" color="#1fad66">
              Success
            </Typography>
          ) : (
            <Typography variant="subtitle2" color="#d92941">
              Failure
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default LaunchInfo;
