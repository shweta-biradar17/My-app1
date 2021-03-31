import React from 'react'
import fire from 'firebase';
import Home from './components/Home';
import Add from './Add';
import Update from './components/Update/Update';
import Delete from './components/Delete/Delete';
import {Switch,Route,NavLink, Link} from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
const PageNotFound = () => {
  return <div>Page not found</div>;
};


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
          display: "block"
        }
      },

  


  }));
  

function Dash1(){
    const classes = useStyles();
    const history = useHistory();

    const logout = () => {
      fire
        .auth()
        .signOut()
        .then((res) => {
          console.log("Logout successfully.");
          history.push("/login");
        })
        .catch((error) => console.log(error));
    };
  

    return(
      <>

          <div class="split right">
            <div> <br></br>
          </div>

          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <NavLink to="/add" className="list" activeClassName="active" exact> ADD </NavLink>
                 
                  <NavLink to="/update" className="list" activeClassName="active" exact>
                    UPDATE
                  </NavLink>      
                  
                  <NavLink to="/delete" className="list" activeClassName="active" exact>
                    DELETE
                  </NavLink>
                </Typography>
                
                <NavLink to="http://localhost:3000/">
                  <Button variant="contained" color="success">
                      REFRESH
                  </Button>

                  <Button onClick={logout} variant="contained" color="success">
                      Logout
                </Button>
                </NavLink>
              </Toolbar>
            </AppBar>
          </div>
             
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add" component={Add} />
              <Route path="/update" component={Update} />
              <Route path="/delete" component={Delete} />
              <Route path="*" component={PageNotFound} />           
            </Switch>
          </div>
       </>
    )
}
 export default Dash1;
