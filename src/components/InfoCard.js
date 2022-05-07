import { Grid, Typography } from "@mui/material";
import React from "react";

const InfoCard = (props) => {
  const mutedColor = "#ccc";
  const mutedWhite = "#999";

  return (
    <Grid container rowSpacing={0.5}>
      <Grid item xs={6}>
        <Typography component="div" variant="h5">
          {props.props.mission_name}
        </Typography>
      </Grid>
      <Grid color={mutedWhite} textAlign="end" item xs={6}>
        <Typography variant="subtitle1">Mission</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">{props.props.rocket_name}</Typography>
      </Grid>
      <Grid color={mutedWhite} textAlign="end" item xs={6}>
        <Typography variant="subtitle1">Rocket</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography color={mutedColor} variant="subtitle1">
          {props.props.date}
        </Typography>
      </Grid>
      <Grid textAlign="end" item xs={6}>
        <Typography color={mutedWhite} variant="subtitle2">Date</Typography>
      </Grid>
      <Grid item xs={6}>
          <Typography color={mutedColor} variant="subtitle2">{props.props.time}</Typography>
      </Grid>
      <Grid textAlign="end" item xs={6}>
          <Typography color={mutedWhite} variant="subtitle2">Time</Typography>
      </Grid>
    </Grid>
  );
};

export default InfoCard;
