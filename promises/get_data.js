const getData = (urls) => {
  const promises = urls.map((url) => fetch(url));

  Promise.all(promises)
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((data) =>
      console.log(
        JSON.stringify(
          data.map((item, index) => ({ [index]: item[0] })),
          undefined,
          2
        )
      )
    );
};

const URLS = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
];

getData(URLS);
