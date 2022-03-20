import { makeStyles, Table, Button, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, {useEffect,useState} from 'react'
import { getuser, delUser } from '../service/api'
import {Link} from 'react-router-dom'
const useStyle = makeStyles(
    {
        table : {
            alignContent:'center',
            width : '80%',
            margin: '80px 0 0 80px'
           
        },
        thead: {
            '& > *': {
              background: '#000000',
              color: '#ffffff'
            }
        },
        head:{
            textAlign: 'center',
        },
        btn :{
            margin: "5px"
        }
    }
)
const Alluser = () => {
    const classes = useStyle();
    const [users, setusers]= useState([]);
    useEffect(() => {
        getAlluser();
    }, []);
    const getAlluser = async () => {
    const response = await  getuser();
    console.log(response.data);
    setusers(response.data);
}
const deleteUser = async (id) => {
    await delUser(id);
    getAlluser();
    alert("user successfully deleted"); 
}
    return (
        <>
        <h1 className={classes.head}> All User</h1> 
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell> Actions</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell> 
                            <TableCell>
                        <Button variant="contained" color="primary" className={classes.btn} component={Link} to={`/edituser/${user.id}`}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={()=>deleteUser(user.id)}>Delete</Button> 
                    </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </>
    )
}

export default Alluser;