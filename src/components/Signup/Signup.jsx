import React from "react";
import fire from "firebase";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [cpassword, setCpassword] = React.useState("");
  const [progress, setProgress] = React.useState(false);
  const classes = useStyles();

  const signup = () => {
    if (password != cpassword) {
      alert("Password does not match");
    } else {
      setProgress(false);
      clearError();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("User registered successfully.");
          // ...
        })
        .catch((error) => {
          console.log(error);
          switch (error.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(error.message);
              break;
            case "auth/weak-password":
              setPasswordError(error.message);
              break;
            default:
          }
        });
    }
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  if (progress) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="email"
            autoFocus
          />
          <p>{emailError}</p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <p>{passwordError}</p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cpassword"
            label="Confirm Password"
            type="password"
            id="cpassword"
            onChange={(e) => setCpassword(e.target.value)}
            value={cpassword}
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={signup}
            className={classes.submit}
          >
            Sign up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Log in"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}
