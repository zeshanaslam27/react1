import React from 'react'
import {Box, makeStyles } from "@material-ui/core"
import img1 from '../images/maxresdefault.jpg'
const useStyle = makeStyles( {
  header : { 
    alignItems: 'center',
    textAlign : `center`
  },
  img2 : {
    width :'50%',
    height : '50%'
  }
})
const Main = () => {
  const classes = useStyle();
  return (
  <Box className={classes.header} style={{Display: 'flex'}}>
  <h1>Welcome to CRUD</h1>
  <img className={classes.img2} src={img1} alt=""  />
  </Box>
 
  )
}


export default Main;