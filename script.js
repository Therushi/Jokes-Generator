const mainJoke = document.querySelector("#joke");
const button = document.querySelector('#jokeBtn');
const apiUrl = "https://api.chucknorris.io/jokes/random"


button.addEventListener("click",() => {
    fetch(apiUrl)
    .then((res)=>res.json())
    .then((data)=> {
        console.log(data.value)
        mainJoke.innerText = data.value
    })
    .catch((err)=>console.log(err));
})