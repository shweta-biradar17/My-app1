export async function getUsers() {
  const userResponse = await fetch("http://localhost:4300/users");
  const users = await userResponse.json();
  return users;
}

export async function createUser(data) {
  console.log(data);
  const response = await fetch("http://localhost:4300/createUser", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
  const result = await response.json();
  return result;
}

export async function deleteUser(id) {
  const response = await fetch(
    "http://localhost:4300/deleteUser" + "?id=" + id,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
}

export async function updateUser(data, id) {
  console.log(data);
  const response = await fetch(
    "http://localhost:4300/updateUser" + "?id=" + id,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
}
