import {useState} from "react";
import {makeStyles,Button,Typography,FormGroup,FormControl,Input,InputLabel} from '@material-ui/core'
import { addUser } from "../service/api";
import {Navigate, useNavigate} from 'react-router-dom';
const useStyle = makeStyles ({
    container : {
        width: '50%',
        margin : '5% 0 0 25%',
        '&>*':{
            marginTop: '20px'
        }
    }
}

)
const initialValue = {
    name:"",
    username: "",
    email : ""
};
const Adduser = () => {
    const [user,setUser]=useState(initialValue);
    const classes = useStyle();
    const Navigate = useNavigate();
    const onValueChange= (e) => {
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }
    const addUserDetail= async() =>{
        await addUser(user);
        Navigate('/alluser');
    }
    return (
        <>
            <FormGroup className={classes.container}>
                <Typography variant = "h4">Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name'/>
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='username'/>
                </FormControl>
                <FormControl>
                    <InputLabel>E-mail</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email'/>
                </FormControl>
                <Button variant="contained" color="primary" onClick={()=>addUserDetail()}>Add User</Button>
            </FormGroup>
            </>
            )
}
export default Adduser;