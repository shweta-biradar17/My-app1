import React from "react";
import Dash1 from "../../Dash1";
import Dash from "../../Dash";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/action";
import { getUsers } from "../../services/users";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#e7e6e6",

    marginLeft: 0,

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "76ch",
      },
    },
  },
}));

const Home = (props) => {
  const dispatcher = useDispatch();
  const state = useSelector((state) => state);
  const classes = useStyles();
  const [q, setQ] = React.useState("");

  React.useEffect(() => {
    getUsers().then((users) => {
      dispatcher(fetchUsers(users));
      console.log("Got users");
    });
  }, [dispatcher]);

  return (
    <>
      <div class="split left">
        <Dash />

        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              type="text"
              placeholder="Search…"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
              }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>

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
              {state.users
                .filter((users) => {
                  if (q == "") {
                    return users;
                  } else if (
                    users.city.toLowerCase().includes(q.toLowerCase())
                  ) {
                    return users;
                  } else if (
                    users.state.toLowerCase().includes(q.toLowerCase())
                  ) {
                    return users;
                  }
                })
                .map((users) => (
                  <TableRow key={users.id}>
                    <TableCell component="th" scope="row">
                      {users.id}
                    </TableCell>
                    <TableCell align="right">
                      {users.name[0]} {users.name[1]}
                    </TableCell>
                    <TableCell align="right">{users.dob}</TableCell>
                    <TableCell align="right">
                      {users.contact[0]},{users.contact[1]}
                    </TableCell>
                    <TableCell align="right">{users.city}</TableCell>
                    <TableCell align="right">{users.state}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dash1 />
    </>
  );
};

export default Home;
