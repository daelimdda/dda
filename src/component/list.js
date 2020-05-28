import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nested1: {
    paddingLeft: theme.spacing(4),
  },
  nested2: {
    paddingLeft: theme.spacing(4),
  },
  nested3: {
    paddingLeft: theme.spacing(4),
  },
  nested4: {
    paddingLeft: theme.spacing(4),
  },
  nested5: {
    paddingLeft: theme.spacing(4),
  },
  nested6: {
    paddingLeft: theme.spacing(4),
  },
  nested7: {
    paddingLeft: theme.spacing(4),
  },
  nested8: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);
  const [open5, setOpen5] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };


const gangseo = () => {
    this.setState({
        src:"./road/gangseo.html"
    })
}
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          운전면허시험장-코스
        </ListSubheader>
      }
      className={classes.root}
    >

      <ListItem button onClick={handleClick}>
      <ListItemText primary="도봉" />
      {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button  className={classes.nested}>
          <ListItemText onClick={this.props.dobong} primary="A코스" />
        </ListItem>
        <ListItem button  className={classes.nested}>
          <ListItemText primary="B코스" />
        </ListItem>
        <ListItem button  className={classes.nested}>
          <ListItemText primary="C코스" />
        </ListItem>
        <ListItem button  className={classes.nested}>
          <ListItemText primary="D코스" />
        </ListItem>
      </List>
      </Collapse>
      
      <ListItem button onClick={handleClick1}>
      <ListItemText primary="강서" />
      {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open1} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested1}>
        <ListItemText primary="A" />
        </ListItem>
      </List>
      </Collapse>

      <ListItem button onClick={handleClick2}>
        <ListItemText primary="서부" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested2}>
            <ListItemText primary="A" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}