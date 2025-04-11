

export function fetchDados2(url) {
    fetch(url)
        .then(response => response.json())  
        .then(data => {
            console.log(`Nome: ${data.nome}, Idade: ${data.idade}`);
        })
}
