function carregar() {
    var horario = window.document.getElementById('hora')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `${hora}:${minuto}`
    if (hora < 12) {
        ('Bom dia!')
    } else if (hora < 18) {
        ('Boa tarde!')
    } else {
        ('Boa noite!')
    }
}