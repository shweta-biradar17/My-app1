import React from 'react';
import Dash1 from '../../Dash1';
import Dash from '../../Dash';
import {useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/action';
import { getUsers } from '../../services/users';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


const Home = (props) => {
    
    const dispatcher = useDispatch();
    const state = useSelector((state) => state);
    const classes = useStyles();

    React.useEffect(() =>{
       
        getUsers().then((users)=> 
        {dispatcher(fetchUsers(users)); 
        console.log("Got users"); 
        });
       
    },[dispatcher]);

return (
    <>
    <div class="split left">   
    <br></br>
    <Dash/>
    <TableContainer component={Paper}>       
      <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Date of birth</TableCell>
              <TableCell align="right">Contacts</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">State</TableCell>
            </TableRow>
          </TableHead>  
          <TableBody>
            {state.users.map(user => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.name[0]} {user.name[1]}</TableCell>
                <TableCell align="right">{user.dob}</TableCell>
                <TableCell align="right">{user.contact[0]},{user.contact[1]}</TableCell>
                <TableCell align="right">{user.city}</TableCell>
                <TableCell align="right">{user.state}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          </Table> 
        </TableContainer>

       
    </div>
    <Dash1/>
    </>    
    )
}


export default Home;