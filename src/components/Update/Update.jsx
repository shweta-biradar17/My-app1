import React from 'react';
import { useDispatch } from "react-redux";
import {updateUser} from '../../App.js'
import { updateUsers } from "../../redux/action";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {Grid,TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const Update = () => {
    const[id,setId] = React.useState("");
    const[firstname,setFirstname] = React.useState("");
    const[lastname,setLastname] = React.useState("");
    const[dob,setDob] = React.useState("");
    const[contact1,setContact1] = React.useState("");
    const[contact2,setContact2] = React.useState("");
    const[city,setCity] = React.useState("");
    const[state,setState] = React.useState("");
    const dispatcher = useDispatch();
     const classes = useStyles();
     const btnstyle = {margin: '18px 0'};

    function handleUpdate(){
        const user = {
     
            firstname: firstname,
            lastname: lastname, 
            dob: dob,
            contact1: contact1,
            contact2: contact2,
            city: city,
            state: state
        }
       
        updateUser(user, id).then((result) => { console.log(result);
            dispatcher(updateUsers({ ...user, id: id }));
    });
  }
return <>
      <form className={classes.root} noValidate autoComplete="off">
          <Grid container>
            <paper elevation={10}>
              <Grid item xs={6}>
                <div className="input-box"> 
                  <div>
                  <TextField value={id} onChange={event => setId(event.target.value)} type="text" required id="standard-basic" label="User Id" required="" fullWidth/>
                  </div>

                  <div >
                  <TextField value={firstname} onChange={event => setFirstname(event.target.value)} type="text" id="standard-basic" label="First Name" fullWidth />
                  </div>

                  <div >
                  <TextField value={lastname} onChange={event => setLastname(event.target.value)} type="text" id="standard-basic" label="Last Name" fullWidth /> 
                  </div>

                  <div >
                  <TextField value={dob} onChange={event => setDob(event.target.value)} type="text" id="standard-basic" label="Date of Birth" fullWidth />
                  </div>

                  <div >
                  <TextField value={contact1} onChange={event => setContact1(event.target.value)} type="text" id="standard-basic" label="Primary Contact" fullWidth/>
                  </div>

                  <div >
                  <TextField value={contact2} onChange={event => setContact2(event.target.value)} type="text" id="standard-basic" label="Alternate Contact" fullWidth />
                  </div>

                  <div >
                  <TextField value={city} onChange={event => setCity(event.target.value)} type="text" id="standard-basic" label="City" fullWidth  />
                  </div>

                  <div>
                  <TextField value={state} onChange={event => setState(event.target.value)} type="text" id="standard-basic" label="State" fullWidth/>
                  </div>

                  <Button variant="contained" color="primary" onClick={handleUpdate} style={btnstyle} type="submit" value="UPDATE" fullWidth>
                    UPDATE
                  </Button>

                </div>
              </Grid>
            <Grid item xs={6}></Grid>
          </paper>
        </Grid>
      </form>
</>
}

export default Update;