//Half right navigation for add, update, delete
import React from "react";
import fire from "firebase";
import Add from "./components/Add";
import Update from "./components/Update";
import Delete from "./components/Delete";
import { Switch, Route, NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { getUsers } from "./services/users";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/action";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

function Dash1() {
  const classes = useStyles();
  const history = useHistory();
  const dispatcher = useDispatch();
  function refresh() {
    getUsers().then((users) => {
      dispatcher(fetchUsers(users));
    });
  }

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

  return (
    <>
      <div class="split right">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <NavLink
                  to="/add"
                  className="list"
                  activeClassName="active"
                  exact
                >
                  {" "}
                  ADD{" "}
                </NavLink>

                <NavLink
                  to="/update"
                  className="list"
                  activeClassName="active"
                  exact
                >
                  UPDATE
                </NavLink>

                <NavLink
                  to="/delete"
                  className="list"
                  activeClassName="active"
                  exact
                >
                  DELETE
                </NavLink>
              </Typography>

              <Button variant="contained" color="primary" onClick={refresh}>
                REFRESH
              </Button>

              <Button
                style={{ marginLeft: "16px" }}
                onClick={logout}
                variant="contained"
                color="primary"
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </div>

        <Switch>
          <Route path="/add" component={Add} />
          <Route path="/update" component={Update} />
          <Route path="/delete" component={Delete} />
        </Switch>
      </div>
    </>
  );
}
export default Dash1;
