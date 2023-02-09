function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando:'
        var numberinicio = Number(inicio.value)
        var numberfim = Number(fim.value)
        var numberpasso = Number(passo.value)

        for(var contador = numberinicio; contador <= numberfim; contador += numberpasso) {
            resultado.innerHTML += `${contador}`
        }
    }        
}
