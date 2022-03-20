import {useState, useEffect} from "react";
import {makeStyles,Button,Typography,FormGroup,FormControl,Input,InputLabel} from '@material-ui/core'
import { addUser, getuser, addUserEdit } from "../service/api";
import { Navigate, useNavigate, useParams} from 'react-router-dom';
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
const Edituser = () => {
    const [user,setUser]=useState(initialValue);
    const {name,username,email}= user;
    const classes = useStyle();
    const {id} = useParams();
    const Navigate = useNavigate();
    useEffect(()=>{
        LoadUserData();
    },[]);
    const LoadUserData = async () => {
       const response = await getuser(id);
       setUser(response.data);
    }

    const onValueChange= (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const editUserDetail= async() =>{
        await addUserEdit(id,user);
        Navigate('/alluser');
        alert('successfully updated ');
    }

    return (
        <>
            <FormGroup className={classes.container}>
                <Typography variant = "h4">Edit User</Typography>
                <FormControl>
                    <InputLabel></InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={user.name}/>
                </FormControl>
                <FormControl>
                    <InputLabel></InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='username' value={user.username}/>
                </FormControl>
                <FormControl>
                    <InputLabel></InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={user.email}/>
                </FormControl>
                <Button variant="contained" color="primary" onClick={()=>editUserDetail()}>Update</Button>
            </FormGroup>
            </>
            )
}
export default Edituser;