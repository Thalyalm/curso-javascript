function tabuada () {
    var num = document.getElementById('txtnumero')
    var tab = document.getElementById('seltabuada')
    
    if (txtnumero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var numbernum = Number(txtnumero.value)
        var contador = 1
        tab.innerHTML = ''
        while (contador <= 10) {
            var item = document.createElement('option')
            item.text = `${numbernum} x ${contador} = ${numbernum*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
            contador ++
        }
    }
}