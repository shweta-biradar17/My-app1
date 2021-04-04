import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../services/users";
import { addUsers } from "../../redux/action";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

const Add = () => {
  const [id, setId] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [contact1, setContact1] = React.useState("");
  const [contact2, setContact2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const dispatcher = useDispatch();
  const classes = useStyles();
  const btnstyle = { margin: "30px 0" };

  function handleSubmit() {
    const user = {
      id: id,
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      contact1: contact1,
      contact2: contact2,
      city: city,
      state: state,
    };

    createUser(user).then((result) => console.log(result));
    dispatcher(addUsers({ ...user }));
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container>
          <paper elevation={10}>
            <Grid item xs={6}>
              <div className="input-box">
                <div>
                  <TextField
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                    type="text"
                    required
                    id="standard-basic"
                    label="User Id"
                    fullWidth
                  />
                </div>

                <div>
                  <TextField
                    value={firstname}
                    onChange={(event) => setFirstname(event.target.value)}
                    type="text"
                    id="standard-basic"
                    label="First Name"
                    fullWidth
                  />
                </div>

                <div>
                  <TextField
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                    type="text"
                    id="standard-basic"
                    label="Last Name"
                    fullWidth
                  />
                </div>

                <div>
                  <TextField
                    value={dob}
                    onChange={(event) => setDob(event.target.value)}
                    type="text"
                    id="standard-basic"
                    label="Date of Birth"
                    fullWidth
                  />
                </div>

                <div>
                  <TextField
                    value={contact1}
                    onChange={(event) => setContact1(event.target.value)}
                    type="text"
                    id="standard-basic"
                    label="Primary Contact"
                    fullWidth
                  />
                </div>

                <div>
                  <TextField
                    value={contact2}
                    onChange={(event) => setContact2(event.target.value)}
                    type="text"
                    id="standard-basic"
                    label="Alternate Contact"
                    fullWidth
                  />
                </div>

                <div>
                  <TextField
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    type="text"
                    id="standard-basic"
                    label="City"
                    fullWidth
                  />
                </div>

                <div>
                  <TextField
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                    type="text"
                    id="standard-basic"
                    label="State"
                    fullWidth
                  />
                </div>

                <Button
                  className="btn1"
                  variant="contained"
                  color="primary"
                  style={btnstyle}
                  onClick={handleSubmit}
                  type="submit"
                  value="ADD"
                  fullWidth
                >
                  ADD
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}></Grid>
          </paper>
        </Grid>
      </form>
    </>
  );
};

export default Add;
