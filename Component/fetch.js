const fetchFunc = () => {
    //-------------------------------------FETCH

// fetch('https://api.chucknorris.io/jokes/random')
// .then(res => res.json())
// .then(joke => {
//   chuckJokeParagraph.textContent = joke.value;
// })
fetch('https://api.chucknorris.io/jokes/random')
.then(response => response.json())
.then(joke => console.log(joke.value))
}

export default fetchFunc
