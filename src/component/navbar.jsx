import { AppBar,makeStyles,Toolbar } from '@material-ui/core'
import React from 'react'
import {NavLink } from 'react-router-dom';
const useStyle = makeStyles({
  header : {
      background : '#111111'
  },
  tab : {
      color : '#ffffff', 
      marginRight : 20,
      textDecoration : "none"
  }
})
const Navbar = () => {
    const classes = useStyle();
  return (
<AppBar className={classes.header} position = "static" >
    <Toolbar>
       <NavLink className={classes.tab} to = "./">Crud App</NavLink>
       <NavLink className={classes.tab} to = "alluser">All Users</NavLink>
       <NavLink className={classes.tab} to ="adduser">Add User</NavLink>
</Toolbar>
</AppBar>  )
}

export default Navbar