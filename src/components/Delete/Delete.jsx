import React from "react";
import { deleteUser } from "../../services/users";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../../redux/action";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Delete = () => {
  const [id, setId] = React.useState("");
  const dispatcher = useDispatch();
  const btnstyle = { margin: "18px 0" };

  function handleDelete() {
    const user = {
      id: parseInt(id),
    };
    deleteUser(id).then((result) => console.log(result));
    dispatcher(deleteUsers({ ...user, id: id }));
  }

  return (
    <>
      <div className="input-box-del">
        <div>
          <TextField
            value={id}
            onChange={(event) => setId(event.target.value)}
            type="text"
            id="standard-basic"
            label="User Id"
            required=""
            fullWidth
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
          style={btnstyle}
          type="submit"
          value="DELETE"
          fullWidth
        >
          DELETE
        </Button>
      </div>
    </>
  );
};

export default Delete;
