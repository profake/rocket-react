import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function ColorAlerts() {
  return (
    <Alert variant="outlined" severity="error" color="info">
      No results!
    </Alert>
  );
}