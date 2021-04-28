const jokeURL = 'https://api.chucknorris.io/jokes/random';
fetch(jokeURL).then(resp => {
    //console.log({ resp });
    resp.json().then(({ id, value }) => {
        console.log(id);
        console.log(value);
    });
});