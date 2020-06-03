import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.Name} />
        {open ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <button onClick={props.btnA}>
          <ListItem button className={classes.nested}>
            <ListItemText primary="A" />
          </ListItem>
        </button>
        </List>
        <List component="div" disablePadding>
        <button onClick={props.btnB}>
          <ListItem button className={classes.nested}>
            <ListItemText primary="B" />
          </ListItem>
        </button>
        </List>
        <List component="div" disablePadding>
        <button onClick={props.btnC}>
          <ListItem button className={classes.nested}>
            <ListItemText primary="C" />
          </ListItem>
        </button>
        </List>
        <List component="div" disablePadding>
        <button onClick={props.btnD}>
          <ListItem button className={classes.nested}>
            <ListItemText primary="D" />
          </ListItem>
        </button>
        </List>
      </Collapse>

    </List>
  );
}
