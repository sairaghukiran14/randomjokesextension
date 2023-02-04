fetch('https://dad-jokes.p.rapidapi.com/random/joke')
.then(data=>data.json())
.then(jokeData=>{
    const jokeText = jokeData.body[0].setup;
    const jokeElement = document.getElementById('jokeElement');
    jokeElement.innerHTML = "A:  "+jokeText;
    const jokeText1 = jokeData.body[0].punchline;
    const jokeElement1 = document.getElementById('jokeElement');
    jokeElement1.innerHTML = "B:  "+jokeText1;
})