function nascidoem() {
    var pais = window.document.querySelector('input#nascionalidade')
    var res = window.document.querySelector('div#resultado')
    res.innerHTML = `<p>Vivendo em ${pais.value}...</p>`

    if (pais === 'Brasil') {
        res.innerHTML += "<p>Você é brasileiro!</p>";
    }else {
        res.innerHTML += "<p>Você é estrangeiro!</p>";
    }
}