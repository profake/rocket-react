import { Grid, Typography } from "@mui/material";
import React from "react";

const InfoCard = (props) => {
  const mutedColor = "#ccc";
  const mutedWhite = "#999";

  return (
    <Grid align="left" container rowSpacing={0.5}>
      <Grid item xs={8}>
        <Typography component="div" variant="h5">
          {props.props.mission_name}
        </Typography>
      </Grid>
      <Grid color={mutedWhite} textAlign="end" item xs={4}>
        <Typography variant="overline">MISSION</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">{props.props.rocket_name}</Typography>
      </Grid>
      <Grid color={mutedWhite} textAlign="end" item xs={6}>
        <Typography variant="overline">Rocket</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography color={mutedColor} variant="subtitle1">
          {props.props.date}
        </Typography>
      </Grid>
      <Grid textAlign="end" item xs={6}>
        <Typography color={mutedWhite} variant="overline">
          Date
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography color={mutedColor} variant="subtitle2">
          {props.props.time}
        </Typography>
      </Grid>
      <Grid textAlign="end" item xs={6}>
        <Typography color={mutedWhite} variant="overline">
          Time
        </Typography>
      </Grid>
      {props.props.upcoming && (
        <Grid backgroundColor="#636363" textAlign="center" item xs={12}>
          <Typography color="#fff" variant="overline">
            Upcoming
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default InfoCard;
