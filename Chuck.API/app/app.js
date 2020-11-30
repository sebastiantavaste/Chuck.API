
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event){

    let url = `http://api.icndb.com/jokes/random`;

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let output = '';
        output += `${data.value.joke}`;
        document.querySelector('.jokes').innerHTML = output;
    })
    .catch(error => {
        console.log(error);
    });

    event.preventDefault();
}