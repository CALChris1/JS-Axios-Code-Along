// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Resonse: ", res);
//   })
//   .catch((e) => {
//     console.log("Error!", e);
//   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  console.log(jokeText);
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/");
    return res.data.joke;
  } catch (e) {
    return "No Jokes are available! Sorry :(";
  }
};

button.addEventListener("click", addNewJoke);
