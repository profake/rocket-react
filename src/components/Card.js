import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BiotechIcon from "@mui/icons-material/Biotech";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Grid } from "@mui/material";
import InfoCard from "./InfoCard";

export default function MediaControlCard(props) {

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: 1,
        width: "18rem",
        height: "25rem",
      }}
    >
      <Box backgroundColor="#333" paddingLeft="0.5rem" width="15%">
        <Typography variant="subtitle2" color="text.secondary">
          # {props.number}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <CardMedia
          component="img"
          sx={{ width: 150, height: "auto", pt: 5 }}
          image={props.img_url}
        />
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
