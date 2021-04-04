export function fetchUsers(users) {
  return {
    type: "FETCH_USERS",
    payload: users,
  };
}

export function addUsers(userData) {
  return {
    type: "ADD_USERS",
    payload: userData,
  };
}

export function updateUsers(userData) {
  console.log(userData);
  return {
    type: "UPDATE_USERS",
    payload: userData,
  };
}

export function deleteUsers(userD) {
  return {
    type: "DELETE_USERS",
    payload: userD,
  };
}
