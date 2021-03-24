import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const CustomList = ({ title, primary, icon }) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={title} /><ListItemText primary={primary} />
      </ListItem>
    </List>
  )
}

export default CustomList
