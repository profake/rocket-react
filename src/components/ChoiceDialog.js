import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

const data = ["None", "Last week", "Last month", "Last year", "Last two years"];

export default function SimpleDialogDemo(props) {
  const handleListItemClick = (value) => {
    props.onClose(value);
  };

  return (
    <Dialog open={true}>
      <DialogTitle>Filter by</DialogTitle>
      <List sx={{ pt: 0 }}>
        {data.map((value) => (
          <ListItem
            button
            onClick={() => handleListItemClick(value)}
            key={value}
          >
            <ListItemText primary={value} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
