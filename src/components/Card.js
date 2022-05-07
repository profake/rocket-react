import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { red } from '@mui/material/colors';

export default function MediaControlCard(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ width: 80, height: 80 }}
        image={props.img_url}
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.mission_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.rocket_name}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'left', pl: 1, pb: 1 }}>
          <IconButton aria-label="YouTube Link">
            <YouTubeIcon/>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
