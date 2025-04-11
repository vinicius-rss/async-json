export function fetchDados(url) {
    let xml = new XMLHttpRequest();
    xml.open('GET', url, true);

    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            const response = JSON.parse(xml.responseText);
            
            console.log(`Nome: ${response.nome}, Idade: ${response.idade}`);
        }
    };

    xml.send();
}
