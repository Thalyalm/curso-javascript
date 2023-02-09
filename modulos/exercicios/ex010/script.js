function calcular() {
    var txtv = window.document.querySelector('input#txtvelocidade')
    var res = window.document.querySelector('div#resultado')
    var vel = Number(txtvelocidade.value)
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel}Km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }

    res.innerHTML += `<p>Utilize sempre o cinto de seguramça!</p>`
}