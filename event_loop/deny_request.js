const denyOrExecuteRequestByTime = async (url, time) => {
  const controller = new AbortController();
  const signal = controller.signal;

  const timerId = setTimeout(() => controller.abort(), time);

  try {
    const data = await fetch(url, { signal }).then((response) => {
      if (response.ok) {
        clearTimeout(timerId);
        return response.json();
      }

      throw new Error("Bad request");
    });
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Time is end, request is aborted");

      return [];
    }
  }
};

const URL = "https://jsonplaceholder.typicode.com/users";
new Promise((resolve) => resolve(denyOrExecuteRequestByTime(URL, 1000))).then(
  (data) => console.log("First request", JSON.stringify(data[0], undefined, 2))
);

new Promise((resolve) => resolve(denyOrExecuteRequestByTime(URL, 0))).then(
  (data) => console.log("Second request", JSON.stringify(data[0], undefined, 2))
);
