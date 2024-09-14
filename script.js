const jokeContainer = document.getElementById("meme");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Dark,Pun,Spooky?type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};
btn.addEventListener("click", getJoke);
getJoke();
