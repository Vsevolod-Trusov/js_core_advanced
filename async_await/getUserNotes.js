const BASE_URL = "https://64673847ba7110b663b25514.mockapi.io/api";

const getUserNotes = async (userId) => {
  const user = await fetch(`${BASE_URL}/users/${userId}`).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Bad request");
  });

  const url = new URL(`${BASE_URL}/notes`);
  url.searchParams.append("author", user.email);

  const notesByUser = await fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Bad request");
  });

  return notesByUser;
};

new Promise((resolve) => resolve(getUserNotes(1))).then((data) =>
  console.log(JSON.stringify(data, undefined, 2))
);
