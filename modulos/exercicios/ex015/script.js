function carregar() {
    var horario = window.document.getElementById('hora')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    horario.innerHTML = `${hora}:${minutos}`

    if (hora < 12) {
        msg.innerHTML += ('Bom dia!')
        document.body.style.background = 'yellow'
    } else if (hora < 18) {
        msg.innerHTML += ('Boa tarde!')
        document.body.style.background = 'orange'
    } else {
        msg.innerHTML += ('Boa noite!')
        document.body.style.background = 'black'
    }
}