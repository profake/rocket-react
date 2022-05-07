import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BiotechIcon from "@mui/icons-material/Biotech";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function MediaControlCard(props) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: 1,
        width: "20rem",
        height: "25rem",
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <CardMedia
          component="img"
          sx={{ width: 150, height: "auto", pt: 5 }}
          image={props.img_url}
        />
      </Box>
      <CardContent sx={{ textAlign: "left", marginTop: "auto" }}>
        <Typography component="div" variant="h4">
          {props.mission_name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {props.rocket_name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {props.date}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {props.time}
        </Typography>
      </CardContent>
    </Card>
  );
}
